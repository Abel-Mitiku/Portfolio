"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Debugging() {
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
          Debugging 24+ Hours of Build Errors in Next.js: What I Learned
        </h1>

        <div className="flex flex-col justify-start w-full mt-8">
          <h2 className="text-2xl font-bold" ref={addToRef}>
            1. The Build Worked Locally — But Failed in Production
          </h2>
          <p ref={addToRef}>
            Everything ran perfectly in development, but as soon as I executed
            <code> npm run build </code>, the project crashed with multiple
            errors.
          </p>
          <p ref={addToRef}>
            At first, I expected a simple mistake — but every time I fixed one
            error, two more appeared. I quickly realized this wasn’t a small
            issue; the entire build pipeline was breaking.
          </p>

          <ul className="list-disc ml-4" ref={addToRef}>
            <li>Missing environment variables</li>
            <li>Incorrect imports</li>
            <li>Server actions failing</li>
            <li>Supabase failing silently</li>
            <li>Unexpected Next.js configuration issues</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            2. Checking the Full Build Logs
          </h2>
          <p ref={addToRef}>I started by running:</p>
          <pre
            className="bg-gray-900 text-white p-4 rounded-xl mt-2"
            ref={addToRef}
          >
            npm run build
          </pre>

          <p ref={addToRef}>
            The logs helped reveal the first problems — unused imports,
            incorrect file paths, and server components trying to use
            client-only features.
          </p>
          <p ref={addToRef}>
            Cleaning these up removed a lot of noise, but the real problems were
            still hiding.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            3. Fixing Environment Variable Problems
          </h2>
          <p ref={addToRef}>
            One of the biggest issues came from incorrect Supabase environment
            variables. In development they worked fine, but the production build
            couldn’t detect them at all.
          </p>

          <ul className="list-disc ml-4" ref={addToRef}>
            <li>
              <code>.env.local</code> existed but <code>.env.production</code>{" "}
              did not
            </li>
            <li>Some variables were spelled differently</li>
            <li>
              I forgot to restart the server after updating environment
              variables
            </li>
          </ul>

          <p className="mt-2" ref={addToRef}>
            After fixing them and restarting the build, many Supabase errors
            disappeared.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            4. Cleaning Up Wrong or Circular Imports
          </h2>
          <p ref={addToRef}>
            Next.js is extremely strict about import structure during production
            builds. A single wrong import can break the entire build.
          </p>

          <p ref={addToRef}>I found:</p>

          <ul className="list-disc ml-4" ref={addToRef}>
            <li>Client components imported inside server components</li>
            <li>Components importing each other in a loop</li>
            <li>Missing file extensions</li>
          </ul>

          <p ref={addToRef}>Fixing these removed several critical errors.</p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            5. Rechecking Next.js Configuration
          </h2>
          <p ref={addToRef}>
            At one point, I realized my <code>next.config.js</code> had leftover
            experimental settings and some invalid options copied from older
            versions of the project.
          </p>

          <p ref={addToRef}>
            Cleaning the configuration and using only what was necessary made
            the build more stable and removed internal Next.js warnings.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            6. Testing the Build Again and Again
          </h2>
          <p ref={addToRef}>
            Every time I made a change, I ran the build again. This was the most
            time-consuming part. Some errors disappeared, but new ones appeared
            deeper in the pipeline.
          </p>

          <p ref={addToRef}>I repeated this cycle for hours:</p>
          <ul className="list-disc ml-4" ref={addToRef}>
            <li>Fix an issue</li>
            <li>Rebuild</li>
            <li>Find the next issue</li>
            <li>Fix it</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            7. Final Successful Deployment
          </h2>
          <p ref={addToRef}>
            After more than 24 hours of debugging, the build finally passed. I
            deployed the project successfully and confirmed everything worked in
            production:
          </p>
          <ul className="list-disc ml-4" ref={addToRef}>
            <li>All data loaded correctly</li>
            <li>Supabase was connected</li>
            <li>No hydration mismatches</li>
            <li>UI rendered correctly across all pages</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            What This Experience Taught Me
          </h2>
          <p ref={addToRef}>
            This debugging marathon taught me that production builds reveal
            problems you never see during development. Next.js is strict, and
            small mistakes multiply quickly.
          </p>

          <p className="mt-2" ref={addToRef}>
            Now I always check environment variables, imports, and build logs
            early — before the errors grow into a full-day debugging session.
          </p>
        </div>
      </div>
    </div>
  );
}
