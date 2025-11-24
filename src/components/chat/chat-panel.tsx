"use client";

import { useChat } from "ai/react";
import { Loader2, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ChatPanel() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    setInput,
  } = useChat({
    api: "/api/chat",
    maxDepth: 1,
  });

  return (
    <Card className="border border-border/60">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Sparkles size={16} />
          </div>
          <div>
            <CardTitle>Ignite AI Copilot</CardTitle>
            <CardDescription>
              Powered by Pinecone context and the Vercel AI SDK route handler.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Chat error</AlertTitle>
            <AlertDescription>
              {error.message || "Unable to reach /api/chat"}
            </AlertDescription>
          </Alert>
        )}
        <ScrollArea className="h-80 rounded-md border bg-muted/30 p-4">
          {messages.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Ask about Ignite data sources, Supabase ingestion, or Pinecone
              search strategies.
            </p>
          )}
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <Badge variant={message.role === "user" ? "default" : "outline"}>
                  {message.role === "user" ? "You" : "Ignite AI"}
                </Badge>
                <pre className="rounded-md bg-background/60 p-3 text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </pre>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating response…
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <form
          className="flex w-full flex-col gap-3"
          onSubmit={handleSubmit}
          suppressHydrationWarning
        >
          <Textarea
            placeholder="e.g., Draft a POV for the Flying Horse segment"
            value={input}
            onChange={handleInputChange}
            rows={3}
            className="resize-none"
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button type="submit" disabled={isLoading || input.trim().length === 0}>
              {isLoading ? "Thinking..." : "Send"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setInput("")}
              disabled={isLoading || input.length === 0}
            >
              Clear input
            </Button>
          </div>
        </form>
        <p className="text-xs text-muted-foreground">
          We recommend testing locally with `npm run dev` to inspect the streaming
          response before deploying to Vercel.
        </p>
      </CardFooter>
    </Card>
  );
}

