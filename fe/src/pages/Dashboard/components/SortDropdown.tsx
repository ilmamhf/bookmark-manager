import { useState } from "react";
import icon from "../../../assets/react.svg";
import type { SortOption } from "../../../features/bookmarks";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Recently Updated" },
  { value: "oldest", label: "Oldest Updated" },
  { value: "last-visited", label: "Last Visited" },
  { value: "most-visited", label: "Most Visited" },
  { value: "title-asc", label: "Title (A-Z)" },
  { value: "title-desc", label: "Title (Z-A)" },
];

interface SortDropdownProps {
  buttonValue: SortOption;
  onChange: (value: SortOption) => void;
}

const SortDropdown = ({ buttonValue, onChange }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: SortOption) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="p-2 gap-2 bg-yellow-50 flex items-center justify-center hover:bg-amber-100 rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={icon}
          alt=""
          width={24}
        />
        <span>Sort by</span>
      </button>

      {isOpen && (
        <div className="absolute z-20 w-48 right-0 border p-2 rounded-md bg-amber-50">
          {SORT_OPTIONS.map((option) => {
            const isSelected = option.value === buttonValue;
            return (
              <button
                className={`flex w-full rounded-sm px-2 items-center hover:bg-amber-200 ${isSelected ? "bg-amber-300" : ""}`}
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
