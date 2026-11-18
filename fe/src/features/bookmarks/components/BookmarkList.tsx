import type { Bookmark } from "..";
import BookmarkCard from "./BookmarkCard";

interface BookmarkListProps {
  bookmarkList: Bookmark[] | null;
  handleOpenEditModal: (b: Bookmark) => void;
  handleTogglePin: (b: Bookmark) => void;
  handleToggleArchive: (b: Bookmark) => void;
}

const BookmarkList = ({
  bookmarkList,
  handleOpenEditModal,
  handleTogglePin,
  handleToggleArchive,
}: BookmarkListProps) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 ">
      {bookmarkList?.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmarkItem={bookmark}
          handleOpenEditModal={handleOpenEditModal}
          handleTogglePin={handleTogglePin}
          handleToggleArchive={handleToggleArchive}
        />
      ))}
    </div>
  );
};

export default BookmarkList;
