import LightRays from "@/components/LightRays";
import { Outlet } from "react-router-dom";

// interface props {
// //   children: React.ReactNode;
// }

export default function LightRaysLayout() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background rays */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          //   raysColor="#4a90e2"
          raysColor="#615fff"
          raysSpeed={0.5}
          lightSpread={1.2}
          rayLength={2.5}
          followMouse={true}
          mouseInfluence={0.15}
          saturation={0.8}
        />
      </div>

      {/* Content */}
      <main className="relative z-10 h-full bg-indigo-">
        <Outlet />
      </main>
    </div>
  );
}
