import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { type Bookmark, type CreateBookmarkInput } from "../features/bookmarks";
import BookmarkFormModal from "../features/bookmarks/components/BookmarkFormModal";
import { useBookmarkContext } from "../features/bookmarks/context/BookmarkContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const {
    addBookmark,
    editBookmark,
    isModalOpen,
    setIsModalOpen,
    editingBookmark,
  } = useBookmarkContext();

  const handleFormSubmit = async (formData: CreateBookmarkInput | Bookmark) => {
    if (editingBookmark) {
      await editBookmark(formData as Bookmark);
    } else {
      await addBookmark(formData);
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex flex-col bg-[#e8f1f0] flex-1">
        <Header />
        {children}
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
