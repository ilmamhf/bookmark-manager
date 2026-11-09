interface TagsCheckboxProps {
  tag: string;
  onTagChange: () => void;
}
const TagsCheckbox = ({ tag, onTagChange }: TagsCheckboxProps) => {
  return (
    <label className="p-2 flex items-center gap-2 bg-amber-100 hover:bg-green-200">
      <input
        type="checkbox"
        name=""
        id=""
        onChange={onTagChange}
      />
      <span>{tag}</span>
      <div className="ml-auto bg-green-200 rounded-xl">
        <span className="p-2">3</span>
      </div>
    </label>
  );
};

export default TagsCheckbox;
