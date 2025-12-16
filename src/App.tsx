import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import SecondaryLayout from "./layouts/SecondaryLayout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import BuildResume from "./pages/build";
import Resume from "./pages/resume";

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
          <Route path="/resume/:id" element={<Resume />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
