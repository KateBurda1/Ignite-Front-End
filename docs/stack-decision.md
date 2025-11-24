## Front-End Stack Decision

### Requirements Snapshot
- Deploy seamlessly on the existing Vercel project (`igniteyourgrowth`). The platform auto-optimizes and preconfigures build targets for Next.js apps, making operational overhead minimal compared to other frameworks.[^vercel]
- Integrate with the Supabase-backed API that already exposes REST endpoints at `https://app.ingnityourgrowth.com`, per the backend README.[^backend]
- Ship a shadcn/ui-driven design system, Vercel AI SDK-powered chatbot, and Pinecone vector search without wrestling with community support gaps.

### Option Review
| Option | Pros | Cons |
| --- | --- | --- |
| **SvelteKit + shadcn-svelte + Vercel AI SDK** | Excellent developer ergonomics; small bundles; adapters exist for Vercel. | shadcn's canonical implementation, Vercel AI SDK examples, and Pinecone recipes skew toward React/Next. Mixing SvelteKit with the React-first AI SDK means additional bridge code (custom fetchers, store interop), increasing initial setup time. |
| **Next.js App Router + shadcn/ui + Vercel AI SDK** | First-class Vercel support (zero-config deploys, image/edge optimizations). shadcn/ui ships React components, so no translation layer. The Vercel AI SDK and Pinecone cookbook samples are React/Next-native, so we can follow documented patterns. Built-in Route Handlers make it straightforward to proxy Supabase + Pinecone traffic without spinning up a separate server. | Slightly larger bundle size than SvelteKit, but acceptable for an internal dashboard-style tool. |

### Decision
Adopt **Next.js 14 App Router + TypeScript + Tailwind + shadcn/ui + Vercel AI SDK** as the Ignite front-end foundation. This keeps every moving part (deployment target, component library, AI SDK, Pinecone integration) on the documented “happy path,” minimizing risk while accelerating time-to-first-feature.

### Implementation Notes
1. Scaffold via `npx create-next-app@latest ignite_app --ts --tailwind --eslint --app --src-dir`.
2. Add shadcn/ui with the official CLI, letting it manage Tailwind config tokens.
3. Keep API communication in dedicated utilities (`src/lib/api.ts`) so the Supabase-backed REST endpoints can be swapped for direct Supabase client calls later.
4. Use Vercel Route Handlers under `src/app/api/chat/route.ts` to orchestrate the AI SDK + Pinecone queries.

[^vercel]: https://vercel.com/igniteyourgrowth
[^backend]: https://github.com/KateBurda1/Ignite-Back-End

