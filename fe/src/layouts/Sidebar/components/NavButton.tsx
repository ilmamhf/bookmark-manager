import type { LucideIcon } from "lucide-react/types";

interface NavButtonProps {
  icon: LucideIcon;
  text: string;
  onClick: () => void;
  isSelected: boolean;
}

const NavButton = ({
  icon: Icon,
  text,
  onClick,
  isSelected,
}: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-2 flex items-center gap-2 rounded-lg hover:bg-[#cfe8e5] ${isSelected ? "bg-[#e8f1f0]" : "bg-[#ffffff]"}`}
    >
      {Icon && <Icon className="h-6 w-6 " />}
      <span>{text}</span>
    </button>
  );
};

export default NavButton;
