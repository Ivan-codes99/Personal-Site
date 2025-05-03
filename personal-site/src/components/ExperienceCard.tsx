import TechBox from "@/components/TechBox";

interface ExperienceCardProps {
    title: string;
    organization: string;
    description: string;
    date: string;
    tags: string[];
    media: string;
  }
  
  export default function ExperienceCard({
        title,
        organization,
        description,
        date,
        tags,
        media
  }: ExperienceCardProps) {
    return (
      <div className = "flex mb-25 justify-between ">
        <div className = "flex flex-col p-2 rounded-2xl hover:bg-gray-800 transition-colors">
          <div className = "rounded-lg max-w-lg">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">{title}</h1>
              <h1 className=" pt-1 items-center text-xl font-light">{date}</h1>
            </div>

            <h1 className = "text-xl font-medium mt-1">{organization}</h1>
            <p className = "text-gray-300 mt-5 text-base sm:text-lg leading-relaxed">
                {description}
            </p>

            </div>

            <div className = "flex flex-wrap gap-3 mt-5 max-w-lg">
              {tags.map((item, idx) => (
                <TechBox key={idx} label={item} />
              ))}

            </div>
          </div>

          
            <img 
              src = {media}
              alt = ""
              className = " max-w-[400px] max-h-[400px] rounded-xl border-4 border-gray-700 shadow-lg"
              />
        </div>
    )

  }