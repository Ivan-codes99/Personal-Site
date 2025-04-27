import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectGalleryProps {
  media: string[],
  type: string
}

export default function ProjectGallery({ media, type }: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const imageSize = type === "web" ? "w-300 h-200" : "w-100 h-150";

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={prevImage}
        className="bg-black/50 p-2 rounded-full hover:bg-black transition"
      >
        <FaChevronLeft className="w-7 h-7 text-white" />
      </button>
  
      <div className={`${imageSize} border-2 border-black rounded-xl` }>
        <img
          src={media[current]}
          className="w-full h-full object-contain rounded-xl shadow-lg"
          alt={`Media ${current}`}
        />
      </div>
  
      <button
        onClick={nextImage}
        className="bg-black/50 p-2 rounded-full hover:bg-black transition"
      >
        <FaChevronRight className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}