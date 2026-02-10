"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Terminal,
  Bug,
  Wrench,
  Shield,
  CheckCircle,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Debugging() {
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
            ref={addToRef}
          >
            Debugging 24+ Hours of Build Errors in Next.js: What I Learned
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
                <span className="text-red-600 dark:text-red-400">
                  <Terminal className="w-8 h-8" />
                </span>
                The Build Worked Locally — But Failed in Production
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Everything ran perfectly in development, but as soon as I
                executed{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm">
                  npm run build
                </code>
                , the project crashed with multiple errors.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At first, I expected a simple mistake — but every time I fixed
                one error, two more appeared. I quickly realized this wasn't a
                small issue; the entire build pipeline was breaking.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-red-800 dark:text-red-200">
                  The errors I encountered:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Missing environment variables</li>
                  <li>Incorrect imports</li>
                  <li>Server actions failing</li>
                  <li>Supabase failing silently</li>
                  <li>Unexpected Next.js configuration issues</li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">
                  <Bug className="w-8 h-8" />
                </span>
                Checking the Full Build Logs
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I started by running:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                <code className="text-green-400 font-mono text-sm md:text-base">
                  npm run build
                </code>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The logs helped reveal the first problems — unused imports,
                incorrect file paths, and server components trying to use
                client-only features.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Cleaning these up removed a lot of noise, but the real problems
                were still hiding.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-green-600 dark:text-green-400">
                  <Wrench className="w-8 h-8" />
                </span>
                Fixing Environment Variable Problems
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                One of the biggest issues came from incorrect Supabase
                environment variables. In development they worked fine, but the
                production build couldn't detect them at all.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      .env.local
                    </code>{" "}
                    existed but{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      .env.production
                    </code>{" "}
                    did not
                  </li>
                  <li>Some variables were spelled differently</li>
                  <li>
                    I forgot to restart the server after updating environment
                    variables
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                After fixing them and restarting the build, many Supabase errors
                disappeared.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-purple-600 dark:text-purple-400">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                Cleaning Up Wrong or Circular Imports
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Next.js is extremely strict about import structure during
                production builds. A single wrong import can break the entire
                build.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I found:
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Client components imported inside server components</li>
                  <li>Components importing each other in a loop</li>
                  <li>Missing file extensions</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Fixing these removed several critical errors.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-orange-600 dark:text-orange-400">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                Rechecking Next.js Configuration
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At one point, I realized my{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm">
                  next.config.js
                </code>{" "}
                had leftover experimental settings and some invalid options
                copied from older versions of the project.
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-orange-800 dark:text-orange-200">
                  Common configuration mistakes:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Deprecated experimental flags</li>
                  <li>Invalid image domains</li>
                  <li>Missing webpack configurations</li>
                  <li>Incorrect output settings</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Cleaning the configuration and using only what was necessary
                made the build more stable and removed internal Next.js
                warnings.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-cyan-600 dark:text-cyan-400">🔁</span>
                Testing the Build Again and Again
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Every time I made a change, I ran the build again. This was the
                most time-consuming part. Some errors disappeared, but new ones
                appeared deeper in the pipeline.
              </p>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-cyan-800 dark:text-cyan-200 mb-2">
                  The debugging cycle I repeated for hours:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Fix an issue</li>
                  <li>Rebuild</li>
                  <li>Find the next issue</li>
                  <li>Fix it</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This cycle continued until every error was resolved.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-green-600 dark:text-green-400">
                  <Rocket className="w-8 h-8" />
                </span>
                Final Successful Deployment
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                After more than 24 hours of debugging, the build finally passed.
                I deployed the project successfully and confirmed everything
                worked in production:
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>All data loaded correctly</li>
                  <li>Supabase was connected</li>
                  <li>No hydration mismatches</li>
                  <li>UI rendered correctly across all pages</li>
                </ul>
              </div>
            </section>

            <section
              ref={addToRef}
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                What This Experience Taught Me
              </h2>

              <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-8 text-white mb-6">
                <p className="text-xl leading-relaxed">
                  This debugging marathon taught me that production builds
                  reveal problems you never see during development. Next.js is
                  strict, and small mistakes multiply quickly.
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Now I always check environment variables, imports, and build
                logs early — before the errors grow into a full-day debugging
                session.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
