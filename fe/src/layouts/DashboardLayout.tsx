import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { sampleBookmarks, type Bookmark } from "../features/bookmarks";

interface DashboardLayoutProps {
  children: (
    bookmarkList: Bookmark[],
    filteredBookmarkList: Bookmark[],
  ) => React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [bookmarkList, setBookmarkList] = useState<Bookmark[]>([]);
  const filteredBookmarkList = bookmarkList.filter((bookmark) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query || bookmark.title.toLowerCase().includes(query);

    const matchesTags =
      selectedTags.length === 0 || //let all
      selectedTags.some((tag) => bookmark.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const tagList = [
    ...new Set(bookmarkList.flatMap((bookmark) => bookmark.tags)),
  ];

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const fetchBookmark = async () => {
    try {
      const data = sampleBookmarks;
      setBookmarkList(data);
    } catch (er) {}
  };

  useEffect(() => {
    fetchBookmark();
  }, []);

  return (
    <div className="min-h-screen flex">
      <Sidebar
        tagList={tagList}
        selectedTags={selectedTags}
        handleTagChange={handleTagChange}
      />
      <main className="flex flex-col bg-blue-200 flex-1">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        {children(bookmarkList, filteredBookmarkList)}
      </main>
    </div>
  );
};

export default DashboardLayout;
