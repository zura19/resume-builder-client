// import Navbar from "@/components/shared/Navbar";
// import Wrapper from "@/components/shared/Wrapper";
// import Silk from "@/components/Silk";
// import GetStarted from "@/pages/home/modules/GetStarted";
import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Wrapper from "@/components/shared/Wrapper";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="">
      <Wrapper className="fixed z-40 left-[13.5%] right-[13.5%]">
        <Navbar />
      </Wrapper>
      <Outlet />
      <Footer />
    </div>
  );
}
