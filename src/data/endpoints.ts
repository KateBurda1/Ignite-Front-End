export type EndpointDefinition = {
  id: string;
  title: string;
  description: string;
  path: string;
  docsUrl?: string;
};

export const publicEndpoints: EndpointDefinition[] = [
  {
    id: "data",
    title: "Data",
    description: "Primary dataset powering insights across Ignite.",
    path: "/api/data",
  },
  {
    id: "value-scores",
    title: "Value Scores",
    description: "Weighted value drivers segmented by audience.",
    path: "/api/valuescores",
  },
  {
    id: "insights",
    title: "Insights",
    description: "Narrative insights derived from the Supabase models.",
    path: "/api/insights",
  },
  {
    id: "recommendations",
    title: "Recommendations",
    description: "AI-backed next actions for growth teams.",
    path: "/api/recommendations",
  },
  {
    id: "segments",
    title: "Segments",
    description: "Segment definitions plus size, value, and trends.",
    path: "/api/segments",
  },
  {
    id: "fields",
    title: "Fields",
    description: "Dynamic schema metadata for building UI/analytics.",
    path: "/api/fields",
  },
  {
    id: "sample",
    title: "Sample Dataset",
    description: "Reference payload for Flying Horse demo org.",
    path: "/api/sample/flyinghorse",
  },
];

