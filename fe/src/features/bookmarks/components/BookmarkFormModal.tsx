import { useEffect, useState } from "react";
import type { Bookmark, CreateBookmarkInput } from "..";
import FormInput from "./FormInput";
import TagChipsField from "./TagChipsField";
import useBookmarkForm from "../hooks/useBookmarkForm";

interface BookmarkFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateBookmarkInput) => void;
  initialData?: Bookmark | null;
}

const BookmarkFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: BookmarkFormModalProps) => {
  const {
    formData,
    setFormData,
    tagDraft,
    setTagDraft,
    handleKeyDownTags,
    removeTag,
    handleSubmit,
  } = useBookmarkForm(isOpen, onClose, onSubmit, initialData);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => {
        setTagDraft("");
        onClose();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffffff] rounded-xl p-6 flex flex-col w-120"
        onClick={(e) => {
          setTagDraft("");
          e.stopPropagation();
        }}
      >
        <FormInput
          label="Title"
          fieldValue={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <FormInput
          label="Link"
          fieldValue={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        />
        <FormInput
          label="Description"
          fieldValue={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          isLong={true}
        />
        {/* tag chips */}
        <TagChipsField
          label="Tags"
          fieldValue={tagDraft}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTagDraft(e.target.value)
          }
          formData={formData}
          onKeyDown={handleKeyDownTags}
          removeTag={removeTag}
        />

        <button
          type="submit"
          className="p-2 mt-4 w-30  self-center rounded-md bg-[#004844] text-[#ffffff] hover:bg-[#003835]"
        >
          Submit
        </button>
        <button
          onClick={() => {
            setTagDraft("");
            onClose();
          }}
          type="button"
          className="p-2 mt-4 w-30 self-center rounded-md bg-[#ffffff] border-[#e8f1f0] border-2 hover:bg-[#e8f1f0]"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookmarkFormModal;
