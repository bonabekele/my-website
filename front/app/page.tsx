"use client";

import { AnimatedBackground } from "@/components/animated-background";
import { AnimatedCard } from "@/components/animated-card";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <AnimatedBackground />
      <motion.div
        className="container py-10 px-4 w-full h-screen overflow-hidden mx-auto ml-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatedCard className="border-none shadow-none bg-transparent">
          <CardHeader>
            <motion.div variants={itemVariants}>
              <CardTitle className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                ꧁𓊈𒆜 Hi, I'm BONA 𒆜𓊉꧂
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground"
            >
              I am a full-stack developer passionate about creating beautiful
              and functional web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <Button
                asChild
                variant="outline"
                className="group transition-all duration-300 hover:scale-105"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                className="group transition-all duration-300 hover:scale-105"
              >
                <Link href="/services" className="flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
                asChild
              ></Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
                asChild
              ></Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
                asChild
              ></Button>
            </motion.div>
          </CardContent>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ml-0">
          <AnimatedCard delay={0.2}>
            <CardHeader>
              <CardTitle>Front-End Developer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Building scalable web applications with modern technologies.
              </p>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.6}>
            <CardHeader>
              <CardTitle>Graphics Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Attractive artistic designs like logos, UI/UX.</p>
            </CardContent>
          </AnimatedCard>

          {/* New Crypto Trader Card */}
          <AnimatedCard delay={1.0}>
            <CardHeader>
              <CardTitle>Crypto Trader</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Analyzing markets and trading cryptocurrencies for profit.</p>
            </CardContent>
          </AnimatedCard>
        </div>
      </motion.div>
    </>
  );
}
