import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectDetails from "@/components/Project/ProjectDetails";

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
  
}: ProjectSlideProps) {
  return (
    
    <div className="flex items-center my-30 mx-5 gap-2">
      <div>
        <ProjectGallery media={media} />
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
