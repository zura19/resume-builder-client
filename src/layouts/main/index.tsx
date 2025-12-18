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
    <div className="relative w-full">
      <Wrapper className="fixed  inset-x-0 z-40 px-0 sm:px-8 py-0 sm:top-4 rounded-full">
        <Navbar />
      </Wrapper>
      <Outlet />
      <Footer />
    </div>
  );
}
