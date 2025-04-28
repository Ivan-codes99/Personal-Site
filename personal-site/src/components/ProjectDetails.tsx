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
        <div className = "flex flex-col ">
          <div  className = "bg-gray-800 rounded-lg p-5 shadow-lg max-w-lg">
            <div className = "flex gap-6">
              <h1 className = "text-3xl font-bold">
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

            <p className = "text-gray-300 mt-5">
                {description}
            </p>
            </div>

            <div className = "flex flex-wrap gap-3 mt-5 max-w-lg">
              {tech.map((item, idx) => (
                <TechBox key={idx} label={item} />
              ))}

            </div>
        </div>
    )

  }