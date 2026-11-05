import type { Bookmark } from "..";
import icon from "../../../assets/react.svg";

interface BookmarkCardProps {
  bookmarkItem: Bookmark;
}

const BookmarkCard = ({ bookmarkItem }: BookmarkCardProps) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg flex flex-col justify-center">
      {/* card header */}
      <div className="flex items-center gap-2 pb-2 border-b">
        <div className="border p-1 aspect-square items-center justify-center flex rounded-lg">
          <img
            src={icon}
            alt=""
            width={32}
          />
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-lg">{bookmarkItem.title}</span>
          <span>{bookmarkItem.detail}</span>
        </div>

        <button className="bg-amber-50 border aspect-square rounded-sm flex items-center justify-center w-8 ml-auto self-start hover:bg-gray-200">
          <span className="">⋮</span>
        </button>
      </div>

      {/* card body */}
      <div>
        <p className="py-2">{bookmarkItem.description}</p>
        <div className="flex gap-2">
          {bookmarkItem.tags.map((tag) => (
            <span className="bg-green-200 p-1 rounded-md">{tag}</span>
          ))}
        </div>
      </div>

      {/* card footer */}
      <div className="pt-4 border-t mt-4 flex gap-4">
        <label className="flex gap-2">
          <img
            src={icon}
            alt=""
            width={24}
          />
          <span>{bookmarkItem.seenCount}</span>
        </label>
        <label className="flex gap-2">
          <img
            src={icon}
            alt=""
            width={24}
          />
          <span>{bookmarkItem.lastSeen}</span>
        </label>
        <label className="flex gap-2">
          <img
            src={icon}
            alt=""
            width={24}
          />
          <span>{bookmarkItem.lastEdited}</span>
        </label>
        <button className="ml-auto">
          <img
            src={icon}
            alt=""
            width={24}
          />
        </button>
      </div>
    </div>
  );
};

export default BookmarkCard;
