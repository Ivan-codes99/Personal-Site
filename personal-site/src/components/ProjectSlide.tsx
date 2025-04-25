import ProjectGallery from "@/components/ProjectGallery";
import ProjectDetails from "@/components/ProjectDetails";

interface ProjectSlideProps {
  title: string;
  description: string;
  tech: string[];
  codeLink?: string;
  media: string[];
  type: string;
}

export default function ProjectSlide({
  title,
  description,
  tech,
  codeLink,
  media,
  type
}: ProjectSlideProps) {
  return (
    
    <div className="flex mb-25 ml-15 items-center gap-10">
      <div>
        <ProjectGallery media={media} type={type} />
      </div>
      <div>
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
