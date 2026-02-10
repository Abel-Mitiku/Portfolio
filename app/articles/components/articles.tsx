"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Article from "./article";

gsap.registerPlugin(ScrollTrigger);

export default function Articles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

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

      articleRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2 + index * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRef = (el: HTMLElement | null) => {
    if (el && !articleRefs.current.includes(el)) {
      articleRefs.current.push(el);
    }
  };

  const articles = [
    {
      title: "Fixing Next.js Image Rendering Issues in My Tesla-Inspired App",
      summary:
        "I struggled with the Next.js <Image> component refusing to render images due to domain configuration errors, Low quality rendering and incorrect file paths. This article explains the exact mistakes I made and how editing next.config.js finally fixed everything.",
      date: "Nov 2025",
      tags: ["Next.js", "Tailwind", "Image Optimization", "Debugging"],
      link: "/articles/image",
    },
    {
      title: "How I Fixed My Broken Tailwind Setup Mid-Project",
      summary:
        "During development, Tailwind randomly stopped applying styles. I had to revert to custom CSS just to keep the UI moving. This article covers what caused the issue, how I fixed my tailwind.config.js, and how I cleaned up the project afterward.",
      date: "Nov 2025",
      tags: ["TailwindCSS", "CSS", "Bug Fix"],
      link: "/articles/tailwind",
    },
    {
      title: "Debugging 24+ Hours of Build Errors in Next.js: What I Learned",
      summary:
        "My app worked locally but kept failing during production build. I spent more than 24 hours digging through logs, fixing environment variables, cleaning imports, and reconfiguring Next.js. Here's a breakdown of every step I took to finally deploy the project.",
      date: "Nov 2025",
      tags: ["Next.js", "Supabase", "Deployment", "Build Errors"],
      link: "/articles/debugging",
    },
    {
      title: "The Environment Variable Mistake That Broke My Supabase Setup",
      summary:
        "I misconfigured my Supabase URL and anon keys which broke server actions and API calls. This article explains how production builds treat environment variables differently and how I eventually got Supabase working.",
      date: "Nov 2025",
      tags: ["Supabase", "Environment Variables", "Next.js"],
      link: "/articles/supabase",
    },
    {
      title:
        "Why I Used Custom CSS Alongside Tailwind in My Full-Stack Tesla Project",
      summary:
        "Even though the project uses Tailwind, I had to write custom CSS to bypass Tailwind's broken configuration. This article explains what styles I wrote manually, why it was necessary, and how I replaced them once Tailwind was fixed.",
      date: "Nov 2025",
      tags: ["TailwindCSS", "CSS", "UI"],
      link: "/articles/CSS",
    },
    {
      title:
        "5 Lessons I Learned While Building My Tesla-Inspired Full-Stack App",
      summary:
        "After solving multiple issues—image failures, Tailwind bugs, Supabase misconfigurations, and deployment errors—I collected the most important lessons that made me a better developer.",
      date: "Nov 2025",
      tags: ["Next.js", "Tailwind", "Supabase", "Debugging"],
      link: "/articles/lessons",
    },
  ];

  return (
    <div
      className="w-full flex flex-col items-center min-h-screen py-16 px-4 bg-gray-50 dark:bg-gray-900"
      ref={containerRef}
    >
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Articles
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Insights and lessons from building real-world full-stack applications
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            ref={addToRef}
            className="article-card group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-bl-full -z-10" />

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {article.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {article.summary}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {article.date}
                </span>
                <Link
                  href={article.link}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline transition-colors"
                >
                  Read article
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
