//import ProjectDetails from "@/components/ProjectDetails";
"use client";
import ProjectGallery from "@/components/ProjectGallery";
export default function PreviewPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <ProjectGallery
        media = {["/assets/CookEasy-1.png",
                  "/assets/CookEasy-2.png",
                  "/assets/CookEasy-3.png"
        ]}
      />
    </main>
  );
}