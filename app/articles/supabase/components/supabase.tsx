"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Database,
  AlertTriangle,
  Key,
  RefreshCw,
  CheckCircle,
  Rocket,
  Shield,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Supabase() {
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
            ref={addToRef}
          >
            The Environment Variable Mistake That Broke My Supabase Setup
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
              <span>10 min read</span>
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
                Everything Worked Locally — But Failed in Production
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                During development, my Supabase setup worked perfectly. API
                calls, server actions, authentication — everything behaved
                exactly the way it should. But once I started preparing for
                production, nothing worked anymore.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The most confusing part was that there were{" "}
                <strong className="text-red-600 dark:text-red-400">
                  no clear error messages
                </strong>
                . Supabase requests silently failed, and I couldn't understand
                why.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-red-800 dark:text-red-200">
                  The symptoms I encountered:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Server actions returned null</li>
                  <li>Database queries never reached Supabase</li>
                  <li>Production build threw random undefined errors</li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-purple-600 dark:text-purple-400">
                  <Key className="w-8 h-8" />
                </span>
                Realizing Supabase Uses Different Environment Keys for
                Production
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                After digging for hours, I discovered the core issue —{" "}
                <strong>
                  I used the wrong environment variables for production
                </strong>
                . Next.js doesn't load{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">
                  .env.local
                </code>{" "}
                during production builds. But all my Supabase keys were in that
                file.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                This meant that in production, all my environment variables were
                basically empty, so Supabase had nothing to connect with.
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-purple-800 dark:text-purple-200 mb-2">
                  The specific mistakes I made:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      .env.local
                    </code>{" "}
                    existed, but{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      .env.production
                    </code>{" "}
                    didn't
                  </li>
                  <li>
                    I forgot to prefix some keys with{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">
                      NEXT_PUBLIC_
                    </code>
                  </li>
                  <li>Some variables were mis-spelled between files</li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">
                  <Shield className="w-8 h-8" />
                </span>
                Fixing the Missing and Incorrect Environment Variables
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Once I discovered the issue, the first step was creating the
                correct environment file:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                <code className="text-green-400 font-mono text-sm md:text-base">
                  .env.production
                </code>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                After that, I carefully copied all Supabase keys and made sure
                they matched exactly.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Correct URLs and anon keys</li>
                  <li>Correct prefixes</li>
                  <li>No typos or missing characters</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                A single missing character in a Supabase URL can break
                everything, so I triple-checked each one.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-orange-600 dark:text-orange-400">
                  <RefreshCw className="w-8 h-8" />
                </span>
                Restarting the Build and Regenerating the Client
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Next.js caches environment variables in builds. That meant
                simply editing the file wouldn't fix anything — I had to restart
                the entire build process:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                <code className="text-green-400 font-mono text-sm md:text-base">
                  npm run build
                </code>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                This time, Supabase finally recognized the correct environment
                values, and server actions stopped failing.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-green-600 dark:text-green-400">
                  <CheckCircle className="w-8 h-8" />
                </span>
                Verifying Supabase Connections in Production
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The final step was testing everything on the deployed version to
                make sure Supabase was fully functional across all environments.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Database queries returned correct data</li>
                  <li>Authentication worked without errors</li>
                  <li>Server actions executed properly</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                After these checks, I knew the environment variable issue was
                fully resolved.
              </p>
            </section>

            <section
              ref={addToRef}
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Database className="w-8 h-8 text-green-500" />
                What I Learned
              </h2>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white mb-6">
                <p className="text-xl leading-relaxed">
                  This debugging process taught me just how important
                  environment variable configuration is in full-stack apps.
                  Supabase relies heavily on them, and small mistakes can create
                  massive failures — especially during production builds.
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Now I always double-check each environment file and test
                production builds early to avoid losing hours to silent failures
                again.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="font-bold text-green-800 dark:text-green-200">
                  Pro tip: Always create <code>.env.production</code> early in
                  development and keep it synchronized with your local
                  environment.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
