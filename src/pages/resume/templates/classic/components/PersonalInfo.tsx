import type { PersonalInfo } from "@/lib/types/buildResumeTypes";
import { LocationEdit, Mail, Phone } from "lucide-react";

interface props {
  personalInfo: PersonalInfo;
}

export default function PersonalInfoSection({ personalInfo }: props) {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl text-center tracking-widest">
        {personalInfo.fullName}
      </h1>
      <ul className="flex items-center justify-between max-w-[70%] mx-auto">
        <li className="flex items-center gap-1">
          <LocationEdit size={16} />
          <span>{personalInfo.address}</span>
        </li>
        <li className="flex items-center gap-1">
          <Mail size={16} />
          <span>{personalInfo.email}</span>
        </li>
        <li className="flex items-center gap-1">
          <Phone size={16} />
          <span>{personalInfo.phone}</span>
        </li>
      </ul>
    </div>
  );
}
