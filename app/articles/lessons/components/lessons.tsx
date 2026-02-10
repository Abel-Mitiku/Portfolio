"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lightbulb,
  Image as ImageIcon,
  Palette,
  Database,
  Bug,
  FolderTree,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Lessons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLElement | null)[]>([]);

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

      contentRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2 + index * 0.08,
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
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
            ref={addToRef}
          >
            5 Lessons I Learned While Building My Tesla-Inspired Full-Stack App
          </h1>

          <div
            className="flex items-center justify-center gap-4 text-gray-600 dark:text-gray-400"
            ref={addToRef}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>12 min read</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Nov 2025</span>
            </span>
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-8">
            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </span>
                Fix Image Problems Early — They Break the Entire UI
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                One of the first issues I faced was the Next.js{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">
                  Image
                </code>{" "}
                component. Because the width and height were set too low,
                Next.js tried to heavily compress the images. This made them
                blurry and completely ruined the design.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The fix was simple but took time to figure out: set a proper{" "}
                <strong>maximum size</strong> for the images and then scale them
                using Tailwind.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                  The results:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Images became sharp again</li>
                  <li>Layout snapping stopped</li>
                  <li>Load performance improved</li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </span>
                Tailwind Can Break Without Warning — Know How to Recover
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In the middle of development, Tailwind completely stopped
                applying styles. Nothing worked — spacing, colors, flexbox, all
                gone. I had to switch to custom CSS just to keep the project
                moving.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Eventually I found the cause: a broken{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">
                  tailwind.config.js
                </code>{" "}
                file that was missing key paths. After fixing and cleaning the
                config, Tailwind worked again.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-green-800 dark:text-green-200 mb-2">
                  Key takeaways:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Always verify your content paths</li>
                  <li>
                    Restart the dev server after every Tailwind config change
                  </li>
                  <li>
                    Don't rely 100% on utilities — CSS knowledge saves you
                  </li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </span>
                Environment Variables Are Different in Production
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Supabase kept failing silently during the production build. The
                issue? My environment variables worked locally, but in
                production the build could not detect them.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I learned that production builds require the variables to be in
                the correct file and correctly spelled. After fixing them, all
                my API calls started working.
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-purple-800 dark:text-purple-200 mb-2">
                  Critical lessons:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      .env.local
                    </code>{" "}
                    ≠{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      .env.production
                    </code>
                  </li>
                  <li>Variables must match exactly</li>
                  <li>Restart the server after changes</li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </span>
                Debugging Deployment Requires Patience and a Plan
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Deployment was the longest part of the project. My app worked
                perfectly in development, but the build kept failing over and
                over. I spent more than 24 hours fixing:
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Unused or wrong imports</li>
                  <li>Incorrect file paths</li>
                  <li>Server–client component conflicts</li>
                  <li>Supabase initialization errors</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                After cleaning everything systematically, the build finally
                passed.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </span>
                Full-Stack Projects Demand Clean Structure
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By the end of the project, I realized that full-stack apps only
                scale when the structure is clean:
              </p>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Organize API routes properly</li>
                  <li>Separate client and server components clearly</li>
                  <li>Don't mix logic inside UI components</li>
                  <li>Use consistent folder patterns</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Good structure saved me hours of debugging and helped me
                understand the real power of Next.js + Supabase.
              </p>
            </section>

            <section
              ref={addToRef}
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
                Final Thoughts
              </h2>

              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-8 text-white mb-6">
                <p className="text-xl leading-relaxed">
                  This project wasn't just a build — it was a real learning
                  experience. Every problem pushed me to understand Next.js,
                  Tailwind, and Supabase deeper.
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These lessons now guide how I approach every new project.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="font-bold text-yellow-800 dark:text-yellow-200">
                  Remember: Every bug you fix makes you a better developer.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
