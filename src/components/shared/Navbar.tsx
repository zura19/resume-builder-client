import { motion } from "framer-motion";
import { BrainIcon } from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: [-50, 5, 0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex items-center justify-between bg-muted/10 backdrop-blur-sm border border-border px-12  py-6 rounded-full"
    >
      {/* <div className="relative flex"> */}
      {/* <FileUser
          className="size-6 text-primary absolute translate-x-2 translate-y-1 z-[-10]"
          strokeWidth={1}
        /> */}
      <BrainIcon className="size-6 text-primary" strokeWidth={2} />

      {/* <img
          src="/logo.png"
          alt="logo"
          className="size-10 text-muted object-cover rounded-full"
        /> */}
      {/* </div> */}
      <ul className="flex items-center gap-6">
        <li className="font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </motion.nav>
  );
}
