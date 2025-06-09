import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { ExperienceSection } from "@/components/experience-section";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] bg-[linear-gradient(rgba(200,200,200,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(200,200,200,0.4)_1px,transparent_1px)] bg-[size:30px_30px]">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection
        id="hero"
        className="relative py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <AnimatedSection animation="slide-in" delay={200}>
              <div className="inline-block bg-[#4d7eff] text-white font-bold py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform duration-200 hover-shake">
                Hello, I'm RAHUL , a Creative Developer
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Crafting Digital{" "}
                <span className="text-[#4d7eff]">Experiences</span> with Code
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <p className="text-xl">
                I build engaging websites and applications that combine bold
                aesthetics with seamless functionality.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={800}>
              <div className="flex flex-wrap gap-4">
                <Link href="/#projects">
                  <Button className="bg-[#4d7eff] font-bold py-3 px-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="bg-white font-bold py-3 px-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  Contact Me
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale-up" delay={300}>
            <div className="relative">
              <div className="w-full h-[500px] bg-[#ffde59] border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden animate-float">
                <Image
                  src="https://res.cloudinary.com/dxeycobng/image/upload/v1744449884/ChatGPT_Image_Apr_12_2025_02_52_42_PM_vjwznf.png"
                  alt="Developer Portrait"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#ff5757] text-white font-bold py-3 px-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-shake">
                Full-Stack Developer
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        id="about"
        className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
          <AnimatedSection animation="slide-in">
            <h2 className="text-4xl font-bold mb-8 inline-block bg-[#4d7eff] text-white py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              About Me
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-4">
                <p className="text-lg">
                  I'm a passionate developer with a keen eye for design and a
                  love for creating interactive digital experiences. With
                  expertise in both front-end and back-end technologies, I bring
                  ideas to life through clean code and intuitive interfaces.
                </p>
                <p className="text-lg">
                  My approach combines technical precision with creative
                  problem-solving, resulting in projects that are not only
                  visually striking but also functionally robust.
                </p>
                <div className="flex gap-4 mt-6">
                  <Link
                    href="https://github.com/Rahulk850"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-none border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/rahul-kumar-3774131ba"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-none border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  {/* <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-none border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </Link> */}
                  <Link href="mailto:kumarrahuljeet7715@gmail.com">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-none border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="React" color="#61DAFB" />
                  <SkillBadge name="Next.js" color="#000000" />
                  <SkillBadge name="TypeScript" color="#3178C6" />
                  <SkillBadge name="Node.js" color="#339933" />
                  <SkillBadge name="Tailwind CSS" color="#06B6D4" />
                  <SkillBadge name="JavaScript" color="#F7DF1E" />
                  <SkillBadge name="HTML5" color="#E34F26" />
                  <SkillBadge name="CSS3" color="#1572B6" />
                  <SkillBadge name="Git" color="#F05032" />
                  <SkillBadge name="Figma" color="#F24E1E" />
                  <SkillBadge name="MongoDB" color="#47A248" />
                  {/* <SkillBadge name="PostgreSQL" color="#4169E1" /> */}
                  <SkillBadge name="C++" color="#F24E1E" />
                  <SkillBadge name="DSA" color="#F05032" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <AnimatedSection
        id="projects"
        className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
      >
        <AnimatedSection animation="slide-in">
          <h2 className="text-4xl font-bold mb-12 inline-block bg-[#4d7eff] text-white py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
           Recent Projects
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
          [
            {
              title: "Hotel Booking App",
              description: "A smart hotel booking web app that helps users find, compare, and reserve rooms with ease-designed for a smooth and reliable travel experience.",
              tags: ["Next.js", "Stripe", "Tailwind CSS","ShadCn","OpenAi",],
              imageUrl: "https://res.cloudinary.com/dxeycobng/image/upload/v1744876156/Screenshot_2025-04-17_131802_rirhxg.png",
              color: "#4d7eff",
              delay: 200,
              projectLink:"https://hotel-booking-app-frontend-sigma.vercel.app/"
            },
            {
              title: "Paint Plus",
              description: "Paint Plus connects paint dealers with customers, making it easy to buy and sell premium paints and tools in one place.",
              tags: ["React.js", "Tailwind Css", "Redux" , "JavaScript"],
              imageUrl:"https://res.cloudinary.com/dxeycobng/image/upload/v1744876348/Screenshot_2025-04-17_131632_ysed4y.png",
              color: "#ff5757",
              delay: 400,
              projectLink:"https://paint-plus.onrender.com/"
            },
            {
              title: "Shadow Chat",
              description: "Shadow Chat is a web app that lets users send and receive anonymous messages, enabling private and unfiltered conversations.",
              tags: ["Next.js","Tailwind CSS","ShadCn", "Node.js","MongoDB", ],
              imageUrl: "https://res.cloudinary.com/dxeycobng/image/upload/v1744876155/Screenshot_2025-04-17_131701_qniqel.png",
              color: "#ffde59",
              delay: 600,
              projectLink:"https://shdow-chat-box.vercel.app/"
            }
          ].map((project, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={project.delay}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                color={project.color}
                projectLink={project.projectLink}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          animation="fade-up"
          delay={800}
          className="mt-12 text-center"
        >
          <Link href='/projects'>
          <Button className="bg-[#4d7eff] font-bold py-3 px-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </AnimatedSection>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="bg-[#4d7eff] border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
          <AnimatedSection animation="slide-in">
            <h2 className="text-4xl font-bold mb-8 inline-block bg-white text-black py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Get In Touch
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection
              animation="fade-up"
              delay={200}
              className="space-y-4 text-white"
            >
              <p className="text-xl font-bold">Let's work together!</p>
              <p className="text-lg">
                Have a project in mind or just want to say hello? Feel free to
                reach out. I'm always open to discussing new projects, creative
                ideas, or opportunities to be part of your vision.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 animate-float" />
                  <span>kumarrahuljeet7715@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 flex items-center justify-center animate-float">
                    📍
                  </div>
                  <span>Alwar , Rajasthan , India</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto border-t-[3px] border-black">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Portfolio</h3>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Rahulk850"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-none border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rahul-kumar-3774131ba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-none border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            {/* <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-none border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </Link> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
