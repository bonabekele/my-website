"use client";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Brain,
  Briefcase,
  CircleUser,
  Home,
  Image,
  ShoppingCart,
  Video,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { icon: Home, label: "Home", href: "/" },
  { icon: CircleUser, label: "About", href: "/about" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: Image, label: "Gallery", href: "/gallery" },
  { icon: Brain, label: "Skills", href: "/skills" },
  { icon: Video, label: "Vlogs", href: "/vlogs" },
  { icon: ShoppingCart, label: "Services", href: "/services" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-40 space-y-4 py-4 flex flex-col h-screen bg-muted/50 border-r fixed top-0 left-0 z-10"
    >
      <div className="flex items-center justify-between mb-4 ">
        <Logo />
        <div className="pr-4">
          <ThemeToggle />
        </div>
      </div>
      <div className="px-3 py-2 flex-1">
        <nav className="space-y-1">
          {routes.map((route, index) => (
            <motion.div
              key={route.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <Link href={route.href}>
                <Button
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className="w-full justify-start transition-all duration-300 hover:translate-x-1"
                >
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
