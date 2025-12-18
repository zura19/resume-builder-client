import type { Skills } from "@/lib/types/buildResumeTypes";
import { Users, Cpu, TrendingUp } from "lucide-react";

interface props {
  data: Skills;
}

export default function SkillsSection({ data }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0f172a] mb-6 uppercase tracking-wide border-b-2 border-[#d1fae5] pb-2">
        Core Competencies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#10b981]">
            <Users className="w-6 h-6 text-[#10b981]" />
            <h3 className="text-lg font-bold text-[#0f172a]">Soft Skills</h3>
          </div>
          <ul className="space-y-2">
            {data.soft.map((skill, i) => (
              <li key={i} className="flex items-start gap-2 text-[#475569]">
                <span className="text-[#10b981] font-bold mt-1">▪</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#10b981]">
            <Cpu className="w-6 h-6 text-[#10b981]" />
            <h3 className="text-lg font-bold text-[#0f172a]">Technical</h3>
          </div>
          <ul className="space-y-2">
            {data.technical.map((skill, i) => (
              <li key={i} className="flex items-start gap-2 text-[#475569]">
                <span className="text-[#10b981] font-bold mt-1">▪</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#10b981]">
            <TrendingUp className="w-6 h-6 text-[#10b981]" />
            <h3 className="text-lg font-bold text-[#0f172a]">Languages</h3>
          </div>
          <ul className="space-y-2">
            {data.languages.map((skill, i) => (
              <li key={i} className="flex items-start gap-2 text-[#475569]">
                <span className="text-[#10b981] font-bold mt-1">▪</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
