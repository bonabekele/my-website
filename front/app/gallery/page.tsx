"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageData {
  src: string;
  subtitle: string;
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([{ src: "/bird.png", subtitle: "Initial Image" }, 
    { src: "/boni.png", subtitle: "Bona Bekele" },
    { src: "/file.svg", subtitle: "file" },
    { src: "/globe.svg", subtitle: "globe" },]);

  // Internal Google Drive link for images (example)
  const googleDriveLink =
    "https://drive.google.com/uc?export=view&id=1Hc6D5yUBVhg4__GnUtv8PQkYrtQGdpNJ"; // Example Google Drive image link

  // Load images from localStorage after the component mounts
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const savedImages = localStorage.getItem("galleryImages");
  //     if (savedImages) {
  //       setImages(JSON.parse(savedImages));
  //     } else {
  //       // If no saved images, use the internal Google Drive link
  //       setImages([{ src: googleDriveLink, subtitle: "Example Image" }]);
  //     }
  //   }
  // }, []);

  // Save images to localStorage whenever `images` changes
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("galleryImages", JSON.stringify(images));
  //   }
  // }, [images]);

  return (
    <div className="min-h-screen p-8 lg:p-12 ml-4 sm:ml-10 md:ml-40 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Brief explanation of Graphics Design */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Graphics Design Overview</h2>
          <p className="text-lg text-gray-700">
            Graphics Design involves creating visual content to communicate
            messages, using elements like typography, imagery, and color theory
            to craft engaging and visually appealing designs. It plays a crucial
            role in branding, marketing, and user experience.
          </p>
        </div>

        {/* Google Drive Link for Images */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Explore My Image Gallery</h2>
          <p className="text-lg text-gray-700">
            Click below to view the image gallery stored on Google Drive. Feel
            free to explore my collection!
          </p>
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            View Image Gallery on Google Drive
          </a>
        </div>

        {/* Gallery List */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            // <Card
            //   key={index}
            //   className="overflow-hidden bg-white shadow-lg rounded-lg"
            // >
            //   <div className="relative">
                <img
                  src={image.src}
                  alt={image.subtitle}
                  className=" rounded-md" 
                  key={index}
                />
              /* </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-center">
                  {image.subtitle}
                </h3>
              </div>
            </Card> */
          ))}
        </div>
      </motion.div>
    </div>
  );
}
