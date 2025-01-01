"use client"; // Add this line at the top of the file

import { Badge } from "@/components/ui/badge";
import { Button as OriginalButton } from "@/components/ui/button"; // Assuming Button component is from your UI library
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"; // This now works because of the 'use client' directive
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Import icons

// Define the Project type
interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
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

// Custom Button component to handle rendering as <a> or <button>
interface CustomButtonProps {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  target,
  children,
  className,
  onClick,
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={className}>
        {children}
      </a>
    );
  }

  return (
    <OriginalButton onClick={onClick} className={className}>
      {children}
    </OriginalButton>
  );
};

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
            <OriginalButton
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </OriginalButton>
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
                      <CustomButton
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FaGithub /> GitHub
                      </CustomButton>
                      <CustomButton
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FaExternalLinkAlt /> Demo
                      </CustomButton>
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
