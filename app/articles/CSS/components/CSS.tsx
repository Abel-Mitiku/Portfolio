"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CSS() {
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
          Why I Used Custom CSS Alongside Tailwind in My Full-Stack Tesla
          Project
        </h1>

        <div className="flex flex-col justify-start w-full mt-8">
          <h2 className="text-2xl font-bold" ref={addToRef}>
            1. When Tailwind Suddenly Stopped Working
          </h2>
          <p ref={addToRef}>
            During development, Tailwind stopped applying several important
            styles. Even after restarting the server, clearing cache, and
            checking class names, some elements simply refused to update.
          </p>

          <p ref={addToRef}>
            At that point, I had two choices: pause the entire project, or find
            a temporary workaround so the UI could keep moving.
          </p>

          <ul className="list-disc ml-4" ref={addToRef}>
            <li>Classes applied but no visual changes</li>
            <li>Responsive styling not behaving correctly</li>
            <li>Unexpected differences between dev and production styling</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            2. Creating Quick Custom CSS as a Temporary Fix
          </h2>
          <p ref={addToRef}>
            To avoid blocking progress, I wrote custom CSS files and manually
            handled some of the broken components:
          </p>

          <ul className="list-disc ml-4" ref={addToRef}>
            <li>Button styling</li>
            <li>Layout spacing and alignment</li>
            <li>Mobile responsiveness adjustments</li>
            <li>Fallback animations and transitions</li>
          </ul>

          <p ref={addToRef}>
            This was not ideal, but it kept development going while I
            investigated the Tailwind issue.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            3. Figuring Out the Root Cause in Tailwind
          </h2>
          <p ref={addToRef}>
            After digging deeper, I discovered the real problem: Tailwind
            configuration had broken due to misplaced paths in{" "}
            <code>tailwind.config.js</code>.
          </p>

          <p ref={addToRef}>Some specific mistakes I found:</p>

          <ul className="list-disc ml-4" ref={addToRef}>
            <li>
              Missing paths for components inside <code>/app</code> directory
            </li>
            <li>
              Incorrect glob patterns, so Tailwind wasn’t scanning all files
            </li>
            <li>Unused plugins that caused build warnings</li>
          </ul>

          <p className="mt-2" ref={addToRef}>
            Once these were fixed, Tailwind started behaving normally again.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            4. Replacing Temporary CSS With Proper Tailwind Classes
          </h2>
          <p ref={addToRef}>
            After fixing Tailwind, I revisited every custom CSS rule and
            replaced most of them with Tailwind utility classes.
          </p>

          <ul className="list-disc ml-4" ref={addToRef}>
            <li>Removed redundant CSS files</li>
            <li>Migrated spacing, flex, and grid back to Tailwind</li>
            <li>Simplified components by removing unnecessary overrides</li>
          </ul>

          <p ref={addToRef}>
            This cleanup made the codebase much more consistent and easier to
            maintain.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            5. When Custom CSS Is Still the Better Option
          </h2>
          <p ref={addToRef}>
            Even after fixing the configuration, some styles were simply easier
            to implement using plain CSS — especially reusable animations,
            keyframes, and specialized layout behavior.
          </p>

          <p className="mt-2" ref={addToRef}>
            Tailwind is extremely powerful, but combining it with custom CSS
            gives more flexibility when building complex UI components.
          </p>

          <h2 className="text-2xl font-bold mt-4" ref={addToRef}>
            What I Learned From This Situation
          </h2>
          <p ref={addToRef}>
            This experience taught me that Tailwind relies heavily on correct
            configuration. A small mistake in the config file can break the
            entire styling system.
          </p>

          <p className="mt-2" ref={addToRef}>
            Now I always double-check the config, paths, and plugins — and I’m
            not afraid to use custom CSS when needed. The combination of both
            gave me the flexibility to finish the UI without slowing down.
          </p>
        </div>
      </div>
    </div>
  );
}
