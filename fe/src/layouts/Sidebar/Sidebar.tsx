import icon from "../../assets/react.svg";
import type { DashboardView } from "../DashboardLayout";
import NavButton from "./components/NavButton";
import TagsCheckbox from "./components/TagsCheckbox";

interface SidebarProps {
  tagList: { name: string; count: number }[];
  handleTagChange: (value: string) => void | null;
  handleViewChange: (value: DashboardView) => void;
  activeView: DashboardView;
}

const Sidebar = ({
  tagList,
  handleTagChange,
  handleViewChange,
  activeView,
}: SidebarProps) => {
  return (
    <aside className="w-80 bg-[#ffffff] p-4 border-r-[#f3f5f4] border-r-2">
      <div className="flex items-center py-4 pb-8">
        <div className="p-2 bg-[#004844] rounded-xl">
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
          onClick={() => handleViewChange("Home")}
          isSelected={activeView == "Home"}
        />

        <NavButton
          icon={icon}
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
