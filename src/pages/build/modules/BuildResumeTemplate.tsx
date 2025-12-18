import Steps from "../components/Steps";

interface props {
  children: React.ReactNode;
}

export default function BuildResumeTemplate({ children }: props) {
  return (
    <div className="grid md:grid-cols-[6fr_10fr] h-full w-full bg-muted/40 border backdrop:backdrop-blur-2xl rounded-lg ">
      <div className="relative overflow-hidden  h-full hidden md:block">
        <div className="absolute  rounded-lg rounded-r-none bg-linear-to-b    from-slate-950/20 to-slate-950/70   inset-0" />
        <img
          className="h-full w-full object-cover rounded-lg rounded-r-none "
          alt="resume template image"
          src="/bgb.jpg"
          // src="/build-resume-bg.svg"
        />
        <Steps />
      </div>
      {children}
    </div>
  );
}
