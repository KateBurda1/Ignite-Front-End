import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

// Secret key for JWT signing (in production, use environment variable)
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

// Session duration (7 days)
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;

// Demo credentials (in production, these would be in a database)
const DEMO_USERS = [
  {
    id: '1',
    email: 'admin@ignite.com',
    password: 'ignite123', // In production, this would be hashed
    name: 'Admin User',
  },
];

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  expiresAt: number;
}

/**
 * Verify user credentials
 */
export async function verifyCredentials(
  email: string,
  password: string
): Promise<User | null> {
  const user = DEMO_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
}

/**
 * Create a session token
 */
export async function createSession(user: User): Promise<string> {
  const expiresAt = Date.now() + SESSION_DURATION;

  const token = await new SignJWT({
    userId: user.id,
    email: user.email,
    name: user.name,
    expiresAt,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(new Date(expiresAt))
    .sign(JWT_SECRET);

  return token;
}

/**
 * Verify and decode a session token
 */
export async function verifySession(
  token: string
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);

    const sessionPayload = payload as unknown as SessionPayload;

    // Check if session has expired
    if (sessionPayload.expiresAt < Date.now()) {
      return null;
    }

    return sessionPayload;
  } catch (error) {
    return null;
  }
}

/**
 * Get the current session from cookies
 */
export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;

  if (!token) {
    return null;
  }

  return verifySession(token);
}

/**
 * Set session cookie
 */
export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  const expiresAt = new Date(Date.now() + SESSION_DURATION);

  cookieStore.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

/**
 * Clear session cookie
 */
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

