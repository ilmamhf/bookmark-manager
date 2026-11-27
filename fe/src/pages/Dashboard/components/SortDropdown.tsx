import type { SortOption } from "../../../features/bookmarks";
import { ArrowDownUp } from "lucide-react";
import useSortDropdown from "../hooks/useSortDropdown";
import { useBookmarkContext } from "../../../features/bookmarks/context/BookmarkContext";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Recently Updated" },
  { value: "oldest", label: "Oldest Updated" },
  { value: "last-visited", label: "Last Visited" },
  { value: "most-visited", label: "Most Visited" },
  { value: "title-asc", label: "Title (A-Z)" },
  { value: "title-desc", label: "Title (Z-A)" },
];

const SortDropdown = () => {
  const { sortBy, setSortBy } = useBookmarkContext();

  const { isOpen, setIsOpen, dropdownRef, handleSelect } =
    useSortDropdown(setSortBy);

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <button
        className="p-2 gap-2 bg-[#ffffff] flex items-center justify-center hover:bg-[#cfe8e5] rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ArrowDownUp className="w-6 h-6" />
        <span>Sort by</span>
      </button>

      {isOpen && (
        <div className="absolute z-20 w-48 right-0 drop-shadow-md p-2 rounded-md bg-[#ffffff]">
          {SORT_OPTIONS.map((option) => {
            const isSelected = option.value === sortBy;
            return (
              <button
                className={`flex w-full rounded-sm px-2 items-center hover:bg-[#cfe8e5] ${isSelected ? "bg-[#e8f1f0]" : ""}`}
                key={option.value}
                onClick={() => {
                  handleSelect(option.value);
                }}
              >
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
