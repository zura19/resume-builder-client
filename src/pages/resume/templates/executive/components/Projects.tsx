import { Trophy } from "lucide-react";

interface props {
  data: {
    title: string;
    technologies: string[];
    features: string[];
  }[];
}

export default function ProjectsSection({ data }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0f172a] mb-6 uppercase tracking-wide border-b-2 border-[#d1fae5] pb-2">
        Key Initiatives & Projects
      </h2>

      <div className="space-y-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="bg-[#ecfdf5] border border-[#d1fae5] p-6 rounded-md"
          >
            <div className="flex items-start gap-3 mb-3">
              <Trophy className="w-6 h-6 text-[#10b981] mt-1 shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#0f172a]">
                  {project.title}
                </h3>
                {/* <p className="text-[#475569] mt-2">{project.description}</p> */}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#a7f3d0]">
              <p className="text-sm font-semibold text-[#334155] mb-2">
                Features:
              </p>
              <ul className="list-disc list-inside text-[#334155]">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              a
              {/* <p className="text-sm font-semibold text-[#059669] mb-2">
                Business Impact:
              </p> */}
              {/* <p className="text-[#334155]">{project.impact}</p> */}
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-[#334155] mb-2">
                Technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#0d9488] text-[#ffffff] text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
