import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import {
  sampleBookmarks,
  type Bookmark,
  type BookmarkFormData,
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

  const handleOpenCreateModal = () => {
    setEditingBookmark(null);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (formData: BookmarkFormData) => {
    if (editingBookmark) {
    } else {
      // create
      const newBookmark: Bookmark = {
        id: bookmarkList.length + 1,
        ...formData,
        lastEdited: Date.now().toString(),
        lastSeen: Date.now().toString(),
        seenCount: 0,
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
