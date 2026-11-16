import icon from "../../../assets/react.svg";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="border-[#e8f1f0] border-2 flex rounded-lg py-2">
      <img
        src={icon}
        alt=""
        width={24}
        className="m-2"
      />
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
