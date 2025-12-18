import type { Education } from "@/lib/types/buildResumeTypes";
import { GraduationCap } from "lucide-react";

interface props {
  data: Education[];
}

export default function EducationSection({ data }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0f172a] mb-6 uppercase tracking-wide border-b-2 border-[#d1fae5] pb-2">
        Education
      </h2>

      <div className="space-y-6">
        {data.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 bg-[#10b981] rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#ffffff]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#0f172a]">{edu.degree}</h3>
              <p className="text-[#334155] font-semibold">{edu.fieldOfStudy}</p>
              <p className="text-[#475569]">{edu.university}</p>
              <div className="flex gap-3 text-sm text-[#64748b] mt-1">
                {/* <span>{edu.}</span> */}
                {/* <span>•</span> */}
                <span>{edu.startDate}</span>
                <span> - </span>
                <span>{edu.stillStudying ? "Present" : edu.endDate}</span>
                {/* <span>•</span> */}
                {/* <span className="text-[#059669] font-semibold">
                  GPA: {edu.gpa}
                </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
