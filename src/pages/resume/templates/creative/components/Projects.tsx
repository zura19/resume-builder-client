import { Rocket } from "lucide-react";

interface props {
  data: {
    title: string;
    technologies: string[];
    features: string[];
  }[];
}

// Primary: cyan-500 (#06b6d4)
// Accent: pink-500 (#ec4899)
// Background: white (#ffffff)
// Text: gray-900 (#111827)
// Secondary Text: gray-600 (#4b5563)

export default function ProjectsSection({ data }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#111827] mb-6 border-b-4 border-[#ec4899] inline-block pb-1">
        Projects
      </h2>

      <div className="space-y-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="border-2 border-[#06b5d47e] rounded-lg p-5 hover:border-[#ec489a82] transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#ec4899]" />
                <h3 className="text-lg font-bold text-[#111827]">
                  {project.title}
                </h3>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-1 text-[#4b5563] mb-3">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-linear-to-r from-[#06b5d44f] to-[#ec489a4e] text-[#4b5563] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
