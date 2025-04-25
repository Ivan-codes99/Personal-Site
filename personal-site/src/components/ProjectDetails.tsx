import { FaGithub } from "react-icons/fa";
import TechBox from "@/components/TechBox";
interface ProjectDetailsProps {
    title: string;
    description: string;
    tech: string[];
    codeLink?: string;
  }
  
  export default function ProjectDetails({
    title,
    description,
    tech,
    codeLink
  }: ProjectDetailsProps) {
    return (
        <div className = "flex flex-col px-10">
            <div className = "flex items-center gap-6">
              <h1 className = "text-2xl font-bold">
                {title}
              </h1>
            
              <a 
                href = {codeLink}
                target = "_blank"
                rel = "noopener roferrer"
              >
                <FaGithub className = "h-6 w-6"/>
              </a>

            </div>

            <p className = "text-gray-300 mt-5 pr-50">
                {description}
            </p>

            <div className = "flex flex-wrap gap-3 mt-5 pr-50">
              {tech.map((item, idx) => (
                <TechBox key={idx} label={item} />
              ))}

            </div>
            

        </div>
    )

  }