import { useState } from "react";
import type { Bookmark, SortOption } from "../../features/bookmarks";
import BookmarkList from "../../features/bookmarks/components/BookmarkList";
import SortDropdown from "./components/SortDropdown";
import useBookmarksSort from "../../features/bookmarks/hooks/useBookmarksSort";

interface DashboardPageProps {
  bookmarkList: Bookmark[];
  filteredBookmarkList: Bookmark[];
  handleOpenEditModal: (b: Bookmark) => void;
  handleTogglePin: (b: Bookmark) => void;
  handleToggleArchive: (b: Bookmark) => void;
  handleVisit: (b: Bookmark) => void;
}

const DashboardPage = ({
  bookmarkList,
  filteredBookmarkList,
  handleOpenEditModal,
  handleTogglePin,
  handleToggleArchive,
  handleVisit,
}: DashboardPageProps) => {
  const { sortBy, setSortBy, sortedBookmarks } = useBookmarksSort(
    bookmarkList,
    filteredBookmarkList,
  );

  return (
    <div className="p-8 grid grid-flow-row gap-4">
      <div className="flex items-end justify-between">
        <span className="text-xl font-medium">All bookmarks</span>
        <SortDropdown
          buttonValue={sortBy}
          onChange={setSortBy}
        />
      </div>

      <BookmarkList
        bookmarkList={sortedBookmarks}
        handleOpenEditModal={handleOpenEditModal}
        handleTogglePin={handleTogglePin}
        handleToggleArchive={handleToggleArchive}
        handleVisit={handleVisit}
      />
    </div>
  );
};

export default DashboardPage;
