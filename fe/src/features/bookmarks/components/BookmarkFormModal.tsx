import { useEffect, useState } from "react";
import type { Bookmark, BookmarkFormData } from "..";
import FormInput from "./FormInput";

interface BookmarkFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BookmarkFormData) => void;
  initialData?: Bookmark | null;
}

const BookmarkFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: BookmarkFormModalProps) => {
  const [formData, setFormData] = useState<BookmarkFormData>({
    title: "",
    detail: "",
    description: "",
    tags: [],
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData?.title,
        detail: initialData?.detail,
        description: initialData?.description,
        tags: initialData?.tags,
      });
    } else {
      setFormData({ title: "", detail: "", description: "", tags: [] });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-amber-50 p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <FormInput
          label="Title"
          fieldValue={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <FormInput
          label="Detail"
          fieldValue={formData.detail}
          onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
        />
        <FormInput
          label="Description"
          fieldValue={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-green-400 p-2 mt-4 w-30 self-center"
        >
          Submit
        </button>
        <button
          onClick={onClose}
          type="button"
          className="bg-red-400 p-2 mt-4 w-30 self-center"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookmarkFormModal;
