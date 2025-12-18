interface props {
  data: {
    title: string;
    technologies: string[];
    features: string[];
  }[];
}

export default function Projects({ data }: props) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">
        Projects
      </h2>
      <div className="space-y-6">
        {data.map((project, index) => (
          <div key={index} className="border-l-4 border-[#2c5f8d] pl-4">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <div className="mb-3">
              <p className="text-sm text-[#6d6d6d] mb-1 font-medium">
                Technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-[#2c608d1d] text-[#2c5f8d] text-xs rounded border border-[#2c608d2f]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-1.5">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="leading-relaxed flex gap-2 text-pretty"
                >
                  <span className="text-[#2c5f8d] mt-1.5 shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
