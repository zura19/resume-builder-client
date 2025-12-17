import Wrapper from "@/components/shared/Wrapper";
import Silk from "@/components/Silk";
import GetStarted from "./components/GetStarted";

export default function HeroSection() {
  return (
    <div className=" h-screen  relative">
      <Silk
        speed={5}
        scale={1}
        color="#615fff"
        // color="#5227ff"
        noiseIntensity={1.5}
        rotation={0}
      />
      <div className=" absolute bg-background/30 inset-0">
        <Wrapper className="flex flex-col justify-between h-full text-in">
          <main className="h-full">
            <GetStarted />
          </main>
        </Wrapper>
      </div>
    </div>
  );
}
