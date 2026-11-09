import icon from "../assets/react.svg";
import type { Bookmark } from "../features/bookmarks";
import BookmarkList from "../features/bookmarks/components/BookmarkList";

interface DashboardPageProps {
  bookmarkList: Bookmark[];
  filteredBookmarkList: Bookmark[];
}

const DashboardPage = ({
  bookmarkList,
  filteredBookmarkList,
}: DashboardPageProps) => {
  return (
    <div className="p-8 grid grid-flow-row gap-4">
      <div className="flex items-end justify-between">
        <span className="text-xl font-medium">All bookmarks</span>
        <button className="p-2 gap-2 bg-yellow-50 flex items-center justify-center hover:bg-amber-100 rounded-md">
          <img
            src={icon}
            alt=""
            width={24}
          />
          <span>Sort by</span>
        </button>
      </div>

      <BookmarkList
        bookmarkList={
          filteredBookmarkList ? filteredBookmarkList : bookmarkList
        }
      />
    </div>
  );
};

export default DashboardPage;
