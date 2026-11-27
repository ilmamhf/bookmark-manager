import { useEffect, useState } from "react";
import type { CreateBookmarkInput, Bookmark } from "..";
import api from "../../../api/axios";

const useBookmarks = () => {
  const [bookmarkList, setBookmarkList] = useState<Bookmark[]>([]);

  const fetchBookmark = async () => {
    try {
      const response = await api.get("/bookmarks");
      setBookmarkList(response.data);
    } catch (er) {
      console.error("Fail getting bookmarks:", er);
    }
  };

  // helper
  const updateBookmark = async (b: Bookmark) => {
    try {
      const updatedBookmark: Bookmark = b;
      const response = await api.put(`/bookmarks/${b.id}`, updatedBookmark);
      const changedBookmark = response.data;
      setBookmarkList((prev) =>
        prev.map((item) => (item.id === b.id ? changedBookmark : item)),
      );
    } catch (er) {
      console.error("Fail updating bookmark:", er);
    }
  };

  const addBookmark = async (formData: CreateBookmarkInput) => {
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
  };

  const editBookmark = async (editedBookmark: Bookmark) => {
    try {
      const now = new Date().toISOString();
      await updateBookmark({
        ...editedBookmark,
        updatedAt: now,
      });
    } catch (er) {
      console.error("Fail toggling pin:", er);
    }
  };

  const togglePin = async (b: Bookmark) => {
    try {
      await updateBookmark({
        ...b,
        isPinned: !b.isPinned,
      });
    } catch (er) {
      console.error("Fail toggling pin:", er);
    }
  };

  const toggleArchive = async (b: Bookmark) => {
    try {
      await updateBookmark({
        ...b,
        isArchived: !b.isArchived,
      });
    } catch (er) {
      console.error("Fail toggling archive:", er);
    }
  };

  const handleVisit = async (b: Bookmark) => {
    try {
      await updateBookmark({
        ...b,
        visitCount: b.visitCount + 1,
        lastVisitedAt: new Date().toISOString(),
      });
    } catch (er) {
      console.error("Fail recording visit:", er);
    }
  };

  useEffect(() => {
    fetchBookmark();
  }, []);

  return {
    bookmarkList,
    setBookmarkList,
    fetchBookmark,
    addBookmark,
    editBookmark,
    togglePin,
    toggleArchive,
    handleVisit,
  };
};

export default useBookmarks;
