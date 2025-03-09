"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Person1 from "@/assets/footer/image-1.svg";
import Person2 from "@/assets/footer/image-2.svg";
import Person3 from "@/assets/footer/image-3.svg";
import Person4 from "@/assets/footer/image-4.svg";
import Person5 from "@/assets/footer/image-5.svg";
import Person6 from "@/assets/footer/image-6.svg";

const projects = [
  {
    name: "Default Image",
    link: "#",
    image: Person1,
  },
  {
    name: "Buy $SLINK",
    link: "https://final01.notion.site/Platform-for-AI-apps-on-Everscale-f2ba21b09c49416dbd0804d099413a49",
    image: Person2,
  },
  {
    name: "Stake $KLINK",
    link: "https://final01.notion.site/Secured-decentralized-codehosting-with-code-to-earn-mechanics-1ab64af4e92a493ab9c50d6d80c67e72",
    image: Person3,
  },
  {
    name: "KLINK Docs",
    link: "https://final01.notion.site/3D-website-for-art-space-bar-and-restaurant-9ea7c87a553644bdbb2387c940c8dc38",
    image: Person4,
  },
  {
    name: "Media Kit",
    link: "https://final01.notion.site/Interactive-walks-through-cities-of-Russia-Love-Letters-2cc2dda15a5d434fbc7950eeed11b563",
    image: Person5,
  },
  {
    name: "Link3",
    link: "https://final01.notion.site/Automated-concierge-service-for-VIP-customers-128dc731efcd411a908556aba05b2d6b",
    image: Person6,
  },
];
export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(0); // Default image index

  return (
    <div className="hidden py-10 sm:flex">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-left text-6xl font-extrabold italic">
          KLINK <span className="text-klink-purple">Useful Resources</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {projects.slice(1).map((project, index) => (
              <Link
                key={index + 1}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-klink-purple block transform p-4 text-center font-extrabold text-black italic transition hover:scale-105 hover:rotate-1"
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(0)}
              >
                {project.name}
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Image
              src={projects[hoveredIndex]?.image || projects[0].image}
              alt="Person pointing"
              width={300}
              height={200}
              className="transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
