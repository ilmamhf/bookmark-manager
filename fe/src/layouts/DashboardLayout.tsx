import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { type Bookmark, type CreateBookmarkInput } from "../features/bookmarks";
import BookmarkFormModal from "../features/bookmarks/components/BookmarkFormModal";
import api from "../api/axios";
import useBookmarksFilters from "../features/bookmarks/hooks/useBookmarksFilters";

interface DashboardLayoutProps {
  children: (
    bookmarkList: Bookmark[],
    filteredBookmarkList: Bookmark[],
    handleOpenEditModal: (b: Bookmark) => void,
    handleTogglePin: (b: Bookmark) => void,
    handleToggleArchive: (b: Bookmark) => void,
    handleVisit: (b: Bookmark) => void,
  ) => React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [bookmarkList, setBookmarkList] = useState<Bookmark[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingBookmark, setEditingBookmark] = useState<Bookmark | null>(null);
  const {
    searchQuery,
    setSearchQuery,
    activeView,
    filteredBookmarkList,
    tagList,
    handleTagChange,
    handleViewChange,
  } = useBookmarksFilters(bookmarkList);

  const fetchBookmark = async () => {
    try {
      const response = await api.get("/bookmarks");
      console.log(response);
      const data = response.data;
      console.log(data);
      setBookmarkList(data);
    } catch (er) {
      console.error("Fail getting bookmarks:", er);
    }
  };

  const handleOpenCreateModal = () => {
    setEditingBookmark(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (b: Bookmark) => {
    setEditingBookmark(b);
    console.log("handle open edit modal", b);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (formData: CreateBookmarkInput | Bookmark) => {
    if (editingBookmark) {
      handleEdit(formData as Bookmark);
    } else {
      // create
      try {
        const now = new Date().toISOString();
        const newBookmark: Bookmark = {
          id: bookmarkList.length + 1,
          ...formData,
          isPinned: false,
          createdAt: now,
          updatedAt: now,
          lastVisitedAt: null,
          visitCount: 0,
        };

        await api.post("/bookmarks", newBookmark);
        setBookmarkList((prev) => [...prev, newBookmark]);
      } catch (er) {
        console.error("Fail adding bookmark:", er);
      }
    }
  };

  const handleTogglePin = async (b: Bookmark) => {
    try {
      const pinPayload: Bookmark = {
        ...b,
        isPinned: !b.isPinned,
      };

      const response = await api.put(`/bookmarks/${pinPayload.id}`, pinPayload);
      const newPinnedBookmark = response.data;
      setBookmarkList((prev) =>
        prev.map((item) =>
          item.id === pinPayload.id ? newPinnedBookmark : item,
        ),
      );
    } catch (er) {
      console.error("Fail toggling pin:", er);
    }
  };

  const handleToggleArchive = async (b: Bookmark) => {
    try {
      const archivePayload: Bookmark = {
        ...b,
        isArchived: !b.isArchived,
      };

      const response = await api.put(
        `/bookmarks/${archivePayload.id}`,
        archivePayload,
      );
      const newArchivedBookmark = response.data;
      setBookmarkList((prev) =>
        prev.map((item) =>
          item.id === archivePayload.id ? newArchivedBookmark : item,
        ),
      );
    } catch (er) {
      console.error("Fail toggling archive:", er);
    }
  };

  const handleVisit = async (b: Bookmark) => {
    try {
      const visitPayload: Bookmark = {
        ...b,
        visitCount: b.visitCount + 1,
        lastVisitedAt: new Date().toISOString(),
      };

      const response = await api.put(
        `/bookmarks/${visitPayload.id}`,
        visitPayload,
      );
      const visitedBookmark = response.data;
      setBookmarkList((prev) =>
        prev.map((item) =>
          item.id === visitPayload.id ? visitedBookmark : item,
        ),
      );
    } catch (er) {
      console.error("Fail recording visit:", er);
    }
  };

  const handleEdit = async (editedBookmark: Bookmark) => {
    try {
      const now = new Date().toISOString();
      const editedBookmarkPayload: Bookmark = {
        ...editedBookmark,
        updatedAt: now,
      };

      const response = await api.put(
        `/bookmarks/${editedBookmark.id}`,
        editedBookmarkPayload,
      );
      const newEditedBookmark = response.data;
      setBookmarkList((prev) =>
        prev.map((b) => (b.id === editedBookmark.id ? newEditedBookmark : b)),
      );
      console.log("Edited");
    } catch (er) {
      console.error("Fail Editing Bookmark:", er);
    }
  };

  useEffect(() => {
    fetchBookmark();
  }, []);

  return (
    <div className="min-h-screen flex">
      <Sidebar
        tagList={tagList}
        handleTagChange={handleTagChange}
        activeView={activeView}
        handleViewChange={handleViewChange}
      />
      <main className="flex flex-col bg-[#e8f1f0] flex-1">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenCreateModal={handleOpenCreateModal}
        />
        {children(
          bookmarkList,
          filteredBookmarkList,
          handleOpenEditModal,
          handleTogglePin,
          handleToggleArchive,
          handleVisit,
        )}
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
