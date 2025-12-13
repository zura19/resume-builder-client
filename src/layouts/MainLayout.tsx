import Navbar from "@/components/shared/Navbar";
import Wrapper from "@/components/shared/Wrapper";
import Silk from "@/components/Silk";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className=" h-screen  relative">
      <Silk
        speed={5}
        scale={1}
        color="#5227ff"
        noiseIntensity={1.5}
        rotation={0}
      />
      <div className="bg-black/10 absolute inset-0">
        <Wrapper className="flex flex-col justify-between h-full">
          <Navbar />
          <main className="h-full">
            <Outlet />
          </main>
          {/* <GetStarted /> */}
        </Wrapper>
      </div>
    </div>
  );
}
