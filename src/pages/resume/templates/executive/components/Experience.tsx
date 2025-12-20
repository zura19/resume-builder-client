import { Building2 } from "lucide-react";

interface props {
  data: {
    company: string;
    position: string;
    responsibilities: string[];
    startDate: string;
    endDate?: string;
  }[];
}

export default function ExperienceSection({ data }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0f172a] mb-6 uppercase tracking-wide border-b-2 border-[#d1fae5] pb-2">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {data.map((exp, index) => (
          <div key={index} className="border-l-2 border-[#d1fae5] pl-6">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-[#0f172a]">
                {exp.position}
              </h3>
              <div className="flex items-center gap-2 text-[#334155] mt-1">
                <Building2 className="w-4 h-4 text-[#10b981]" />
                <span className="font-semibold">{exp.company}</span>
                <span className="text-[#cbd5e1]">|</span>
                <span>{exp.position}</span>
              </div>
              <p className="text-sm text-[#64748b] mt-1">
                {exp.startDate} - {exp.endDate || "Present"}
              </p>
            </div>

            <ul className="space-y-2 text-[#475569]">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#10b981] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
