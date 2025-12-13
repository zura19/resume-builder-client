import DarkVeil from "@/components/DarkVeil";
// import Navbar from "@/components/shared/Navbar";
import Wrapper from "@/components/shared/Wrapper";
// import Silk from "@/components/Silk";
import { Outlet } from "react-router-dom";

export default function SecondaryLayout() {
  return (
    <div className=" h-dvh  relative">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <DarkVeil />
      </div>
      <div className="bg-black/20 absolute inset-0">
        <Wrapper className="flex flex-col justify-between h-full">
          <main className="h-full">
            <Outlet />
          </main>
        </Wrapper>
      </div>
    </div>
  );
}
