import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../../components/shared/Logo";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  function scrollIntoView(elementId: string) {
    const element = document.getElementById(elementId);
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

      <ul className="hidden lg:flex lg:items-center lg:gap-6 ">
        <li
          className="font-semibold hover:text-muted-foreground cursor-pointer transition-all duration-300"
          onClick={() => scrollIntoView("features")}
        >
          Features
        </li>

        <li
          className="font-semibold hover:text-muted-foreground cursor-pointer transition-all duration-300"
          onClick={() => scrollIntoView("how-it-works")}
        >
          How it works
        </li>

        <li
          className="font-semibold hover:text-muted-foreground cursor-pointer transition-all duration-300"
          onClick={() => scrollIntoView("templates")}
        >
          Templates
        </li>

        <li
          className="font-semibold hover:text-muted-foreground cursor-pointer transition-all duration-300"
          onClick={() => scrollIntoView("testimonials")}
        >
          Testimonials
        </li>

        <li
          className="font-semibold hover:text-muted-foreground cursor-pointer transition-all duration-300"
          onClick={() => scrollIntoView("cta")}
        >
          Cta
        </li>

        <li className="font-semibold hover:text-muted-foreground cursor-pointer transition-all duration-300">
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Button className=" lg:hidden" size={"icon"} variant={"ghost"}>
        <MenuIcon className="size-7" />
      </Button>
    </motion.nav>
  );
}
