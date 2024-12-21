"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageData {
  src: string;
  subtitle: string;
  explanation: string;
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>(() => {
    // Load images from localStorage if available
    const savedImages = localStorage.getItem("galleryImages");
    return savedImages ? JSON.parse(savedImages) : [];
  });

  const [newImage, setNewImage] = useState<ImageData>({
    src: "",
    subtitle: "",
    explanation: "",
  });

  useEffect(() => {
    // Save images to localStorage whenever they change
    localStorage.setItem("galleryImages", JSON.stringify(images));
  }, [images]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewImage((prev) => ({ ...prev, src: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addImage = () => {
    if (newImage.src && newImage.subtitle && newImage.explanation) {
      setImages([...images, newImage]);
      setNewImage({
        src: "",
        subtitle: "",
        explanation: "",
      });
    } else {
      alert(
        "Please upload an image and fill out both fields (Subtitle and Explanation)."
      );
    }
  };

  const deleteImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="min-h-screen p-8 lg:p-12 ml-40 mr-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Form to add a new image */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Add a New Image</h2>
          <div className="flex flex-col gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Subtitle"
              value={newImage.subtitle}
              onChange={(e) =>
                setNewImage({ ...newImage, subtitle: e.target.value })
              }
              className="border p-2 rounded"
            />
            <textarea
              placeholder="Explanation"
              value={newImage.explanation}
              onChange={(e) =>
                setNewImage({ ...newImage, explanation: e.target.value })
              }
              className="border p-2 rounded"
            />
            <button
              onClick={addImage}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add Image
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative w-full" style={{ height: "200px" }}>
                <img
                  src={image.src}
                  alt={image.subtitle}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-center">
                  {image.subtitle}
                </h3>
                <p className="text-sm mt-2 text-gray-700">
                  {image.explanation}
                </p>
                <button
                  onClick={() => deleteImage(index)}
                  className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  Delete Image
                </button>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
