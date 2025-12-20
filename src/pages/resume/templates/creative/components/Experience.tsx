interface props {
  data: {
    company: string;
    position: string;
    responsibilities: string[];
    startDate: string;
    endDate?: string;
  }[];
}

// Primary: cyan-500 (#06b6d4)
// Accent: pink-500 (#ec4899)
// Background: white (#ffffff)
// Text: gray-900 (#111827)
// Secondary Text: gray-600 (#4b5563)

export default function ExperienceSection({ data }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#111827] mb-6 border-b-4 border-[#ec4899] inline-block pb-1">
        Experience
      </h2>

      <div className="space-y-6">
        {data.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-[#06b6d4]"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-[#ec4899] rounded-full"></div>

            <div className="mb-2">
              <h3 className="text-xl font-bold text-[#111827]">
                {exp.position}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-[#4b5563]">
                <span className="font-semibold text-[#06b6d4]">
                  {exp.company}
                </span>
                <span className="text-[#4b5563]">
                  {exp.startDate} - {exp.endDate ? exp.endDate : "Present"}
                </span>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-1 text-[#4b5563]">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
