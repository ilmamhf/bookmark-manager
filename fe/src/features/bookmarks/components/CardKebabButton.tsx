import { useEffect, useRef, useState } from "react";

const CardKebabButton = () => {
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

  const handleFavorite = () => {
    console.log("Favorited");
    setIsOpen(false);
  };

  const handleEdit = () => {
    console.log("Editing");
    setIsOpen(false);
  };

  const handleArchive = () => {
    console.log("Archived");
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative ml-auto"
    >
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        type="button"
        className="bg-[#ffffff] border-[#e8f1f0] border-2 aspect-square rounded-sm flex items-center justify-center w-8 ml-auto self-start hover:bg-[#e8f1f0]"
      >
        <span className="">⋮</span>
      </button>

      {isOpen && (
        <div className="absolute z-20 drop-shadow-sm p-2 rounded-md bg-[#ffffff] right-0">
          <button
            key="Favorite"
            type="button"
            onClick={() => handleFavorite()}
            className="flex w-full rounded-sm px-2 items-center hover:bg-[#cfe8e5]"
          >
            <span>Favorite</span>
          </button>
          <button
            key="Edit"
            type="button"
            onClick={() => handleEdit()}
            className="flex w-full rounded-sm px-2 items-center hover:bg-[#cfe8e5]"
          >
            <span>Edit</span>
          </button>
          <button
            key="Archive"
            type="button"
            onClick={() => handleArchive()}
            className="flex w-full rounded-sm px-2 items-center hover:bg-[#cfe8e5]"
          >
            <span>Archive</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CardKebabButton;
