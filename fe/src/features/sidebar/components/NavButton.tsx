interface NavButtonProps {
  icon: string;
  text: string;
}

const NavButton = ({ icon, text }: NavButtonProps) => {
  return (
    <label className="p-2 flex items-center gap-2 bg-amber-100 rounded-lg hover:bg-green-200">
      <img
        src={icon}
        alt=""
        width={32}
      />
      <span>{text}</span>
    </label>
  );
};

export default NavButton;
