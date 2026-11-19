import { useMemo, useState } from "react";
import type { Bookmark } from "..";

export type DashboardView = "Home" | "Archived";

const VIEW_FILTERS: Record<DashboardView, (b: Bookmark) => boolean> = {
  Home: (b) => Boolean(!b.isArchived),
  Archived: (b) => Boolean(b.isArchived),
};

const useBookmarksFilters = (bookmarkList: Bookmark[]) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<DashboardView>("Home");

  const viewBookmarks = useMemo(
    () => bookmarkList.filter(VIEW_FILTERS[activeView]),
    [bookmarkList, activeView],
  );

  const filteredBookmarkList = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return viewBookmarks.filter((bookmark) => {
      const matchesSearch =
        !query || bookmark.title.toLowerCase().includes(query);

      const matchesTags =
        selectedTags.length === 0 || //let all
        selectedTags.some((tag) => bookmark.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [viewBookmarks, searchQuery, selectedTags]);

  const tagList = useMemo(() => {
    const counts = viewBookmarks.reduce<Record<string, number>>(
      (acc, bookmark) => {
        bookmark.tags.forEach((name) => {
          acc[name] = (acc[name] ?? 0) + 1;
        });
        return acc;
      },
      {},
    );

    // output
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [viewBookmarks]);

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleViewChange = (view: DashboardView) => {
    setSelectedTags([]);
    setActiveView(view);
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedTags,
    setSelectedTags,
    activeView,
    setActiveView,
    viewBookmarks,
    filteredBookmarkList,
    tagList,
    handleTagChange,
    handleViewChange,
  };
};

export default useBookmarksFilters;
