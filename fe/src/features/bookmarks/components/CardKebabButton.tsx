import type { Bookmark } from "..";
import { useBookmarkContext } from "../context/BookmarkContext";
import useBookmarkKebab from "../hooks/useBookmarkKebab";

interface CardKebabButtonProps {
  bookmark: Bookmark;
}

const CardKebabButton = ({ bookmark }: CardKebabButtonProps) => {
  const { openEditModal, togglePin, toggleArchive } = useBookmarkContext();

  const { isOpen, setIsOpen, dropdownRef, handlePin, handleArchive } =
    useBookmarkKebab(bookmark, togglePin, toggleArchive);

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
            key="Pin"
            type="button"
            onClick={handlePin}
            className="flex w-full rounded-sm px-2 items-center hover:bg-[#cfe8e5]"
          >
            <span>{bookmark.isPinned ? "Unpin" : "Pin"}</span>
          </button>
          <button
            key="Edit"
            type="button"
            onClick={() => openEditModal(bookmark)}
            className="flex w-full rounded-sm px-2 items-center hover:bg-[#cfe8e5]"
          >
            <span>Edit</span>
          </button>
          <button
            key="Archive"
            type="button"
            onClick={handleArchive}
            className="flex w-full rounded-sm px-2 items-center hover:bg-[#cfe8e5]"
          >
            <span>{bookmark.isArchived ? "Unarchive" : "Archive"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CardKebabButton;
