import { Circle } from "lucide-react";

interface props {
  experience: {
    company: string;
    position: string;
    responsibilities: string[];
    startDate: string;
    endDate?: string;
  }[];
}

export default function Experience({ experience }: props) {
  return (
    <div>
      <h3
        style={{ borderBottom: "2px solid black" }}
        className="text-xl font-bold pb-2  mb-2"
      >
        Experience
      </h3>
      <ul className="space-y-4">
        {experience.map((item, i) => (
          <div key={i} className="space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium">{item.company}</p>
                <p>
                  <span>{item.startDate}</span>
                  <span> - </span>
                  <span>{item.endDate || "Present"}</span>
                </p>
              </div>
              <p style={{ color: "#6b6b6b" }} className="italic">
                {item.position}
              </p>
            </div>

            <ul className="space-y-6">
              {item.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <Circle fill="black" className="inline-block size-2" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
