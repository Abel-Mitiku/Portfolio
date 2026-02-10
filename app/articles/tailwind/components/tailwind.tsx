"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  AlertTriangle,
  Code,
  Settings,
  Brush,
  CheckCircle,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TailwindFix() {
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
            ref={addToRef}
          >
            How I Fixed My Broken Tailwind Setup Mid-Project
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
                <span className="text-red-600 dark:text-red-400">
                  <AlertTriangle className="w-8 h-8" />
                </span>
                When Tailwind Suddenly Stopped Working
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In the middle of building my Tesla-inspired full-stack app,
                TailwindCSS suddenly stopped applying styles. Components that
                were perfectly styled minutes before became plain and unstyled.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At first, I thought it was just a hot-reload glitch — but after
                restarting the dev server, nothing changed.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-red-800 dark:text-red-200">
                  The symptoms I encountered:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Tailwind classes were not taking effect</li>
                  <li>Styles disappeared randomly across the UI</li>
                  <li>
                    Even basic utilities like{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      bg-red-500
                    </code>{" "}
                    weren't working
                  </li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-orange-600 dark:text-orange-400">⚡</span>
                Why I Started Using Custom CSS
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Because the project had to move forward, I temporarily switched
                to writing custom CSS just to keep the layout moving. It wasn't
                ideal — but it helped me continue building the core features
                while preparing to debug Tailwind properly.
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-orange-800 dark:text-orange-200">
                  The temporary approach:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Created separate CSS files for critical components</li>
                  <li>Used inline styles for quick fixes</li>
                  <li>Maintained development momentum</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Eventually, I knew I had to fix the real issue, not rely on
                temporary CSS.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-purple-600 dark:text-purple-400">
                  <Code className="w-8 h-8" />
                </span>
                The Root Causes Behind the Broken Tailwind
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I tracked down multiple issues that were causing Tailwind to
                stop working:
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    The{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      content
                    </code>{" "}
                    paths in{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      tailwind.config.js
                    </code>{" "}
                    were missing folders.
                  </li>
                  <li>
                    New components I added were not included in the purge paths,
                    so Tailwind removed their styles.
                  </li>
                  <li>
                    My global CSS was not being imported in the layout properly.
                  </li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">
                  <Settings className="w-8 h-8" />
                </span>
                Fixing the Tailwind Configuration
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The biggest issue was that Tailwind couldn't "see" several
                components I created inside nested folders. Because of that,
                Tailwind purged all those classes in the production build — and
                even during dev.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The fix was to update the{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">
                  content
                </code>{" "}
                section to include all new directories:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                <code className="text-green-400 font-mono text-sm md:text-base block">
                  {`// tailwind.config.js\ncontent: [\n  "./app/**/*.{js,ts,jsx,tsx}",\n  "./components/**/*.{js,ts,jsx,tsx}",\n  "./sections/**/*.{js,ts,jsx,tsx}",\n];`}
                </code>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                After saving the file and restarting the dev server, Tailwind
                started applying styles again.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-green-600 dark:text-green-400">
                  <Brush className="w-8 h-8" />
                </span>
                Cleaning Up the Temporary Custom CSS
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Once Tailwind was working correctly, I started removing the
                temporary custom CSS I wrote earlier. Many of those styles were
                replaced with simple Tailwind utilities like{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                  flex
                </code>
                ,{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                  space-y-4
                </code>
                ,{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                  w-full
                </code>
                , or{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                  rounded-xl
                </code>
                . This made the codebase much cleaner and consistent again.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-green-800 dark:text-green-200 mb-2">
                  Benefits of the cleanup:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Reduced file size</li>
                  <li>Consistent styling across the app</li>
                  <li>Easier to maintain and update</li>
                  <li>No context switching between Tailwind and custom CSS</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The UI became easier to maintain, and I didn't have to switch
                between Tailwind and manual CSS anymore.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-cyan-600 dark:text-cyan-400">
                  <Rocket className="w-8 h-8" />
                </span>
                Verifying Everything in Production Mode
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To be sure the issue was fully fixed, I ran a production build
                using:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                <code className="text-green-400 font-mono text-sm md:text-base">
                  npm run build
                </code>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-cyan-800 dark:text-cyan-200">
                  The results confirmed:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>All styles were preserved</li>
                  <li>No missing components</li>
                  <li>No broken layouts</li>
                  <li>No random unstyled sections</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                This confirmed the fix was complete and working in production.
              </p>
            </section>

            <section
              ref={addToRef}
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Palette className="w-8 h-8 text-cyan-500" />
                Final Thoughts
              </h2>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white mb-6">
                <p className="text-xl leading-relaxed">
                  This issue taught me how sensitive Tailwind is to missing
                  content paths and how important it is to keep the
                  configuration updated as the project grows. Now I always
                  double-check my folder structure whenever Tailwind behaves
                  unexpectedly.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-bold text-blue-800 dark:text-blue-200">
                  Pro tip: Always include all component directories in your{" "}
                  <code>tailwind.config.js</code> content array from the start,
                  and update it whenever you add new folders.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
