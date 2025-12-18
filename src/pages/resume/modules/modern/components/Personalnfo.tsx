import type { PersonalInfo } from "@/lib/types/buildResumeTypes";

interface props {
  data: PersonalInfo;
}

export default function PersonalInfo({ data }: props) {
  return (
    <div className="mb-8 pb-8 border-b-2 border-[#e5e7eb]">
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">
        {data.fullName}
      </h1>
      <div className="flex flex-wrap gap-4 text-sm text-[#6b7280]">
        <a href={`mailto:${data.email}`} className=" transition-colors">
          {data.email}
        </a>
        <span>•</span>
        <a href={`tel:${data.phone}`} className=" transition-colors">
          {data.phone}
        </a>
        <span>•</span>
        <span>{data.address}</span>
      </div>
    </div>
  );
}
