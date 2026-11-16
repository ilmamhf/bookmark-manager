interface TagsCheckboxProps {
  tag: string;
  onTagChange: () => void;
  count: number;
}
const TagsCheckbox = ({ tag, onTagChange, count }: TagsCheckboxProps) => {
  return (
    <label className="p-2 flex items-center gap-2 bg-[#ffffff] hover:bg-[#e8f1f0]">
      <input
        type="checkbox"
        name=""
        id=""
        onChange={onTagChange}
      />
      <span>{tag}</span>
      <div className="ml-auto bg-[#e8f1f0] rounded-xl">
        <span className="p-2">{count}</span>
      </div>
    </label>
  );
};

export default TagsCheckbox;
