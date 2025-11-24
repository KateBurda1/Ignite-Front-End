const missing = (key: string) =>
  process.env.NODE_ENV === "production"
    ? new Error(`Missing required env var: ${key}`)
    : undefined;

const get = (key: string, fallback?: string) => {
  const value = process.env[key] ?? fallback;
  if (!value && !fallback) {
    missing(key);
  }
  return value;
};

export const env = {
  apiBaseUrl: get(
    "NEXT_PUBLIC_API_BASE_URL",
    "https://app.ingnityourgrowth.com",
  ),
  supabaseUrl: get("NEXT_PUBLIC_SUPABASE_URL"),
  supabaseAnonKey: get("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  supabaseServiceKey: get("SUPABASE_SERVICE_ROLE_KEY"),
  backendApiKey: get("IGNITE_BACKEND_API_KEY"),
  openAiKey: get("OPENAI_API_KEY"),
  pineconeApiKey: get("PINECONE_API_KEY"),
  pineconeEnvironment: get("PINECONE_ENVIRONMENT"),
  pineconeIndex: get("PINECONE_INDEX"),
};

