import { GraduationCap } from "lucide-react";
import type { Education } from "@/lib/types/buildResumeTypes";

// Primary: cyan-500 (#06b6d4)
// Accent: pink-500 (#ec4899)
// Background: white (#ffffff)
// Text: gray-900 (#111827)
// Secondary Text: gray-600 (#4b5563)

interface props {
  data: Education[];
}

export default function EducationSection({ data }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold  mb-6 border-b-4 border-[#06b6d4] inline-block pb-1">
        Education
      </h2>

      <div className="space-y-4">
        {data.map((edu, index) => (
          <div
            key={index}
            className="bg-linear-to-r from-[#06b5d418] to-[#ec489a27] p-6 rounded-lg"
          >
            <div className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-[#06b6d4] mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-bold">
                  {edu.degree} in {edu.fieldOfStudy}
                </h3>
                <p className="font-semibold">{edu.university}</p>
                <div className="flex flex-wrap gap-2 text-sm text-[#4b5563] mt-1">
                  <span>
                    {edu.startDate} - {edu.stillStudying ? "Now" : edu.endDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
