import type { Education } from "@/lib/types/buildResumeTypes";

interface props {
  education: Education[];
}

export default function EducationSection({ education }: props) {
  return (
    <div>
      <h3
        style={{ borderBottom: "2px solid black" }}
        // style={{ color: "black" }}
        className="text-xl font-bold pb-2 border-b-2 mb-2"
      >
        Education
      </h3>
      <ul className="space-y-4">
        {education.map((item, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">{item.university}</p>
              <p>
                <span>{item.startDate}</span>
                <span> - </span>
                <span>{item.endDate || "Present"}</span>
              </p>
            </div>
            <p>Degree: {item.degree}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
