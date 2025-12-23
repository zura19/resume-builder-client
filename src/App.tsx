import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main";
import Home from "./pages/home";
import SecondaryLayout from "./layouts/secondary";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import BuildResume from "./pages/build";
import Resume from "./pages/resume";
import NotFound from "./pages/notFound";
import LightRaysLayout from "./layouts/lightRays";
import Profile from "./pages/profile";
import { useUser } from "./lib/store/userState";
import type { JSX } from "react";

function App() {
  const { user } = useUser();

  function checkIsAuthenticated(comp: JSX.Element, goto: string = "/login") {
    return user ? comp : <Navigate to={goto} />;
  }

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
          <Route path="/profile" element={checkIsAuthenticated(<Profile />)} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
