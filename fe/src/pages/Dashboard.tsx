import { useEffect, useState } from "react";
import icon from "../assets/react.svg";
import BookmarkCard from "../features/dashboard/components/BookmarkCard";
import type { Bookmark } from "../features/dashboard";

const bookmarksSample = [
  {
    title: "Claude",
    detail: "Claude.ai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit libero. Officia qui quo veniam aliqua voluptas autem amet aliqua in.",
    tags: ["Tools", "AI", "Learning"],
    seenCount: 0,
    lastSeen: "5 Sep",
    lastEdited: "17 Aug",
  },
  {
    title: "Claude",
    detail: "Claude.ai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit libero. Officia qui quo veniam aliqua voluptas autem amet aliqua in.",
    tags: ["Tools", "AI", "Learning"],
    seenCount: 0,
    lastSeen: "5 Sep",
    lastEdited: "17 Aug",
  },
  {
    title: "Claude",
    detail: "Claude.ai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit libero. Officia qui quo veniam aliqua voluptas autem amet aliqua in.",
    tags: ["Tools", "AI", "Learning"],
    seenCount: 0,
    lastSeen: "5 Sep",
    lastEdited: "17 Aug",
  },
  {
    title: "Claude",
    detail: "Claude.ai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit libero. Officia qui quo veniam aliqua voluptas autem amet aliqua in.",
    tags: ["Tools", "AI", "Learning"],
    seenCount: 0,
    lastSeen: "5 Sep",
    lastEdited: "17 Aug",
  },
];

const Dashboard = () => {
  const [bookmarksList, setBookmarksList] = useState<Bookmark[] | null>(null);

  const fetchBookmark = async () => {
    try {
      const data = bookmarksSample;
      setBookmarksList(data);
    } catch (er) {}
  };

  useEffect(() => {
    fetchBookmark();
  }, []);
  return (
    <div className="p-8 grid grid-flow-row gap-4">
      <div className="flex items-end justify-between">
        <span className="text-xl font-medium">All bookmarks</span>
        <button className="p-2 gap-2 bg-yellow-50 flex items-center justify-center hover:bg-amber-100 rounded-md">
          <img
            src={icon}
            alt=""
            width={24}
          />
          <span>Sort by</span>
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 bg-amber-400">
        {bookmarksList?.map((bookmark) => (
          <BookmarkCard bookmarkItem={bookmark} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
