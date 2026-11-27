import type { Bookmark } from "..";
import { formatDate } from "../../../utils/date";
import { useBookmarkContext } from "../context/BookmarkContext";
import BookmarkIcon from "./BookmarkIcon";
import CardKebabButton from "./CardKebabButton";
import { Eye, Clock, Calendar, Pin } from "lucide-react";

interface BookmarkCardProps {
  bookmarkItem: Bookmark;
}

const BookmarkCard = ({ bookmarkItem }: BookmarkCardProps) => {
  const { handleVisit } = useBookmarkContext();

  const onVisit = () => handleVisit(bookmarkItem);
  // handle auto middle click open new tab
  const onVisitAux = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.button === 1) handleVisit(bookmarkItem);
  };
  return (
    <div className="bg-[#ffffff] p-4 rounded-lg flex flex-col justify-center">
      {/* card header */}
      <div className="flex items-center gap-2 pb-2 border-b-[#e8f1f0] border-b-2">
        <a
          href={`https://${bookmarkItem.url}`}
          target="_blank"
          onClick={onVisit}
          onAuxClick={onVisitAux}
          className="border-[#e8f1f0] border-2 p-1 aspect-square items-center justify-center flex rounded-lg"
        >
          <BookmarkIcon url={bookmarkItem.url} />
        </a>

        <div className="flex flex-col">
          <a
            href={`https://${bookmarkItem.url}`}
            target="_blank"
            onClick={onVisit}
            onAuxClick={onVisitAux}
            className="font-medium text-lg"
          >
            {bookmarkItem.title}
          </a>
          <a
            href={`https://${bookmarkItem.url}`}
            target="_blank"
            onClick={onVisit}
            onAuxClick={onVisitAux}
          >
            {bookmarkItem.url}
          </a>
        </div>

        <CardKebabButton bookmark={bookmarkItem} />
      </div>

      {/* card body */}
      <div>
        <p className="py-2">{bookmarkItem.description}</p>
        <div className="flex gap-2">
          {bookmarkItem.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#e8f1f0] p-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* card footer */}
      <div className="pt-4 border-t-[#e8f1f0] border-t-2 mt-4 flex gap-4 items-center">
        <label className="flex gap-2">
          <Eye className="h-6 w-6 text-[#7b7d7c]" />
          <span>{bookmarkItem.visitCount}</span>
        </label>
        <label className="flex gap-2">
          <Clock className="h-6 w-6 text-[#7b7d7c]" />
          <span>{formatDate(bookmarkItem.lastVisitedAt)}</span>
        </label>
        <label className="flex gap-2">
          <Calendar className="h-6 w-6 text-[#7b7d7c]" />
          <span>{formatDate(bookmarkItem.updatedAt)}</span>
        </label>
        {bookmarkItem.isPinned && (
          <Pin
            className="ml-auto h-6 w-6 text-[#004844]"
            role="img"
            aria-label="Pinned"
          />
        )}
      </div>
    </div>
  );
};

export default BookmarkCard;
