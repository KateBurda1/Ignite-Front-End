import { EndpointPanel } from "@/components/data/endpoint-panel";
import type { EndpointDefinition } from "@/data/endpoints";

export function EndpointGrid({ endpoints }: { endpoints: EndpointDefinition[] }) {
  return (
    <section id="endpoints" className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          REST coverage
        </p>
        <h2 className="text-2xl font-semibold">Public GET endpoints</h2>
        <p className="text-muted-foreground">
          Each card performs a live fetch against the Supabase-backed API so you
          can validate data contracts as you build UI components.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {endpoints.map((endpoint) => (
          <EndpointPanel key={endpoint.id} endpoint={endpoint} />
        ))}
      </div>
    </section>
  );
}

