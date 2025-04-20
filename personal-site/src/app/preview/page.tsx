import ProjectDetails from "@/components/ProjectDetails";

export default function PreviewPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <ProjectDetails
        title="CookEasy"
        description={`Mobile cooking app that suggests meals 
based on your ingredients that you already have at home
The app features personalized profiles, ingredient tracking, and smart recipe suggestions`}
        tech={["React Native", "Expo", "TypeScript", "JavaScript", "Node.js", "Express", "MongoDB", "OpenAI API", "Postman"]}
        codeLink="https://github.com/Ivan-codes99/cookeasy"
      />
    </main>
  );
}