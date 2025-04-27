import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectGalleryProps {
  media: string[];
  type: string; // enforce allowed values
}

export default function ProjectGallery({ media, type }: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const maxSizeClass = type === "web" ? "max-w-[1000px] max-h-[750px]" : "max-w-[300px] max-h-[500px]";

  return (
    <div className="flex items-center justify-center gap-4">
      {/* Left Button */}
      <button
        onClick={prevImage}
        className="bg-black/50 p-2 rounded-full hover:bg-black transition"
      >
        <FaChevronLeft className="w-7 h-7 text-white" />
      </button>

      {/* Image Wrapper */}
      <div className={`flex items-center justify-center ${maxSizeClass}`}>
  <img
    src={media[current]}
    className="max-w-full max-h-full object-contain rounded-xl border-2 border-emerald-500 shadow-lg"
    alt={`Media ${current}`}
  />
</div>



      {/* Right Button */}
      <button
        onClick={nextImage}
        className="bg-black/50 p-2 rounded-full hover:bg-black transition"
      >
        <FaChevronRight className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}
