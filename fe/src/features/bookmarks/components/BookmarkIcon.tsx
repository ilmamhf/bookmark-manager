import { Globe2 } from "lucide-react";
import { useState } from "react";

interface BookmarkIconProps {
  url: string;
}

const BookmarkIcon = ({ url }: BookmarkIconProps) => {
  const [hasError, setHasError] = useState(false);

  const domain = new URL(url.startsWith("http") ? url : `https://${url}`)
    .hostname;

  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

  if (hasError) {
    return (
      <Globe2
        size={2}
        className="text-[#e8f1f0]"
      />
    );
  }
  return (
    <img
      src={faviconUrl}
      alt=""
      className="size-8 rounded-md"
      onError={() => setHasError(true)}
    />
  );
};

export default BookmarkIcon;
