import { useState } from "react";
import type { Bookmark, SortOption } from "../../features/bookmarks";
import BookmarkList from "../../features/bookmarks/components/BookmarkList";
import SortDropdown from "./components/SortDropdown";

interface DashboardPageProps {
  bookmarkList: Bookmark[];
  filteredBookmarkList: Bookmark[];
}

const DashboardPage = ({
  bookmarkList,
  filteredBookmarkList,
}: DashboardPageProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const sortedBookmarks = filteredBookmarkList
    ? filteredBookmarkList
    : bookmarkList;
  sortedBookmarks.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.createdAt > a.createdAt
          ? 1
          : b.createdAt < a.createdAt
            ? -1
            : 0;
      case "oldest":
        return a.createdAt > b.createdAt
          ? 1
          : a.createdAt < b.createdAt
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

  return (
    <div className="p-8 grid grid-flow-row gap-4">
      <div className="flex items-end justify-between">
        <span className="text-xl font-medium">All bookmarks</span>
        <SortDropdown
          buttonValue={sortBy}
          onChange={setSortBy}
        />
      </div>

      <BookmarkList bookmarkList={sortedBookmarks} />
    </div>
  );
};

export default DashboardPage;
