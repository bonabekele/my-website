"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "TensorFlow", category: "Backend" },
  { name: "PyTorch", category: "Backend" },
  { name: "SQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Adobe illustrator", category: "Tools" },
  { name: "photoshop", category: "Tools" },
  { name: "After effect", category: "Tools" },
  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Design" },
];

export default function Skills() {
  return (
    <div className="min-h-screen p-8 lg:p-12 ml-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>

        {/* Container for categories side by side */}
        <div className="flex justify-between gap-8">
          {["Frontend", "Backend", "Tools", "Design"].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className="mb-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
