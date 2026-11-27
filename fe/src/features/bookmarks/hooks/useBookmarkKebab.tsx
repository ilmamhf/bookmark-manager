import { useState, useRef, useEffect } from "react";
import type { Bookmark } from "..";

const useBookmarkKebab = (
  bookmark: Bookmark,
  handleTogglePin: (b: Bookmark) => void,
  handleToggleArchive: (b: Bookmark) => void,
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
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

  const handlePin = () => {
    handleTogglePin(bookmark);
    setIsOpen(false);
  };

  const handleArchive = () => {
    handleToggleArchive(bookmark);
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    dropdownRef,
    handlePin,
    handleArchive,
  };
};

export default useBookmarkKebab;
