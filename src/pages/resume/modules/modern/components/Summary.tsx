interface SummaryProps {
  text: string;
}

export default function Summary({ text }: SummaryProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold  mb-4 uppercase tracking-wide">
        Professional Summary
      </h2>
      <p className=" leading-relaxed text-pretty">{text}</p>
    </section>
  );
}
