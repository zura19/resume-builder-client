import AnimatedText from "@/components/shared/AnimatedText";
const text = "Log in to your account";

export default function Login() {
  return (
    <div className="py-6 ">
      <AnimatedText
        text={text}
        textClassName="py-1.5 bg-gradient-to-t  from-slate-100 to-slate-400 bg-clip-text text-transparent"
        className="text-6xl font-bold capitalize text-center"
      />
    </div>
  );
}
