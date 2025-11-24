import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
import { NextResponse } from "next/server";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

import { env } from "@/lib/env";

const openaiClient = env.openAiKey
  ? new OpenAI({ apiKey: env.openAiKey })
  : null;

const pineconeIndex =
  env.pineconeApiKey && env.pineconeIndex
    ? new Pinecone({
        apiKey: env.pineconeApiKey,
      }).index(env.pineconeIndex)
    : null;

const fallbackContext = `Ignite API base: ${env.apiBaseUrl}
Key endpoints: /api/data, /api/valuescores, /api/insights, /api/recommendations, /api/segments, /api/fields.`;

async function buildContext(question: string) {
  if (!pineconeIndex || !openaiClient) {
    return fallbackContext;
  }

  try {
    const embeddingResponse = await openaiClient.embeddings.create({
      model: "text-embedding-3-small",
      input: question,
    });

    const vector = embeddingResponse.data[0]?.embedding;
    if (!vector) {
      return fallbackContext;
    }

    const queryResponse = await pineconeIndex.query({
      vector,
      topK: 4,
      includeMetadata: true,
    });

    if (!queryResponse.matches?.length) {
      return fallbackContext;
    }

    return queryResponse.matches
      .map((match, idx) => {
        const metadata = (match.metadata ?? {}) as Record<string, unknown>;
        const title = metadata.title ?? `Match ${idx + 1}`;
        const summary =
          metadata.summary ?? metadata.text ?? JSON.stringify(metadata);
        const score = match.score ? match.score.toFixed(3) : "N/A";
        return `Title: ${title}\nScore: ${score}\n${summary}`;
      })
      .join("\n\n");
  } catch (error) {
    console.error("Pinecone lookup failed", error);
    const message =
      error instanceof Error ? error.message : "Unknown Pinecone error";
    return `${fallbackContext}\n\n[Pinecone unavailable: ${message}]`;
  }
}

export async function POST(req: Request) {
  if (!env.openAiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured." },
      { status: 500 },
    );
  }

  const body = await req.json();
  const messages = Array.isArray(body?.messages) ? body.messages : [];
  const userMessage =
    [...messages].reverse().find((msg: { role: string }) => msg.role === "user")
      ?.content ?? "Summarize the Ignite platform.";

  const context = await buildContext(userMessage);

  const openai = createOpenAI({
    apiKey: env.openAiKey,
  });

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: `You are Ignite's growth co-pilot. Ground every answer in the provided context, cite endpoint names, and suggest Supabase or Pinecone actions when relevant.\n\nContext:\n${context}`,
    messages: convertToCoreMessages(messages),
    temperature: 0.2,
  });

  return result.toTextStreamResponse();
}

