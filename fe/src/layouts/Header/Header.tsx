import icon from "../../assets/react.svg";
import SearchBar from "./components/SearchBar";

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
    <div className="bg-amber-200 w-full h-24 flex py-4 px-8 items-center">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={onSearchChange}
      />

      <div className="flex items-center ml-auto gap-4">
        <button
          className="flex bg-green-600 rounded-xl p-4 items-center justify-center hover:bg-green-700"
          onClick={onOpenCreateModal}
        >
          <span>+ Add Bookmark</span>
        </button>

        <div className="flex border rounded-full aspect-square items-center justify-center w-12 h-12">
          <img
            src={icon}
            alt=""
            width={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
