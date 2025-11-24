## Deployment & Integration Checklist

### 1. Local development
1. Copy `env.example` to `.env.local` and fill in Supabase, Ignite API, OpenAI, and Pinecone secrets.
2. Run `npm install` (once) and `npm run dev` to boot the Next.js app.
3. Verify the public endpoint cards render data from `https://app.ingnityourgrowth.com` and the `/api/chat` route streams responses.

### 2. Connect to Supabase backend
- Backend repo reference: https://github.com/KateBurda1/Ignite-Back-End
- Add your Supabase `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`.
- The helper in `src/lib/api.ts` proxies REST calls to the Supabase instance. Use it inside Server Components or Route Handlers when you need to call the protected ingest endpoints.

### 3. Wire up Pinecone + OpenAI
1. Provision a Pinecone index (recommended: `gpt-4o-mini` companion, 1536-dim).
2. Embed Ignite documents using `text-embedding-3-small` and upsert into Pinecone with metadata fields `title`, `summary`, and `text`.
3. Populate `PINECONE_API_KEY`, `PINECONE_ENVIRONMENT`, and `PINECONE_INDEX`.
4. Add `OPENAI_API_KEY` (or swap the adapter in `src/app/api/chat/route.ts` if you prefer Azure OpenAI).

### 4. Deploy on Vercel
1. Import the `Ignite-Front-End` repository into the `igniteyourgrowth` Vercel project: https://vercel.com/igniteyourgrowth.
2. Set all secrets from `.env.local` in the Vercel dashboard (Project Settings → Environment Variables). Use “Encrypted” for private keys (Supabase service role, API keys).
3. Trigger a Production deploy. Vercel will run `npm run build` automatically; no custom config required.
4. Monitor the deployment logs to confirm the `/api/chat` route sees the configured env vars. Missing keys will return a 500 with a descriptive error.

### 5. Operational next steps
- Add authentication (Vercel, Supabase Auth, or Clerk) so ingest endpoints are protected.
- Expand `IgniteApi.ingest` usages once forms exist for values, insights, and recommendations.
- Hook analytics/observability (e.g., Vercel Web Analytics or Log Snippets) before inviting end-users.

