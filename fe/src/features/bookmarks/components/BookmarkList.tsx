import type { Bookmark } from "..";
import BookmarkCard from "./BookmarkCard";

interface BookmarkListProps {
  bookmarkList: Bookmark[] | null;
}

const BookmarkList = ({ bookmarkList }: BookmarkListProps) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 bg-amber-400">
      {bookmarkList?.map((bookmark) => (
        <BookmarkCard bookmarkItem={bookmark} />
      ))}
    </div>
  );
};

export default BookmarkList;
