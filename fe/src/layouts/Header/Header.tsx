import { useBookmarkContext } from "../../features/bookmarks/context/BookmarkContext";
import SearchBar from "./components/SearchBar";
import { User2 } from "lucide-react";

const Header = () => {
  const { searchQuery, setSearchQuery, openCreateModal } = useBookmarkContext();
  return (
    <div className="bg-[#ffffff] w-full h-24 flex py-4 px-8 items-center">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex items-center ml-auto gap-4 text-white ">
        <button
          className="flex bg-[#004844] rounded-xl p-4 items-center justify-center hover:bg-[#003835]"
          onClick={openCreateModal}
        >
          <span>+ Add Bookmark</span>
        </button>

        <div className="flex border-2 border-[#004844] rounded-full aspect-square items-center justify-center w-13 h-13 bg-gray-400">
          <User2 className="w-12 h-12 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Header;
