import { env } from "@/lib/env";

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
};

const withAuthHeader = (headers?: HeadersInit) => {
  if (!env.backendApiKey) {
    return headers ?? defaultHeaders;
  }

  return {
    ...defaultHeaders,
    ...headers,
    "x-api-key": env.backendApiKey,
  };
};

const buildUrl = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${env.apiBaseUrl}${normalized}`;
};

export async function igniteFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(buildUrl(path), {
    ...init,
    headers: withAuthHeader(init?.headers),
    cache: init?.cache ?? "no-store",
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(
      `Ignite API error (${response.status}): ${response.statusText} ${errorBody}`,
    );
  }

  return response.json() as Promise<T>;
}

export const IgniteApi = {
  getData: () => igniteFetch("/api/data"),
  getValueScores: () => igniteFetch("/api/valuescores"),
  getInsights: () => igniteFetch("/api/insights"),
  getRecommendations: () => igniteFetch("/api/recommendations"),
  getSegments: () => igniteFetch("/api/segments"),
  getFields: () => igniteFetch("/api/fields"),
  getSample: (slug = "flyinghorse") => igniteFetch(`/api/sample/${slug}`),
  ingest: <T>(resource: string, payload: T) =>
    igniteFetch(`/internal/ingest/${resource}`, {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

