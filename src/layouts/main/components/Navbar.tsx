import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../../components/shared/Logo";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: [-50, 5, 0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="sticky flex items-center justify-between backdrop-blur-sm bg-background/20 sm:bg-muted/10  border-border py-6 px-6 border-b sm:border  md:px-12 top-0 sm:top-4  sm:rounded-full"
    >
      <Logo />

      <ul className="hidden sm:flex sm:items-center sm:gap-6">
        <li className="font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Button className="" size={"icon"} variant={"ghost"}>
        <MenuIcon className="size-7 sm:hidden" />
      </Button>
    </motion.nav>
  );
}
