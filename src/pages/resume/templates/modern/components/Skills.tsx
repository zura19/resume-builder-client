import type { Skills } from "@/lib/types/buildResumeTypes";

interface props {
  data: Skills;
}

export default function Skills({ data }: props) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">
        Skills
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.technical.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#f9fafb] text-sm rounded border border-[#e5e7eb]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.soft.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#f9fafb] text-sm rounded border border-[#e5e7eb]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {data.languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#f9fafb] text-sm rounded border border-[#e5e7eb]"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
