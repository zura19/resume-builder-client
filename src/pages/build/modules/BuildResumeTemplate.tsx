import Steps from "../components/Steps";

interface props {
  children: React.ReactNode;
}

export default function BuildResumeTemplate({ children }: props) {
  return (
    <div className="grid grid-cols-[6fr_10fr] h-full w-full bg-muted/40 border backdrop:backdrop-blur-2xl rounded-lg ">
      <div className="relative overflow-hidden  h-full">
        <div className="absolute  rounded-lg rounded-r-none bg-gradient-to-b    from-slate-950/40 to-slate-950/90   inset-0" />
        <img
          className="h-full w-full object-cover rounded-lg rounded-r-none "
          alt="resume template image"
          src="/build-resume-bg.svg"
        />
        <Steps />
      </div>
      {children}
    </div>
  );
}
