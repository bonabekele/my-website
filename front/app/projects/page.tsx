"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing GitHub and external link icons

const projects = [
  {
    title: "AI Image Recognition",
    description: "Deep learning model for medical image analysis",
    category: "AI",
    tags: ["Python", "TensorFlow", "Medical Imaging"],
    github: "https://github.com/your-username/ai-image-recognition",
    demo: "https://yourdemo.com/ai-image-recognition",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack medical equipment store",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Stripe"],
    github: "https://github.com/your-username/e-commerce-platform",
    demo: "https://yourdemo.com/e-commerce-platform",
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand package for healthcare startup",
    category: "Graphics Design",
    tags: ["Branding", "Logo Design", "Marketing"],
    github: "https://github.com/your-username/brand-identity-design",
    demo: "https://yourdemo.com/brand-identity-design",
  },
  {
    title: "Patient Monitoring System",
    description: "ML-based vital signs monitoring",
    category: "Machine Learning",
    tags: ["Python", "scikit-learn", "IoT"],
    github: "https://github.com/your-username/patient-monitoring-system",
    demo: "https://yourdemo.com/patient-monitoring-system",
  },
];

const categories = [
  "All",
  "AI",
  "Web Development",
  "Graphics Design",
  "Machine Learning",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen p-8 lg:p-12 ml-40 mr-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        as="a"
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2" // Aligning icon with text
                      >
                        <FaGithub /> GitHub
                      </Button>
                      <Button
                        variant="outline"
                        as="a"
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-2" // Aligning icon with text
                      >
                        <FaExternalLinkAlt /> Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
