## Ignite Front-End

Next.js App Router UI for the Ignite platform. The client consumes the Supabase-backed API hosted at `https://app.ingnityourgrowth.com` and ships a shadcn/ui design system plus a Pinecone-powered AI assistant.

### Prerequisites
- Node.js 18.18+ (Vercel build image ships with 18/20)
- npm 10+
- Access to the Ignite backend API (`IGNITE_BACKEND_API_KEY`)
- Supabase project credentials
- Pinecone + OpenAI (or Azure OpenAI) keys for the AI chat experience

### Getting Started
```bash
cp env.example .env.local   # fill in secrets afterwards
npm install
npm run dev
```

Visit `http://localhost:3000` to view the app.

### Environment Variables
| Key | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | Points to the Ignite backend (`https://app.ingnityourgrowth.com` by default). |
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional direct Supabase client usage from the browser. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side Supabase access for route handlers (never expose publicly). |
| `IGNITE_BACKEND_API_KEY` | Injected into API calls as the `x-api-key` header for ingest/private endpoints. |
| `OPENAI_API_KEY` | Used by the AI SDK route handler. |
| `PINECONE_API_KEY`, `PINECONE_ENVIRONMENT`, `PINECONE_INDEX` | Configure Pinecone vector search for the chatbot. |

### Project Structure
- `src/lib/env.ts` – centralizes strongly-typed environment access.
- `src/lib/api.ts` – helper for calling the Ignite REST endpoints with authentication baked in.
- `src/app` – App Router layouts, pages, and soon route handlers for the chatbot.
- `components.json` / `tailwind.config.ts` – shadcn/ui configuration.

### Backend Integration
Use the exported helpers:

```ts
import { IgniteApi } from "@/lib/api";

const insights = await IgniteApi.getInsights();
```

For ingest endpoints call `IgniteApi.ingest("data", payload)` from server components or route handlers so the API key stays private.

### Deployment
1. Connect the `Ignite-Front-End` repository to the existing Vercel project (`https://vercel.com/igniteyourgrowth`).
2. Add the variables from `.env.local` to the Vercel dashboard (mark Supabase service + API keys as encrypted).
3. Deploy from `main`; Vercel auto-detects `npm run build` for Next.js 15.
