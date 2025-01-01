"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "Content Creator",
    description: "Custom website development using modern technologies",
  },
  {
    id: "2",
    title: "Graphics Development",
    description: "High-quality graphic design and branding services",
  },
];

export default function ServicesPage() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && comment) {
      const serviceID = "service_bwkp0c3";
      const templateID = "template_oki7tv9";
      const publicKey = "UQ5wVVdqo4fW_h7CI";

      const templateParams = {
        sendername: "Website User",
        replyto: email,
        to: "bekelebona058@gmail.com",
        Subject: "New Inquiry",
        message: comment,
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey).then(
        (response) => {
          toast.success("Your message has been sent!");
          setIsSubmitted(true);
          setEmail("");
          setComment("");
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          toast.error("Failed to send your message. Please try again.");
        }
      );
    } else {
      toast.error("Please fill out all fields before submitting.");
    }
  };

  return (
    <div className="container py-10 mx-auto max-w-7xl ml-40">
      <div className="grid gap-6">
        {/* Services Section */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-40">
          {services.map((service) => (
            <Card key={service.id} className="mx-auto">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="w-full max-w-4xl mx-auto ml-40">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium">Comment</label>
                <textarea
                  placeholder="Any comments or inquiries?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className={`w-full ${
                isSubmitted ? "bg-green-500" : "bg-blue-500"
              } text-white`}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardFooter>
          {isSubmitted && (
            <div className="mt-4 text-green-600 font-semibold text-center w-full">
              Submitted Successfully!
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
