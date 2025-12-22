import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main";
import Home from "./pages/home";
import SecondaryLayout from "./layouts/secondary";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import BuildResume from "./pages/build";
import Resume from "./pages/resume";
import NotFound from "./pages/notFound";
import LightRaysLayout from "./layouts/lightRays";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<p>about</p>} />
        </Route>

        <Route element={<SecondaryLayout />}>
          <Route path="/build" element={<BuildResume />} />\
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<LightRaysLayout />}>
          <Route path="/resume/:id" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
