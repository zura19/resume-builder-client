import type { PersonalInfo } from "@/lib/types/buildResumeTypes";
import { Mail, Phone, MapPin } from "lucide-react";

// Primary: cyan-500 (#06b6d4)
// Accent: pink-500 (#ec4899)
// Background: white (#ffffff)
// Text: gray-900 (#111827)
// Secondary Text: gray-600 (#4b5563)

interface props {
  data: PersonalInfo;
}

export default function CreativePersonalInfo({ data }: props) {
  return (
    <div className="bg-linear-to-r from-[#06b6d4] to-[#ec4899] p-8 text-[#ffffff]">
      <h1 className="text-4xl font-bold mb-6">{data.fullName}</h1>
      {/* <p className="text-xl mb-6 text-cyan-50">{data.address}</p> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{data.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{data.phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{data.address}</span>
        </div>
      </div>
    </div>
  );
}
