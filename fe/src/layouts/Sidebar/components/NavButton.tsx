interface NavButtonProps {
  icon: string;
  text: string;
  onClick: () => void;
  isSelected: boolean;
}

const NavButton = ({ icon, text, onClick, isSelected }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-2 flex items-center gap-2 rounded-lg hover:bg-green-200 ${isSelected ? "bg-amber-200" : "bg-amber-100"}`}
    >
      <img
        src={icon}
        alt=""
        width={32}
      />
      <span>{text}</span>
    </button>
  );
};

export default NavButton;
