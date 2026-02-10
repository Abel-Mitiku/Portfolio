"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bug, Brain, Search, Cpu, Lock, Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current?.querySelector("h1") as HTMLElement | null,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const items = section.querySelectorAll(".skill-item");

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const addToSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-8 bg-gray-50 dark:bg-gray-900 pt-16 px-4 ">
      <h1
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        ref={containerRef}
      >
        My Technical Skills
      </h1>

      <div className="w-full max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <section ref={addToSectionRef} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full font-mono">
              01
            </span>
            Programming Languages
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: "https://cdn.simpleicons.org/javascript",
                name: "JavaScript (ES6+)",
              },
              {
                icon: "https://cdn.simpleicons.org/typescript",
                name: "TypeScript",
              },
              { icon: "https://cdn.simpleicons.org/php", name: "PHP" },
              {
                icon: "images/java-original.svg",
                name: "Java",
              },
              { icon: "https://cdn.simpleicons.org/cplusplus", name: "C++" },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-item group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 flex-shrink-0"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section ref={addToSectionRef} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full font-mono">
              02
            </span>
            Front-End Development
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "https://cdn.simpleicons.org/react", name: "React.js" },
              {
                icon: "https://cdn.simpleicons.org/nextdotjs",
                name: "Next.js",
              },
              { icon: "https://cdn.simpleicons.org/html5", name: "HTML5" },
              {
                icon: "https://unpkg.com/simple-icons@10.1.0/icons/css3.svg",
                name: "CSS3",
              },
              {
                icon: "https://cdn.simpleicons.org/tailwindcss",
                name: "Tailwind CSS",
              },
              { icon: "https://cdn.simpleicons.org/greensock", name: "GSAP" },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-item group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 flex-shrink-0"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section ref={addToSectionRef} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full font-mono">
              03
            </span>
            Back-End Development
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: "https://cdn.simpleicons.org/nodedotjs",
                name: "Node.js",
              },
              {
                icon: "https://cdn.simpleicons.org/express",
                name: "Express.js",
              },
              {
                icon: "https://cdn.simpleicons.org/php",
                name: "PHP (Vanilla)",
              },
              {
                icon: "https://cdn.simpleicons.org/supabase",
                name: "Supabase",
              },
              { icon: "workflow", name: "RESTful APIs", Icon: Workflow },
              { icon: "lock", name: "JWT Authentication", Icon: Lock },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-item group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg"
              >
                {skill.Icon ? (
                  <skill.Icon className="w-8 h-8 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                ) : (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 flex-shrink-0"
                  />
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section ref={addToSectionRef} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full font-mono">
              04
            </span>
            Databases
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "https://cdn.simpleicons.org/mongodb", name: "MongoDB" },
              { icon: "https://cdn.simpleicons.org/mysql", name: "MySQL" },
              {
                icon: "https://cdn.simpleicons.org/postgresql",
                name: "PostgreSQL",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-item group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 flex-shrink-0"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section ref={addToSectionRef} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full font-mono">
              05
            </span>
            Tools & DevOps
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "https://cdn.simpleicons.org/git", name: "Git" },
              { icon: "https://cdn.simpleicons.org/github", name: "GitHub" },
              { icon: "https://cdn.simpleicons.org/npm", name: "NPM / Yarn" },
              { icon: "https://cdn.simpleicons.org/vercel", name: "Vercel" },
              { icon: "https://cdn.simpleicons.org/xampp", name: "XAMPP" },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-item group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-400 dark:hover:border-red-500 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 flex-shrink-0"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section ref={addToSectionRef} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full font-mono">
              06
            </span>
            Soft Skills
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-[200px]">
            {[
              { icon: Bug, name: "Debugging" },
              { icon: Brain, name: "Problem Solving" },
              { icon: Search, name: "Attention to Detail" },
              { icon: Cpu, name: "Performance Optimization" },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-item group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg"
              >
                <skill.icon className="w-8 h-8 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
