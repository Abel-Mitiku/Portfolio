"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Supabase() {
  const refs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      refs.current.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const addToRef = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="flex justify-center mt-8 mb-[200px] pt-16">
      <div className="w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold" ref={addToRef}>
          The Environment Variable Mistake That Broke My Supabase Setup
        </h1>

        <div className="flex flex-col justify-start w-full mt-8">
          <h2 className="text-2xl font-bold" ref={addToRef}>
            1. Everything Worked Locally — But Failed in Production
          </h2>
          <p ref={addToRef}>
            During development, my Supabase setup worked perfectly. API calls,
            server actions, authentication — everything behaved exactly the way
            it should. But once I started preparing for production, nothing
            worked anymore.
          </p>

          <p ref={addToRef}>
            The most confusing part was that there were **no clear error
            messages**. Supabase requests silently failed, and I couldn’t
            understand why.
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>Server actions returned null</li>
            <li>Database queries never reached Supabase</li>
            <li>Production build threw random undefined errors</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            2. Realizing Supabase Uses Different Environment Keys for Production
          </h2>
          <p ref={addToRef}>
            After digging for hours, I discovered the core issue — **I used the
            wrong environment variables for production**. Next.js doesn’t load{" "}
            <code>.env.local</code> during production builds. But all my
            Supabase keys were in that file.
          </p>

          <p className="mt-2" ref={addToRef}>
            This meant that in production, all my environment variables were
            basically empty, so Supabase had nothing to connect with.
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>
              <code>.env.local</code> existed, but <code>.env.production</code>{" "}
              didn’t
            </li>
            <li>
              I forgot to prefix some keys with <code>NEXT_PUBLIC_</code>
            </li>
            <li>Some variables were mis-spelled between files</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            3. Fixing the Missing and Incorrect Environment Variables
          </h2>
          <p ref={addToRef}>
            Once I discovered the issue, the first step was creating the correct
            environment file:
          </p>

          <pre
            className="bg-gray-900 text-white p-4 rounded-xl mt-2"
            ref={addToRef}
          >
            .env.production
          </pre>

          <p className="mt-2" ref={addToRef}>
            After that, I carefully copied all Supabase keys and made sure they
            matched exactly.
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>Correct URLs and anon keys</li>
            <li>Correct prefixes</li>
            <li>No typos or missing characters</li>
          </ul>

          <p className="mt-2" ref={addToRef}>
            A single missing character in a Supabase URL can break everything,
            so I triple-checked each one.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            4. Restarting the Build and Regenerating the Client
          </h2>
          <p ref={addToRef}>
            Next.js caches environment variables in builds. That meant simply
            editing the file wouldn’t fix anything — I had to restart the entire
            build process:
          </p>

          <pre
            className="bg-gray-900 text-white p-4 rounded-xl mt-2"
            ref={addToRef}
          >
            npm run build
          </pre>

          <p className="mt-2" ref={addToRef}>
            This time, Supabase finally recognized the correct environment
            values, and server actions stopped failing.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            5. Verifying Supabase Connections in Production
          </h2>
          <p ref={addToRef}>
            The final step was testing everything on the deployed version to
            make sure Supabase was fully functional across all environments.
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>Database queries returned correct data</li>
            <li>Authentication worked without errors</li>
            <li>Server actions executed properly</li>
          </ul>

          <p className="mt-2" ref={addToRef}>
            After these checks, I knew the environment variable issue was fully
            resolved.
          </p>

          <h2 className="text-2xl font-bold mt-6" ref={addToRef}>
            What I Learned
          </h2>
          <p ref={addToRef}>
            This debugging process taught me just how important environment
            variable configuration is in full-stack apps. Supabase relies
            heavily on them, and small mistakes can create massive failures —
            especially during production builds.
          </p>

          <p className="mt-2" ref={addToRef}>
            Now I always double-check each environment file and test production
            builds early to avoid losing hours to silent failures again.
          </p>
        </div>
      </div>
    </div>
  );
}
