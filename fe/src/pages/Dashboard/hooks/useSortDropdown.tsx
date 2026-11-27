import { useState, useRef, useEffect } from "react";
import type { SortOption } from "../../../features/bookmarks";

const useSortDropdown = (onChange: (value: SortOption) => void) => {
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

  return { isOpen, setIsOpen, dropdownRef, handleSelect };
};

export default useSortDropdown;
