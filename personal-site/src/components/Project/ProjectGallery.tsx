import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectGalleryProps {
  media: string[];
}

export default function ProjectGallery({ media }: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center">
      {/* Fixed-width container for consistent button alignment */}
      <div className="relative w-[1000px] flex items-center">
        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute left-0 bg-black/50 p-2 rounded-full hover:bg-black transition"
        >
          <FaChevronLeft className="w-7 h-7 text-white" />
        </button>
  
        {/* Image Wrapper */}
        <div className="mx-auto max-w-[1000px] max-h-[100px] flex items-center justify-center">
          <img
            src={media[current]}
            className="max-w-[875px] max-h-[500px] object-contain rounded-xl border-4 border-gray-700 shadow-lg"
            alt={`Media ${current}`}
          />
        </div>
  
        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute right-0 bg-black/50 p-2 rounded-full hover:bg-black transition"
        >
          <FaChevronRight className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}