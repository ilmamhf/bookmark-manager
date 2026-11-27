import { useBookmarkContext } from "../context/BookmarkContext";
import BookmarkCard from "./BookmarkCard";

const BookmarkList = () => {
  const { sortedBookmarks } = useBookmarkContext();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 ">
      {sortedBookmarks?.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmarkItem={bookmark}
        />
      ))}
    </div>
  );
};

export default BookmarkList;
