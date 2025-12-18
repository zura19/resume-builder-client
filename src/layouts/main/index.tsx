// import Navbar from "@/components/shared/Navbar";
// import Wrapper from "@/components/shared/Wrapper";
// import Silk from "@/components/Silk";
// import GetStarted from "@/pages/home/modules/GetStarted";
import { Footer } from "@/layouts/main/components/Footer";
import Navbar from "@/layouts/main/components/Navbar";
import Wrapper from "@/components/shared/Wrapper";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="">
      <Wrapper className="fixed z-40 w-full sm:w-auto sm:left-[13.5%] sm:right-[13.5%]">
        <Navbar />
      </Wrapper>
      <Outlet />
      <Footer />
    </div>
  );
}
