import AnimatedText from "@/components/shared/AnimatedText";

const text =
  "Build Your Resume In Minutes With" + " Our AI Powered Resume Builder";

export default function Heading() {
  return (
    <AnimatedText
      text={text}
      className="text-6xl text-balance tracking-tight font-bold text-center leading-18 max-w-[80%] "
      textClassName={` gradient-silver-to-top`}
      customTextClassName={(word) =>
        word.toLocaleLowerCase() === "ai" ||
        word.toLocaleLowerCase() === "powered"
          ? " gradient-to-b from-cyan-200 via-cyan-400 to-emerald-500 text-transparent bg-clip-text"
          : ""
      }
    />
  );
}
