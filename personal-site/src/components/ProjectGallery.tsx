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
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={prevImage}
        className="bg-black/50 p-2 rounded-full hover:bg-black transition"
      >
        <FaChevronLeft className="w-5 h-5 text-white" />
      </button>
  
      <div className="w-100 h-100">
        {/* Set a fixed width and height for the image */}
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
        <FaChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
