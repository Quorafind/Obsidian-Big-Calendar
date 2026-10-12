interface TDuration {
  from: number;
  to: number;
}

interface Query {
  tag: string;
  duration: TDuration | null;
  // Empty means all types
  eventTypes: string[];
  text: string;
  filter: string;
  contentRegex?: string;
  folderPaths?: string[];
  metadataKeys?: string[];
  metadataValues?: Record<string, string>;
}

interface AppLocation {
  hash: string;
  query: Query;
}
