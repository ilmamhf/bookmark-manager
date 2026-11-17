import { useEffect, useState } from "react";
import type { Bookmark, CreateBookmarkInput } from "..";
import FormInput from "./FormInput";

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
  const [formData, setFormData] = useState<CreateBookmarkInput | Bookmark>({
    title: "",
    url: "",
    description: "",
    tags: [],
    isArchived: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData?.id,
        title: initialData?.title,
        url: initialData?.url,
        description: initialData?.description,
        tags: initialData?.tags,
        isArchived: initialData?.isArchived,
        updatedAt: initialData?.updatedAt,
        visitCount: initialData?.visitCount,
        lastVisitedAt: initialData?.lastVisitedAt,
        createdAt: initialData?.createdAt,
      });
    } else {
      setFormData({
        title: "",
        url: "",
        description: "",
        tags: [],
        isArchived: false,
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // console.log("handle submit", formData);
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
        className="bg-[#ffffff] rounded-xl p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
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

        <button
          type="submit"
          className="p-2 mt-4 w-30  self-center rounded-md bg-[#004844] text-[#ffffff] hover:bg-[#003835]"
        >
          Submit
        </button>
        <button
          onClick={onClose}
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
