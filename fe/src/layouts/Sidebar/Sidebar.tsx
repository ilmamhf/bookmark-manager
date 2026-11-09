import icon from "../../assets/react.svg";
import NavButton from "./components/NavButton";
import TagsCheckbox from "./components/TagsCheckbox";

interface SidebarProps {
  tagList: string[];
  selectedTags: string[] | null;
  handleTagChange: (value: string) => void | null;
}

const Sidebar = ({ tagList, selectedTags, handleTagChange }: SidebarProps) => {
  return (
    <aside className="w-80 bg-amber-50 p-4">
      <div className="flex items-center py-4 pb-8">
        <div className="p-2 bg-green-700 rounded-xl">
          <img
            src={icon}
            alt=""
            width={24}
          />
        </div>
        <span className="text-xl px-2">Bookmark Manager</span>
      </div>

      <div>
        <NavButton
          icon={icon}
          text="Home"
        />

        <NavButton
          icon={icon}
          text="Archived"
        />
      </div>
      <div className="py-4">
        <label className="p-2">TAGS</label>
        {tagList.map((tag) => (
          <TagsCheckbox
            key={tag}
            tag={tag}
            onTagChange={() => handleTagChange(tag)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
