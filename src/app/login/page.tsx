'use client';

import { useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/components/theme-provider';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        setIsLoading(false);
        return;
      }

      // Redirect to dashboard or the redirect URL if provided
      const redirect = searchParams.get('redirect') || '/dashboard';
      router.push(redirect);
      router.refresh();
    } catch (err) {
      setError('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/ignite_login_bacground.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-black/20 dark:bg-black/40" />

      {/* Logo */}
      <div className="absolute left-[39px] top-[30px] z-[50] pointer-events-none">
        <img
          src="/ignite_logo_dark.svg"
          alt="Ignite"
          className="h-auto w-[120px]"
          style={{ display: 'block' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">

        {/* Login Card */}
        <Card className="w-[504px] rounded-[4px] border border-border bg-card shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col gap-[21px] px-[48px] pb-[48px] pt-[33px]">
              {/* Heading */}
              <h1 className="font-['Inter',sans-serif] text-2xl font-bold leading-normal text-card-foreground">
                Login to Ignite!
              </h1>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-[21px]">
                {/* Email Field */}
                <div className="flex flex-col gap-[5px]">
                  <label
                    htmlFor="email"
                    className="font-['Inter',sans-serif] text-sm font-medium leading-normal text-card-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 rounded-[4px] border-none bg-muted px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-[2px]">
                  <label
                    htmlFor="password"
                    className="font-['Inter',sans-serif] text-sm font-medium leading-normal text-card-foreground"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 rounded-[4px] border-none bg-muted px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-[4px] bg-destructive/10 p-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className={`h-12 w-full rounded-[4px] font-['Inter',sans-serif] text-base font-bold transition-colors disabled:opacity-50 ${
                    password.length >= 3
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </form>

              {/* Forgot Password Link */}
              <a
                href="#"
                className="mx-auto font-['Inter',sans-serif] text-sm font-bold leading-normal text-muted-foreground transition-colors hover:text-foreground"
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Implement forgot password functionality
                }}
              >
                Forgot Password
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

