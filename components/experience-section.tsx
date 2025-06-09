"use client";

import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  color?: string;
  delay?: number;
}
const ExperienceItems: ExperienceItemProps[] = [
  {
    title: "Frontend Developer",
    company: "SecLance Pvt. Ltd.",
    period: "Jan 2025 - Present",
    description: [
      "Led the development of an AI-powered dashboard using Next.js, Tailwind CSS, and shadcn/ui, improving user engagement by 40%",
      "Implemented responsive and accessible UI designs with Tailwind CSS, ensuring seamless experiences across all devices",
      "Collaborated with UX/UI designers to deliver pixel-perfect and modern interfaces aligned with design specifications",
      "Integrated AI chatbot automations into the dashboard to enhance customer support and streamline user interactions",
    ],
    color: "#4d7eff",
    delay: 100,
  },
  {
    title: "Web Developer",
    company: "Synvide Business Solutions Pvt Ltd",
    period: "June 2024 - Dec 2024",
    description: [
      "Developed and maintained client websites using React, Next.js, and Tailwind CSS",
      "Optimized website performance, achieving a 30% improvement in load times",
      "Integrated third-party APIs and services to enhance website functionality",
      "Participated in agile development processes, including daily stand-ups and sprint planning",
    ],
    color: "#ff5757",
    delay: 300,
  },
  {
    title: "Web Developer Intern",
    company: "INFOWIZ",
    period: "Jan 2024 - May 2024",
    description: [
      "Assisted in the development of web applications using JavaScript and CSS",
      "Collaborated with the design team to implement UI components",
      "Participated in bug fixing and feature implementation",
      "Gained experience with version control systems and deployment workflows",
    ],
    color: "#ffde59",
    delay: 500,
  },
];

export function ExperienceSection() {
  return (
    <AnimatedSection
      id="experience"
      className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 inline-block bg-[#4d7eff] text-white py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        Work Experience
      </h2>

      <div className="space-y-8">
        {ExperienceItems.map((experience, index) => (
          <AnimatedSection
            key={index}
            animation="slide-in"
            delay={experience.delay}
          >
            <ExperienceItem
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              color={experience.color}
            />
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  description,
  color = "#4d7eff",
}: ExperienceItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white border-[3px] border-black transition-all duration-300 p-6 md:p-8 ${
        isHovered
          ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[4px] translate-y-[4px]"
          : "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center mt-1">
            <Briefcase
              className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                isHovered ? "rotate-12" : ""
              }`}
            />
            <span className="font-medium">{company}</span>
          </div>
        </div>
        <div
          className={`inline-flex items-center mt-2 md:mt-0 px-3 py-1 border-[2px] border-black transition-transform duration-300 ${
            isHovered ? "scale-105" : ""
          }`}
          style={{ backgroundColor: color, color: "white" }}
        >
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm font-bold">{period}</span>
        </div>
      </div>
      <ul className="space-y-2 mt-4">
        {description.map((item, index) => (
          <li
            key={index}
            className={`flex items-start transition-transform duration-300 ${
              isHovered ? `translate-x-[${index * 2}px]` : ""
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
              transform: isHovered
                ? `translateX(${index * 3}px)`
                : "translateX(0)",
            }}
          >
            <span className="inline-block h-5 w-5 min-w-[1.25rem] mt-0.5 mr-2 bg-black text-white text-center font-bold rounded-full">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
