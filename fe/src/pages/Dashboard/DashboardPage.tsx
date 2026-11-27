import BookmarkList from "../../features/bookmarks/components/BookmarkList";
import SortDropdown from "./components/SortDropdown";

const DashboardPage = () => {
  return (
    <div className="p-8 grid grid-flow-row gap-4">
      <div className="flex items-end justify-between">
        <span className="text-xl font-medium">All bookmarks</span>
        <SortDropdown />
      </div>

      <BookmarkList />
    </div>
  );
};

export default DashboardPage;
