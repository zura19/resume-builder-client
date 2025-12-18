interface props {
  data: {
    company: string;
    position: string;
    responsibilities: string[];
    startDate: string;
    endDate?: string;
  }[];
}

export default function Experience({ data }: props) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">
        Work Experience
      </h2>
      <div className="space-y-6">
        {data.map((exp, index) => (
          <div key={index} className="border-l-4 border-[#2c5f8d] pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-bold">{exp.position}</h3>
                <p className=" font-medium">{exp.company}</p>
              </div>
              <span className="text-sm text-[#6d6d6d] whitespace-nowrap">
                {exp.startDate} - {exp.endDate || "Present"}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className=" leading-relaxed flex gap-2 text-pretty"
                >
                  <span className="text-[#2c5f8d] mt-1.5 shrink-0">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
