import { useEffect, useRef, useState } from "react";
import type { SortOption } from "../../../features/bookmarks";
import { ArrowDownUp } from "lucide-react";

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

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const handleSelect = (option: SortOption) => {
    onChange(option);
    setIsOpen(false);
  };

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
            const isSelected = option.value === buttonValue;
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
