import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../components/shared/Logo";
// import { MenuIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { navbarData } from "@/constants/navbar/navbar";
import ResponsiveNav from "./ResponsiveNav";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function scrollIntoView(elementId: string) {
    const element = document.getElementById(elementId);
    const currentPath = location.pathname;
    if (currentPath !== "/") {
      navigate("/");
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: [-50, 5, 0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="sticky flex items-center justify-between backdrop-blur-sm bg-background/20 sm:bg-muted/10  border-border py-6 px-6 border-b sm:border  md:px-12 top-0 sm:top-4  sm:rounded-full"
    >
      <Logo />

      <ul className="hidden lg:flex lg:items-center lg:gap-6">
        {navbarData.map((item) =>
          item.type === "link" ? (
            <li
              key={item.label}
              className="font-semibold hover:text-muted-foreground cursor-pointer transition-all duration-300"
            >
              <Link to={item.to}>{item.label}</Link>
            </li>
          ) : (
            <li
              key={item.label}
              className="font-semibold hover:text-muted-foreground cursor-pointer transition-all duration-300"
              onClick={() => scrollIntoView(item.to)}
            >
              {item.label}
            </li>
          )
        )}
      </ul>

      <ResponsiveNav scrollIntoView={scrollIntoView} />
    </motion.nav>
  );
}
