import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import boniImage from "/boni.JPG";

export default function AboutPage() {
  const experience = {
    title: "Crypto-Trader and Freelancer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: `I’m completing my final year at Addis Ababa University, 
    where I’ve had the opportunity to explore a wide range of projects, 
    from AI diagnostics to telemedicine platforms. My recent work includes Graphics Design with tools like, photoshop, Adobe illustrator and After effects. I’m continuously expanding 
    my expertise in Graphics design. I believe that every challenge is an 
    opportunity to innovate, and I approach my work with a problem-solving mindset 
    and a strong dedication to continuous learning.
    In the future, I’m aiming to deepen my skills in graphics and design, 
    particularly in real world problems. When I’m not working or studying, you’ll 
    likely find me solving complex coding problems or exploring the latest advancements 
    in technology.`,
  };

  return (
    <div className="container py-10 ml-60 max-w-6xl mr-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20 rounded-full">
              {/* Proper usage of the Next.js Image component */}
              <Image
                src={boniImage}
                alt="Bona Bekele"
                width={80}
                height={80}
                className="rounded-full"
              />
              <AvatarFallback>BB</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl">About Me</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-lg max-w-5xl mx-auto ml-10">
            Hello! I’m Bona Bekele Fayera, a Biomedical Engineer with a focus on
            AI applications and medical device innovation. I’m passionate about
            using technology to bridge gaps in healthcare and improve patient
            outcomes.
          </p>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold ml-10">Experience</h3>
            <div className="border p-4 rounded-lg max-w-5xl mx-auto ml-10">
              <p className="font-medium text-lg">{experience.title}</p>
              <p className="text-sm text-gray-500">
                {experience.company} | {experience.period}
              </p>
              <p className="text-16">{experience.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
