import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Hero() {
  return (
    <section
      id="overview"
      className="space-y-6 rounded-2xl border border-border/60 bg-card p-8 shadow-sm"
    >
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="outline" className="text-xs font-mono">
          Supabase · Vercel · Pinecone
        </Badge>
        <Badge>Ignite v2</Badge>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Connect the Ignite API, visualize data, and launch the AI copilots
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          This front-end stitches together the Ignite backend (
          <span className="font-mono text-xs">
            https://app.ingnityourgrowth.com
          </span>
          ) with Supabase storage and Pinecone vector search. Use it as the
          control center for ingest, analytics, and the upcoming AI advisor.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg">
          <a href="#endpoints">Explore API endpoints</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#chatbot">Review AI chatbot plan</a>
        </Button>
      </div>
      <Separator />
      <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
        <div>
          <p className="font-medium text-foreground">Supabase</p>
          <p>Backs all REST endpoints and ingest flows.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Vercel AI SDK</p>
          <p>Handles streaming chat responses for the assistant.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Pinecone</p>
          <p>Stores embeddings for Ignite playbooks + customer data.</p>
        </div>
      </div>
    </section>
  );
}

