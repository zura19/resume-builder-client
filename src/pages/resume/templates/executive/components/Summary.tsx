interface SummaryProps {
  text: string;
}

export default function SummarySection({ text }: SummaryProps) {
  return (
    <div className="border-l-4 border-[#10b981] pl-6">
      <h2 className="text-2xl font-bold text-[#0f172a] mb-4 uppercase tracking-wide">
        Executive Summary
      </h2>
      <p className="text-[#475569] leading-relaxed text-lg">{text}</p>
    </div>
  );
}
