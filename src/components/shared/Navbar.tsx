import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: [-50, 5, 0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex items-center justify-between bg-black/10 backdrop-blur-sm border border-border px-12  py-6 rounded-full"
    >
      <h2 className="text-2xl text-white font-bold">Logo</h2>
      <ul className="flex items-center gap-6">
        <li className="font-semibold">
          <a href="#">Home</a>
        </li>
        <li className="font-semibold">
          <a href="#">About</a>
        </li>
      </ul>
    </motion.nav>
  );
}
