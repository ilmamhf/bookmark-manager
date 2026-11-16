import type { Bookmark } from "..";
import icon from "../../../assets/react.svg";
import { formatDate } from "../../../utils/date";
import CardKebabButton from "./CardKebabButton";

interface BookmarkCardProps {
  bookmarkItem: Bookmark;
}

const BookmarkCard = ({ bookmarkItem }: BookmarkCardProps) => {
  return (
    <div className="bg-[#ffffff] p-4 rounded-lg flex flex-col justify-center">
      {/* card header */}
      <div className="flex items-center gap-2 pb-2 border-b-[#e8f1f0] border-b-2">
        <div className="border-[#e8f1f0] border-2 p-1 aspect-square items-center justify-center flex rounded-lg">
          <img
            src={icon}
            alt=""
            width={32}
          />
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-lg">{bookmarkItem.title}</span>
          <a
            href={`https://${bookmarkItem.url}`}
            target="_blank"
          >
            {bookmarkItem.url}
          </a>
        </div>

        <CardKebabButton />
      </div>

      {/* card body */}
      <div>
        <p className="py-2">{bookmarkItem.description}</p>
        <div className="flex gap-2">
          {bookmarkItem.tags.map((tag) => (
            <span className="bg-[#e8f1f0] p-1 rounded-md">{tag}</span>
          ))}
        </div>
      </div>

      {/* card footer */}
      <div className="pt-4 border-t-[#e8f1f0] border-t-2 mt-4 flex gap-4 items-center">
        <label className="flex gap-2">
          <img
            src={icon}
            alt=""
            width={24}
          />
          <span>{bookmarkItem.visitCount}</span>
        </label>
        <label className="flex gap-2">
          <img
            src={icon}
            alt=""
            width={24}
          />
          <span>{formatDate(bookmarkItem.lastVisitedAt)}</span>
        </label>
        <label className="flex gap-2">
          <img
            src={icon}
            alt=""
            width={24}
          />
          <span>{formatDate(bookmarkItem.updatedAt)}</span>
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
