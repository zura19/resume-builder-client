import Silk from "@/components/Silk";
import Wrapper from "./components/shared/Wrapper";
import Navbar from "./components/shared/Navbar";
import GetStarted from "./pages/home/modules/GetStarted";

function App() {
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
          <GetStarted />
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
