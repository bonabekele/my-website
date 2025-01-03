import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const experience = {
    title: "Graphics Designer and BME",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: `I’m currently completing my final year at Addis Ababa University, where I’ve had the opportunity to work on a variety of projects, 
    with a particular focus on graphic design. Over the years, I’ve honed my skills with design tools such as Photoshop, Adobe Illustrator, inDesign,After Effects, 
    and Canva, among other industry-standard software and design platforms. My recent projects have allowed me to explore various design aspects, 
    from creating compelling visual identities to developing engaging marketing materials and multimedia content. I take pride in my ability to blend
    creativity with functionality, ensuring each design not only looks appealing but also serves its intended purpose effectively. I am deeply passionate 
    about visual storytelling and constantly seek to refine my skills to create designs that resonate with audiences. As a problem solver, 
    I thrive on challenges and approach each project with a dedication to innovation and continuous learning. Looking ahead, I aim to expand my expertise further, particularly in UX/UI design, branding, and addressing real-world challenges through design. When I'm not working on design projects, I enjoy exploring the latest trends in technology and solving complex coding problems.`,
  };

  return (
    <div className="container py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-40">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4 flex-wrap sm:flex-nowrap">
            {/* <Avatar className="h-20 w-20 rounded-full bg-gray-200 ml-40 overflow-hidden"></Avatar> */}
            <img className="h-20 w-20 rounded-full bg-gray-200 ml-40 overflow-hidden" src="/boni.png" alt="bona bekele's image" />
            <CardTitle className="text-3xl sm:text-4xl mt-4 sm:mt-0">
              About Me
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-lg max-w-5xl mx-auto">
            Hello! I’m Bona Bekele Fayera, a Biomedical Engineer with a focus on
            AI applications and medical device innovation. I’m passionate about
            using technology to bridge gaps in healthcare and improve patient
            outcomes.
          </p>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold ml-40">Experience</h3>
            <div className="border p-4 rounded-lg max-w-5xl mx-auto">
              <p className="font-medium text-lg">{experience.title}</p>
              <p className="text-sm text-gray-500">
                {experience.company} | {experience.period}
              </p>
              <p className="text-base">{experience.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CV Download Section */}
      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-2xl">Download My CV</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            You can download my CV by clicking the button below.
          </p>
          <a
            href="/cv/boni-bekele-cv.pdf" // Ensure this file exists in public/cv
            download="Bona_Bekele_CV" // Filename when downloading
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Download CV
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
