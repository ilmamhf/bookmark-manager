export interface Bookmark {
  id: number;
  title: string;
  url: string;
  description: string;
  tags: string[];
  isArchived: boolean;
  isPinned: boolean;

  visitCount: number;
  createdAt: string;
  updatedAt: string;
  lastVisitedAt: string | null;
}

export type SortOption = 
 | 'newest'
 | 'oldest'
 | 'most-visited'
 | 'last-visited'
 | 'title-asc'
 | 'title-desc'

export type CreateBookmarkInput = Omit<Bookmark, 'id' | 'visitCount' | 'createdAt' | 'updatedAt' | 'lastVisitedAt' | 'isPinned'>