import type { PersonalInfo } from "@/lib/types/buildResumeTypes";
import { Mail, Phone, MapPin } from "lucide-react";

interface props {
  data: PersonalInfo;
}

export default function PersonalInfoSection({ data }: props) {
  return (
    <div className="bg-[#0d9488] p-10 text-[#ffffff] border-b-4 border-[#10b981]">
      <h1 className="text-5xl font-bold mb-8">{data.fullName}</h1>

      <div className="flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#6ee7b7]" />
          <span>{data.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#6ee7b7]" />
          <span>{data.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#6ee7b7]" />
          <span>{data.address}</span>
        </div>
      </div>
    </div>
  );
}
