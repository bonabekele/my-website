import { motion } from "framer-motion";
import Image from "next/image";
import logoImage from "../components/logo.jpg";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 px-4"
    >
      {}
      <Image
        src={logoImage}
        alt="Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
    </motion.div>
  );
}
