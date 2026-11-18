import type { KeyboardEventHandler } from "react";
import type { Bookmark, CreateBookmarkInput } from "..";

interface TagChipsFieldProps {
  label: string;
  fieldValue: string;
  onChange: (e: any) => void;
  formData: CreateBookmarkInput | Bookmark;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  removeTag: (t: string) => void;
}

const TagChipsField = ({
  label,
  fieldValue,
  onChange,
  formData,
  onKeyDown,
  removeTag,
}: TagChipsFieldProps) => {
  return (
    <div className="p-2">
      <div className="flex flex-wrap gap-2">
        {formData.tags.map((tag) => (
          <div
            key={tag}
            className="grid grid-flow-col bg-[#e8f1f0] px-2 py-1 rounded-2xl gap-1"
          >
            <span>{tag}</span>
            <button
              type="button"
              className="rounded-4xl aspect-square text-center hover:bg-[#cfe8e5]"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(tag);
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <label className="grid">
        <span>{label}</span>
        <input
          type="text"
          value={fieldValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={
            !fieldValue ? "Write tag here and click ',' or 'Enter" : ""
          }
          className="border p-2"
        />
      </label>
    </div>
  );
};

export default TagChipsField;
