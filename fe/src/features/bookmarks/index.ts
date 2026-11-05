export interface Bookmark {
  id: number;
  title: string;
  detail: string;
  description: string;
  tags: string[];
  seenCount: number;
  lastSeen: string;
  lastEdited: string;
}