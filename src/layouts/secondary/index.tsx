import DarkVeil from "@/components/DarkVeil";
import Wrapper from "@/components/shared/Wrapper";
import { Outlet } from "react-router-dom";

export default function SecondaryLayout() {
  return (
    <div className=" h-dvh  relative">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <DarkVeil />
      </div>
      <div className="bg-black/20 absolute inset-0">
        <Wrapper className=" flex flex-col justify-between h-full py-12">
          <main className="h-full">
            <Outlet />
          </main>
        </Wrapper>
      </div>
    </div>
  );
}
