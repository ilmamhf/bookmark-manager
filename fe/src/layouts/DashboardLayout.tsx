import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { type Bookmark, type CreateBookmarkInput } from "../features/bookmarks";
import BookmarkFormModal from "../features/bookmarks/components/BookmarkFormModal";
import useBookmarksFilters from "../features/bookmarks/hooks/useBookmarksFilters";
import useBookmarks from "../features/bookmarks/hooks/useBookmarks";
import useBookmarkModal from "../features/bookmarks/hooks/useBookmarkModal";

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
  const {
    bookmarkList,
    addBookmark,
    editBookmark,
    togglePin,
    toggleArchive,
    handleVisit,
  } = useBookmarks();

  const {
    searchQuery,
    setSearchQuery,
    activeView,
    filteredBookmarkList,
    tagList,
    handleTagChange,
    handleViewChange,
  } = useBookmarksFilters(bookmarkList);

  const {
    isModalOpen,
    setIsModalOpen,
    editingBookmark,
    openCreateModal,
    openEditModal,
  } = useBookmarkModal();

  const handleFormSubmit = async (formData: CreateBookmarkInput | Bookmark) => {
    if (editingBookmark) {
      await editBookmark(formData as Bookmark);
    } else {
      await addBookmark(formData);
    }
  };

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
          onOpenCreateModal={openCreateModal}
        />
        {children(
          bookmarkList,
          filteredBookmarkList,
          openEditModal,
          togglePin,
          toggleArchive,
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
