import { useState } from "react";

const buttons = [{ name: "Favorite" }, { name: "Archive" }];
const CardKebabButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative ml-auto">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#ffffff] border-[#e8f1f0] border-2 aspect-square rounded-sm flex items-center justify-center w-8 ml-auto self-start hover:bg-[#e8f1f0]"
      >
        <span className="">⋮</span>
      </button>

      {isOpen && (
        <div className="absolute z-20 drop-shadow-sm p-2 rounded-md bg-amber-50 right-0">
          {buttons.map((button) => (
            <button className="flex w-full rounded-sm px-2 items-center hover:bg-amber-200">
              <span>{button.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardKebabButton;
