import icon from "../../../assets/react.svg";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="border flex rounded-lg py-2">
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
      />
    </div>
  );
};

export default SearchBar;
