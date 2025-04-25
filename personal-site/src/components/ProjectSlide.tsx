import ProjectGallery from "@/components/ProjectGallery";
import ProjectDetails from "@/components/ProjectDetails";

interface ProjectSlideProps {
  title: string;
  description: string;
  tech: string[];
  codeLink?: string;
  media: string[];
}

export default function ProjectSlide({
  title,
  description,
  tech,
  codeLink,
  media,
}: ProjectSlideProps) {
  return (
    <div className="flex py-15 pl-50 rounded-xl shadow-lg">
      <div>
        <ProjectGallery media={media} />
      </div>
      <div className = "flex items-center">
        <ProjectDetails
          title={title}
          description={description}
          tech={tech}
          codeLink={codeLink}
        />
      </div>
    </div>
  );
}
