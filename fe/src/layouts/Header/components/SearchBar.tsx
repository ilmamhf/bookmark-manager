import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="border-[#e8f1f0] border-2 flex rounded-lg py-2">
      <Search className="m-2 text-[#7b7d7c]" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="focus: outline-0"
      />
    </div>
  );
};

export default SearchBar;
