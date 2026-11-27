import { useBookmarkContext } from "../../features/bookmarks/context/BookmarkContext";
import NavButton from "./components/NavButton";
import TagsCheckbox from "./components/TagsCheckbox";
import { Bookmark, Home, Archive } from "lucide-react";

const Sidebar = () => {
  const { tagList, handleTagChange, handleViewChange, activeView } =
    useBookmarkContext();
  return (
    <aside className="w-80 bg-[#ffffff] p-4 border-r-[#f3f5f4] border-r-2">
      <div className="flex items-center py-4 pb-8">
        <div className="p-2 bg-[#004844] rounded-xl">
          <Bookmark className="h-6 w-6 text-[#ffffff]" />
        </div>
        <span className="text-xl px-2">Bookmark Manager</span>
      </div>

      <div>
        <NavButton
          icon={Home}
          text="Home"
          onClick={() => handleViewChange("Home")}
          isSelected={activeView == "Home"}
        />

        <NavButton
          icon={Archive}
          text="Archived"
          onClick={() => handleViewChange("Archived")}
          isSelected={activeView == "Archived"}
        />
      </div>
      <div className="py-4">
        <label className="p-2">TAGS</label>
        {tagList.map((tag) => (
          <TagsCheckbox
            key={tag.name}
            tag={tag.name}
            onTagChange={() => handleTagChange(tag.name)}
            count={tag.count}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
