import { useState, useEffect } from "react";
import type { CreateBookmarkInput, Bookmark } from "..";

const useBookmarkForm = (
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (data: CreateBookmarkInput) => void,
  initialData?: Bookmark | null,
) => {
  const [formData, setFormData] = useState<CreateBookmarkInput | Bookmark>({
    title: "",
    url: "",
    description: "",
    tags: [],
    isArchived: false,
  });
  console.log(initialData?.tags);

  const [tagDraft, setTagDraft] = useState("");

  const handleKeyDownTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const cleanTag = tagDraft.trim();

      if (cleanTag && !formData.tags.includes(cleanTag)) {
        setFormData({ ...formData, tags: [...formData.tags, tagDraft] });
      }
      setTagDraft("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tagToRemove),
    }));
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData?.id,
        title: initialData?.title,
        url: initialData?.url,
        description: initialData?.description,
        tags: initialData?.tags,
        isArchived: initialData?.isArchived,
        isPinned: initialData?.isPinned ?? false,
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

      setTagDraft("");
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return {
    formData,
    setFormData,
    tagDraft,
    setTagDraft,
    handleKeyDownTags,
    removeTag,
    handleSubmit,
  };
};

export default useBookmarkForm;
