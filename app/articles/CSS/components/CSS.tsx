"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Zap, CheckCircle, AlertTriangle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CSS() {
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            ref={addToRef}
          >
            Why I Used Custom CSS Alongside Tailwind in My Full-Stack Tesla
            Project
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
              <span>8 min read</span>
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
                <span className="text-blue-600 dark:text-blue-400">
                  <AlertTriangle className="w-8 h-8" />
                </span>
                When Tailwind Suddenly Stopped Working
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                During development, Tailwind stopped applying several important
                styles. Even after restarting the server, clearing cache, and
                checking class names, some elements simply refused to update.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At that point, I had two choices: pause the entire project, or
                find a temporary workaround so the UI could keep moving.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-blue-800 dark:text-blue-200">
                  The symptoms I encountered:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Classes applied but no visual changes</li>
                  <li>Responsive styling not behaving correctly</li>
                  <li>
                    Unexpected differences between dev and production styling
                  </li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-green-600 dark:text-green-400">
                  <Zap className="w-8 h-8" />
                </span>
                Creating Quick Custom CSS as a Temporary Fix
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To avoid blocking progress, I wrote custom CSS files and
                manually handled some of the broken components:
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Button styling</li>
                  <li>Layout spacing and alignment</li>
                  <li>Mobile responsiveness adjustments</li>
                  <li>Fallback animations and transitions</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This was not ideal, but it kept development going while I
                investigated the Tailwind issue.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-purple-600 dark:text-purple-400">
                  <Code className="w-8 h-8" />
                </span>
                Figuring Out the Root Cause in Tailwind
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                After digging deeper, I discovered the real problem: Tailwind
                configuration had broken due to misplaced paths in{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm">
                  tailwind.config.js
                </code>
                .
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Some specific mistakes I found:
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Missing paths for components inside{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      /app
                    </code>{" "}
                    directory
                  </li>
                  <li>
                    Incorrect glob patterns, so Tailwind wasn't scanning all
                    files
                  </li>
                  <li>Unused plugins that caused build warnings</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Once these were fixed, Tailwind started behaving normally again.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-orange-600 dark:text-orange-400">
                  <CheckCircle className="w-8 h-8" />
                </span>
                Replacing Temporary CSS With Proper Tailwind Classes
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                After fixing Tailwind, I revisited every custom CSS rule and
                replaced most of them with Tailwind utility classes.
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Removed redundant CSS files</li>
                  <li>Migrated spacing, flex, and grid back to Tailwind</li>
                  <li>
                    Simplified components by removing unnecessary overrides
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This cleanup made the codebase much more consistent and easier
                to maintain.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-cyan-600 dark:text-cyan-400">⚡</span>
                When Custom CSS Is Still the Better Option
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Even after fixing the configuration, some styles were simply
                easier to implement using plain CSS — especially reusable
                animations, keyframes, and specialized layout behavior.
              </p>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-cyan-800 dark:text-cyan-200 mb-2">
                  Examples where custom CSS shines:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Complex keyframe animations</li>
                  <li>Browser-specific CSS hacks</li>
                  <li>Reusable utility classes not in Tailwind</li>
                  <li>Performance-critical CSS optimizations</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Tailwind is extremely powerful, but combining it with custom CSS
                gives more flexibility when building complex UI components.
              </p>
            </section>

            <section
              ref={addToRef}
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                What I Learned From This Situation
              </h2>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-6">
                <p className="text-xl leading-relaxed">
                  This experience taught me that Tailwind relies heavily on
                  correct configuration. A small mistake in the config file can
                  break the entire styling system.
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Now I always double-check the config, paths, and plugins — and
                I'm not afraid to use custom CSS when needed. The combination of
                both gave me the flexibility to finish the UI without slowing
                down.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
