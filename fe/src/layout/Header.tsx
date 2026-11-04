import icon from "../assets/react.svg";

const Header = () => {
  return (
    <div className="bg-amber-200 w-full h-24 flex py-4 px-8 items-center">
      <div className="border flex rounded-lg py-2">
        <img
          src={icon}
          alt=""
          width={24}
          className="m-2"
        />
        <input
          type="text"
          name=""
          id=""
          value="Search by title..."
        />
      </div>

      <div className="flex items-center ml-auto gap-4">
        <button className="flex bg-green-600 rounded-xl p-4 items-center justify-center">
          <span>+ Add Bookmark</span>
        </button>

        <div className="flex border rounded-full aspect-square items-center justify-center w-12 h-12">
          <img
            src={icon}
            alt=""
            width={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
