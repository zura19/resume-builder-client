interface SummaryProps {
  text: string;
}

// Primary: cyan-500 (#06b6d4)
// Accent: pink-500 (#ec4899)
// Background: white (#ffffff)
// Text: gray-900 (#111827)
// Secondary Text: gray-600 (#4b5563)

export default function CreativeSummary({ text }: SummaryProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#111827] mb-4 border-b-4 border-[#06b6d4] inline-block pb-1">
        About Me
      </h2>
      <p className="text-[#4b5563] leading-relaxed">{text}</p>
    </div>
  );
}
