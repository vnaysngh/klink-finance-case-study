"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { resources } from "@/config/constants";

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
            {resources.slice(1).map((project, index) => (
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
              src={resources[hoveredIndex]?.image || resources[0].image}
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
