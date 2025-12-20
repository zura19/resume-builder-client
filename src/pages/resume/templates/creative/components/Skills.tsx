import type { Skills } from "@/lib/types/buildResumeTypes";
import { Palette, Code, Languages } from "lucide-react";

interface props {
  data: Skills;
}

// Primary: cyan-500 (#06b6d4)
// Accent: pink-500 (#ec4899)
// Background: white (#ffffff)
// Text: gray-900 (#111827)
// Secondary Text: gray-600 (#4b5563)

export default function CreativeSkills({ data }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold  mb-6 border-b-4 border-[#06b6d4] inline-block pb-1">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5 text-[#ec4899]" />
            <h3 className="text-lg font-bold">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.soft.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#ec489a14] text-[#ec4899] rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Languages className="w-5 h-5 text-[#06b6d4]" />
            <h3 className="text-lg font-bold">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.languages.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#06b5d41b] text-[#06b6d4] rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-[#4b5563]" />
            <h3 className="text-lg font-bold">Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.technical.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#4b556318] text-[#4b5563] rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
