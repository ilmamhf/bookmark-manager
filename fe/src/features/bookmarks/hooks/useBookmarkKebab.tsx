import { useState, useRef, useEffect } from "react";

const useBookmarkKebab = (
  handleTogglePin: () => void,
  handleToggleArchive: () => void,
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
    handleTogglePin();
    setIsOpen(false);
  };

  const handleArchive = () => {
    handleToggleArchive();
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
