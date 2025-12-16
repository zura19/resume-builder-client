import { Circle } from "lucide-react";

interface props {
  projects: {
    title: string;
    technologies: string[];
    features: string[];
  }[];
}

export default function ProjectsSection({ projects }: props) {
  return (
    <div>
      <h3
        style={{ borderBottom: "2px solid black" }}
        className="text-xl font-bold pb-2  mb-2"
      >
        Projects
      </h3>
      <ul className="space-y-4">
        {projects.map((item, i) => (
          <div key={i} className="space-y-3">
            <div>
              <p className="text-lg font-medium">{item.title}</p>
              <p className="">
                {item.technologies.map((tech, i) => (
                  <span
                    key={tech}
                    style={{ color: "#6b6b6b" }}
                    className="italic"
                  >
                    {i !== 0 && ", "}
                    {tech}
                  </span>
                ))}
              </p>
            </div>

            <ul className="space-y-1">
              {item.features.map((item, i) => (
                <li key={i} className="flex  gap-2 items-center">
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
