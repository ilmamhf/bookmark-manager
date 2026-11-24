import { useMemo, useState } from "react";
import type { Bookmark, SortOption } from "..";

const useBookmarksSort = (
  bookmarkList: Bookmark[],
  filteredBookmarkList: Bookmark[],
) => {
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const sortedBookmarks = useMemo(() => {
    const baseList = filteredBookmarkList ? filteredBookmarkList : bookmarkList;

    return baseList.toSorted((a, b) => {
      // pinned bookmarks always come first
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;

      switch (sortBy) {
        case "newest":
          return b.updatedAt > a.updatedAt
            ? 1
            : b.updatedAt < a.updatedAt
              ? -1
              : 0;
        case "oldest":
          return a.updatedAt > b.updatedAt
            ? 1
            : a.updatedAt < b.updatedAt
              ? -1
              : 0;
        case "most-visited":
          return b.visitCount - a.visitCount;
        case "last-visited":
          if (a.lastVisitedAt === null && b.lastVisitedAt === null) return 0;
          if (a.lastVisitedAt === null) return 1;
          if (b.lastVisitedAt === null) return -1;
          return b.lastVisitedAt > a.lastVisitedAt
            ? 1
            : b.lastVisitedAt < a.lastVisitedAt
              ? -1
              : 0;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
      }
    });
  }, [bookmarkList, filteredBookmarkList, sortBy]);

  return {
    sortBy,
    setSortBy,
    sortedBookmarks,
  };
};

export default useBookmarksSort;
