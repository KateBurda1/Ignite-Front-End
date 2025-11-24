"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RefreshCcw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { EndpointDefinition } from "@/data/endpoints";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://app.ingnityourgrowth.com";

type Status = "idle" | "loading" | "ready" | "error";

export function EndpointPanel({
  endpoint,
}: {
  endpoint: EndpointDefinition;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [payload, setPayload] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setStatus("loading");
    setError(null);
    try {
      const response = await fetch(`${API_BASE}${endpoint.path}`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const json = await response.json();
      setPayload(json);
      setStatus("ready");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }, [endpoint.path]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatted = useMemo(() => {
    if (!payload) {
      return "";
    }
    return JSON.stringify(payload, null, 2);
  }, [payload]);

  return (
    <Card id={endpoint.id} className="flex flex-col border border-border/60">
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-3 text-xl">
            {endpoint.title}
            <Badge variant="secondary" className="font-mono text-xs">
              GET {endpoint.path}
            </Badge>
          </CardTitle>
          <CardDescription>{endpoint.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        {status === "loading" && (
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-[200px] w-full" />
          </div>
        )}
        {status === "error" && (
          <Alert variant="destructive">
            <AlertTitle>Request failed</AlertTitle>
            <AlertDescription>
              {error ?? "We could not reach the Ignite API. Check env vars."}
            </AlertDescription>
          </Alert>
        )}
        {status === "ready" && (
          <ScrollArea className="h-[260px] rounded-md border bg-muted/20">
            <pre className="p-4 text-xs leading-relaxed font-mono whitespace-pre-wrap">
              {formatted}
            </pre>
          </ScrollArea>
        )}
      </CardContent>
      <Separator />
      <CardFooter className="flex items-center justify-between gap-4 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={fetchData}
          disabled={status === "loading"}
          className="gap-2"
        >
          <RefreshCcw size={16} className="shrink-0" />
          Refresh
        </Button>
        <p className="text-xs text-muted-foreground font-mono">
          Base URL: {API_BASE}
        </p>
      </CardFooter>
    </Card>
  );
}

