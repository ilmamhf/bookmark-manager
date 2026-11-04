import icon from "../assets/react.svg";

const Dashboard = () => {
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

      <div>
        <div className="bg-blue-50 p-4 rounded-lg flex flex-col justify-center w-[400px]">
          {/* card header */}
          <label className="flex items-center gap-2 pb-2 border-b">
            <div className="border p-1 aspect-square items-center justify-center flex rounded-lg">
              <img
                src={icon}
                alt=""
                width={32}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-lg">Claude</span>
              <span>claude.ai</span>
            </div>

            <button className="bg-amber-50 border aspect-square rounded-sm flex items-center justify-center w-8 ml-auto self-start hover:bg-gray-200">
              <span className="">⋮</span>
            </button>
          </label>

          {/* card body */}
          <div>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-2">
              <span className="bg-green-200 p-1 rounded-md">Tools</span>
              <span className="bg-green-200 p-1 rounded-md">AI</span>
              <span className="bg-green-200 p-1 rounded-md">Learning</span>
            </div>
          </div>

          {/* card footer */}
          <div className="pt-4 border-t mt-4 flex gap-4">
            <label className="flex gap-2">
              <img
                src={icon}
                alt=""
                width={24}
              />
              <span>67</span>
            </label>
            <label className="flex gap-2">
              <img
                src={icon}
                alt=""
                width={24}
              />
              <span>17 Aug</span>
            </label>
            <label className="flex gap-2">
              <img
                src={icon}
                alt=""
                width={24}
              />
              <span>4 Sep</span>
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
      </div>
    </div>
  );
};

export default Dashboard;
