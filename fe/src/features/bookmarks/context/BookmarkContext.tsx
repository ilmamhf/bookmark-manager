import { createContext, useContext, useMemo } from "react";
import useBookmarks from "../hooks/useBookmarks";
import useBookmarksFilters from "../hooks/useBookmarksFilters";
import useBookmarkModal from "../hooks/useBookmarkModal";
import useBookmarksSort from "../hooks/useBookmarksSort";

type BookmarkContextType = ReturnType<typeof useBookmarks> &
  ReturnType<typeof useBookmarksFilters> &
  ReturnType<typeof useBookmarkModal> &
  ReturnType<typeof useBookmarksSort>;

const BookmarkContext = createContext<BookmarkContextType | null>(null);

interface BookmarkProviderProps {
  children: React.ReactNode;
}

export const BookmarkProvider = ({ children }: BookmarkProviderProps) => {
  const bookmarksState = useBookmarks();
  const filtersState = useBookmarksFilters(bookmarksState.bookmarkList);
  const modalState = useBookmarkModal();
  const sortState = useBookmarksSort(
    bookmarksState.bookmarkList,
    filtersState.filteredBookmarkList,
  );

  const value = useMemo(
    () => ({
      ...bookmarksState,
      ...filtersState,
      ...modalState,
      ...sortState,
    }),
    [bookmarksState, filtersState, modalState, sortState],
  );

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarkContext = (): BookmarkContextType => {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarkProvider",
    );
  }

  return context;
};
