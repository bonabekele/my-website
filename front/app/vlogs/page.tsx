"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Vlogs() {
  const [vlogs, setVlogs] = useState<any[]>([]);

  const [newVlog, setNewVlog] = useState({
    title: "",
    media: "",
    description: "",
  });

  // Retrieve vlogs from localStorage on component mount
  useEffect(() => {
    const storedVlogs = localStorage.getItem("vlogs");
    if (storedVlogs) {
      setVlogs(JSON.parse(storedVlogs));
    }
  }, []);

  // Save vlogs to localStorage whenever they change
  useEffect(() => {
    if (vlogs.length > 0) {
      localStorage.setItem("vlogs", JSON.stringify(vlogs));
    }
  }, [vlogs]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (file.type.includes("video")) {
          setNewVlog({
            ...newVlog,
            media: reader.result as string,
          });
        } else {
          setNewVlog({
            ...newVlog,
            media: reader.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddVlog = () => {
    if (newVlog.title && newVlog.media && newVlog.description) {
      const updatedVlogs = [...vlogs, newVlog];
      setVlogs(updatedVlogs);
      setNewVlog({
        title: "",
        media: "",
        description: "",
      });
    } else {
      alert("Please fill all fields and upload a media.");
    }
  };

  const handleDeleteVlog = (index: number) => {
    const updatedVlogs = vlogs.filter((_, i) => i !== index);
    setVlogs(updatedVlogs);
    
    // Also update localStorage to remove the deleted vlog
    localStorage.setItem("vlogs", JSON.stringify(updatedVlogs));
  };

  return (
    <div className="min-h-screen p-8 lg:p-12 ml-40 mr-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vlogs.map((vlog, index) => (
            <motion.div
              key={vlog.title + index} // Use a combination of title and index to ensure uniqueness
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
                  <p className="text-muted-foreground">{vlog.description}</p>
                  <button
                    onClick={() => handleDeleteVlog(index)}
                    className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  >
                    Delete Vlog
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Add New Vlog</h2>
          <input
            type="text"
            placeholder="Title"
            value={newVlog.title}
            onChange={(e) => setNewVlog({ ...newVlog, title: e.target.value })}
            className="border p-2 rounded mb-4 w-full"
          />
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileUpload}
            className="border p-2 rounded mb-4 w-full"
          />
          <textarea
            placeholder="Description"
            value={newVlog.description}
            onChange={(e) =>
              setNewVlog({ ...newVlog, description: e.target.value })
            }
            className="border p-2 rounded mb-4 w-full"
          />
          <button
            onClick={handleAddVlog}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
          >
            Add Vlog
          </button>
        </div>
      </motion.div>
    </div>
  );
}
