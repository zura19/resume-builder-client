import type { Education } from "@/lib/types/buildResumeTypes";

interface props {
  data: Education[];
}

export default function Education({ data }: props) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">
        Education
      </h2>
      <div className="space-y-6">
        {data.map((edu, index) => (
          <div key={index} className="border-l-4 border-[#2c5f8d] pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold ">{edu.degree}</h3>
                <p className="font-medium">{edu.university}</p>
                <p className="text-[#6d6d6d] text-sm">{edu.fieldOfStudy}</p>
              </div>
              <span className="text-sm whitespace-nowrap">
                {edu.startDate} - {edu.stillStudying ? "Present" : edu.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
