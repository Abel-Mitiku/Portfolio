"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TailwindFix() {
  const refs = useRef<HTMLElement[]>([]);

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

  const addToRef = (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="flex justify-center mt-8 mb-[200px] pt-16">
      <div className="w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold" ref={addToRef}>
          How I Fixed My Broken Tailwind Setup Mid-Project
        </h1>

        <div className="flex flex-col justify-start w-full mt-8">
          <h2 className="text-2xl font-bold" ref={addToRef}>
            1. When Tailwind Suddenly Stopped Working
          </h2>
          <p ref={addToRef}>
            In the middle of building my Tesla-inspired full-stack app,
            TailwindCSS suddenly stopped applying styles. Components that were
            perfectly styled minutes before became plain and unstyled.
          </p>
          <p ref={addToRef}>
            At first, I thought it was just a hot-reload glitch — but after
            restarting the dev server, nothing changed.
          </p>
          <ul className="list-disc ml-4" ref={addToRef}>
            <li>Tailwind classes were not taking effect</li>
            <li>Styles disappeared randomly across the UI</li>
            <li>
              Even basic utilities like <code>bg-red-500</code> weren’t working
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            2. Why I Started Using Custom CSS
          </h2>
          <p ref={addToRef}>
            Because the project had to move forward, I temporarily switched to
            writing custom CSS just to keep the layout moving. It wasn’t ideal —
            but it helped me continue building the core features while preparing
            to debug Tailwind properly.
          </p>
          <p ref={addToRef}>
            Eventually, I knew I had to fix the real issue, not rely on
            temporary CSS.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            3. The Root Causes Behind the Broken Tailwind
          </h2>
          <p ref={addToRef}>
            I tracked down multiple issues that were causing Tailwind to stop
            working:
          </p>
          <ul className="list-disc ml-4" ref={addToRef}>
            <li>
              The <code>content</code> paths in <code>tailwind.config.js</code>{" "}
              were missing folders.
            </li>
            <li>
              New components I added were not included in the purge paths, so
              Tailwind removed their styles.
            </li>
            <li>
              My global CSS was not being imported in the layout properly.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            4. Fixing the Tailwind Configuration
          </h2>
          <p ref={addToRef}>
            The biggest issue was that Tailwind couldn’t “see” several
            components I created inside nested folders. Because of that,
            Tailwind purged all those classes in the production build — and even
            during dev.
          </p>
          <p ref={addToRef}>
            The fix was to update the <code>content</code> section to include
            all new directories:
          </p>

          <pre
            className="bg-gray-900 text-white p-4 rounded-xl mt-2 overflow-auto text-sm"
            ref={addToRef}
          >
            {`// tailwind.config.js
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./sections/**/*.{js,ts,jsx,tsx}",
];`}
          </pre>

          <p className="mt-2" ref={addToRef}>
            After saving the file and restarting the dev server, Tailwind
            started applying styles again.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            5. Cleaning Up the Temporary Custom CSS
          </h2>
          <p ref={addToRef}>
            Once Tailwind was working correctly, I started removing the
            temporary custom CSS I wrote earlier. Many of those styles were
            replaced with simple Tailwind utilities like <code>flex</code>,{" "}
            <code>space-y-4</code>,<code>w-full</code>, or{" "}
            <code>rounded-xl</code>. This made the codebase much cleaner and
            consistent again.
          </p>
          <p ref={addToRef}>
            The UI became easier to maintain, and I didn’t have to switch
            between Tailwind and manual CSS anymore.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            6. Verifying Everything in Production Mode
          </h2>
          <p ref={addToRef}>
            To be sure the issue was fully fixed, I ran a production build
            using:
          </p>

          <pre
            className="bg-gray-900 text-white p-4 rounded-xl mt-2 overflow-auto text-sm"
            ref={addToRef}
          >
            {`npm run build`}
          </pre>

          <p ref={addToRef}>
            This time, all styles were preserved. No missing components, no
            broken layouts, and no random unstyled sections — which confirmed
            the fix.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            Final Thoughts
          </h2>
          <p ref={addToRef}>
            This issue taught me how sensitive Tailwind is to missing content
            paths and how important it is to keep the configuration updated as
            the project grows. Now I always double-check my folder structure
            whenever Tailwind behaves unexpectedly.
          </p>
        </div>
      </div>
    </div>
  );
}
