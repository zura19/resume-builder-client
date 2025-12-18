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
      <Wrapper className="fixed inset-0 z-40 px-0 py-0 sm:py-6 sm:px-4">
        <Navbar />
      </Wrapper>
      <Outlet />
      <Footer />
    </div>
  );
}
