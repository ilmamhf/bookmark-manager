import { useEffect, useMemo, useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import {
  sampleBookmarks,
  type Bookmark,
  type CreateBookmarkInput,
} from "../features/bookmarks";
import BookmarkFormModal from "../features/bookmarks/components/BookmarkFormModal";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingBookmark, setEditingBookmark] = useState<Bookmark | null>(null);

  const filteredBookmarkList = bookmarkList.filter((bookmark) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query || bookmark.title.toLowerCase().includes(query);

    const matchesTags =
      selectedTags.length === 0 || //let all
      selectedTags.some((tag) => bookmark.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const tagList = useMemo(() => {
    const counts = bookmarkList.reduce<Record<string, number>>(
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
  }, [bookmarkList]);

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

  const handleOpenCreateModal = () => {
    setEditingBookmark(null);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (formData: CreateBookmarkInput) => {
    if (editingBookmark) {
    } else {
      // create
      const newBookmark: Bookmark = {
        id: bookmarkList.length + 1,
        ...formData,
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
        lastVisitedAt: Date.now().toString(),
        visitCount: 0,
      };
      setBookmarkList((prev) => [...prev, newBookmark]);
    }
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
          onOpenCreateModal={handleOpenCreateModal}
        />
        {children(bookmarkList, filteredBookmarkList)}
      </main>

      <BookmarkFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingBookmark}
      />
    </div>
  );
};

export default DashboardLayout;
