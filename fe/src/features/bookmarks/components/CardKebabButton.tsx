import { useEffect, useRef, useState } from "react";

const buttons = [{ name: "Favorite" }, { name: "Archive" }];
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
          {buttons.map((button) => (
            <button
              key={button.name}
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex w-full rounded-sm px-2 items-center hover:bg-[#cfe8e5]"
            >
              <span>{button.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardKebabButton;
