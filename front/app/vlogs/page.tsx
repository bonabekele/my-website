"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Vlogs() {
  const [vlogs, setVlogs] = useState<any[]>([]);

  const googleDriveLink =
    "https://drive.google.com/drive/folders/your-folder-id"; // Replace with your actual Google Drive folder link

  const vlogPrompts = [
    {
      title: "Vlog Prompt 1",
      subtitle: "A day in the life of a student",
      media: "/path-to-image-or-video1.jpg", // Replace with appropriate media paths
      description: "Showcase your daily routine and how you manage your time.",
    },
    {
      title: "Vlog Prompt 2",
      subtitle: "Exploring nature",
      media: "/path-to-image-or-video2.jpg",
      description:
        "Capture a beautiful walk or hike through a local park or trail.",
    },
    {
      title: "Vlog Prompt 3",
      subtitle: "Cultural experiences",
      media: "/path-to-image-or-video3.jpg",
      description:
        "Share a glimpse of cultural events, traditions, or festivals.",
    },
  ];

  useEffect(() => {
    const storedVlogs = localStorage.getItem("vlogs");
    if (storedVlogs) {
      setVlogs(JSON.parse(storedVlogs));
    } else {
      setVlogs(vlogPrompts);
    }
  }, []);

  useEffect(() => {
    if (vlogs.length > 0) {
      localStorage.setItem("vlogs", JSON.stringify(vlogs));
    }
  }, [vlogs]);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Introduction Section */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Welcome to My Vlogs</h1>
          <p className="mt-4 text-gray-700">
            Vlogs are a great way to share my personal journeys, experiences,
            and adventures with the world. Whether it's a day in the life, a
            scenic hike, or a cultural festival, each video captures a unique
            moment. Join me as we explore exciting trips, document meaningful
            journeys, and uncover stories worth sharing!
          </p>
        </div>

        {/* Vlogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vlogs.map((vlog, index) => (
            <motion.div
              key={vlog.title + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="relative h-48">
                  {vlog.media?.includes("video") ? (
                    <video
                      className="object-cover rounded-t-lg w-full h-full"
                      controls
                      src={vlog.media}
                    />
                  ) : (
                    <Image
                      src={vlog.media}
                      alt={vlog.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{vlog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-700 mb-2">
                    {vlog.subtitle}
                  </p>
                  <p className="text-muted-foreground">{vlog.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Drive Link */}
        <div className="mt-8 text-center">
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 inline-block"
          >
            View More Vlogs on Google Drive
          </a>
        </div>
      </motion.div>
    </div>
  );
}
