import {
  Cpu,
} from "lucide-react";
import { BsRobot, BsGraphUp, BsFileEarmarkText, BsMotherboard } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import React from "react";

const activities = [
  {
    title: "Education and Knowledge Sharing",
    description:
      "Facilitating AI education programs in Tier 3 cities and villages across Uttar Pradesh, making AI accessible to all.",
    icon: <MdCastForEducation className="h-10 w-10 text-gray-500" />,
  },
  {
    title: "Promoting AI & ML Research",
    description:
      "Pioneering AI research to explore new horizons and push the boundaries of the field in Uttar Pradesh.",
    icon: <BsMotherboard className="h-10 w-10 text-gray-500" />,
  },
  {
    title: "Active Engagement in Open Source",
    description:
      "Actively contributing to the open-source AI community, fostering innovation and accessibility.",
    icon: <LuLayoutGrid className="h-10 w-10 text-gray-500" />,
  },
  {
    title: "Supporting Startup Ventures",
    description:
      "Nurturing AI-driven startups by providing vital support, mentorship, and resources.",
    icon: <BsRobot className="h-10 w-10 text-gray-500" />,
  },
  {
    title: "Solving Local Challenges with AI",
    description:
      "With the power of AI innovation, we strive to make impactful solutions for our local challenges.",
    icon: <BsFileEarmarkText className="h-10 w-10 text-gray-500" />,
  },
  {
    title: "हिंदी NLP and Data Advancement",
    description:
      "Advancing Hindi Natural Language Processing and data-driven initiatives to empower the Hindi language.",
    icon: <BsGraphUp className="h-10 w-10 text-gray-500" />,
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-16 md:py-24 relative bg-black text-white">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <Cpu className="h-6 w-6 text-secondary" />
          </div>

          <div className="flex justify-center mb-6">
            <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white">
                <span className="mr-2">•</span>Activities
              </p>
            </div>
          </div>

          <h2 className="text-4xl text-muted-foreground max-w-3xl mx-auto">
            Empower the idea of AI and knowledge sharing throughout Uttar
            Pradesh.
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="border rounded-lg border-gray-700 p-10 transition-all duration-300 shadow-lg h-full flex flex-col"
            >
              {/* icon + title on one line */}
              <div className="flex items-center mb-4 space-x-3">
                <div className="p-2 rounded-md inline-flex">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activity.title}
                </h3>
              </div>

              {/* description below */}
              <p className="text-gray-200 text-base leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
