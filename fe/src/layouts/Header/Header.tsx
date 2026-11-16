import SearchBar from "./components/SearchBar";
import { User2 } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onOpenCreateModal: () => void;
}
const Header = ({
  searchQuery,
  onSearchChange,
  onOpenCreateModal,
}: HeaderProps) => {
  return (
    <div className="bg-[#ffffff] w-full h-24 flex py-4 px-8 items-center">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={onSearchChange}
      />

      <div className="flex items-center ml-auto gap-4 text-white ">
        <button
          className="flex bg-[#004844] rounded-xl p-4 items-center justify-center hover:bg-green-700"
          onClick={onOpenCreateModal}
        >
          <span>+ Add Bookmark</span>
        </button>

        <div className="flex border-2 border-[#004844] rounded-full aspect-square items-center justify-center w-13 h-13 bg-gray-400">
          {/* <img
            src={icon}
            alt=""
            width={40}
          /> */}
          <User2 className="w-12 h-12 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Header;
