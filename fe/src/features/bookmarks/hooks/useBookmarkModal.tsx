import { useState } from "react";
import type { Bookmark } from "..";

const useBookmarkModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingBookmark, setEditingBookmark] = useState<Bookmark | null>(null);

  const openCreateModal = () => {
    setEditingBookmark(null);
    setIsModalOpen(true);
  };

  const openEditModal = (b: Bookmark) => {
    setEditingBookmark(b);
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    editingBookmark,
    openCreateModal,
    openEditModal,
  };
};

export default useBookmarkModal;
