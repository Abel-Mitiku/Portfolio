"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Lessons() {
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
          5 Lessons I Learned While Building My Tesla-Inspired Full-Stack App
        </h1>

        <div className="flex flex-col justify-start w-full mt-8">
          <h2 className="text-2xl font-bold" ref={addToRef}>
            1. Fix Image Problems Early — They Break the Entire UI
          </h2>

          <p ref={addToRef}>
            One of the first issues I faced was the Next.js <code>Image</code>{" "}
            component. Because the width and height were set too low, Next.js
            tried to heavily compress the images. This made them blurry and
            completely ruined the design.
          </p>

          <p className="mt-2" ref={addToRef}>
            The fix was simple but took time to figure out: set a proper
            <strong>maximum size</strong> for the images and then scale them
            using Tailwind.
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>Images became sharp again</li>
            <li>Layout snapping stopped</li>
            <li>Load performance improved</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6" ref={addToRef}>
            2. Tailwind Can Break Without Warning — Know How to Recover
          </h2>

          <p ref={addToRef}>
            In the middle of development, Tailwind completely stopped applying
            styles. Nothing worked — spacing, colors, flexbox, all gone. I had
            to switch to custom CSS just to keep the project moving.
          </p>

          <p className="mt-2" ref={addToRef}>
            Eventually I found the cause: a broken{" "}
            <code>tailwind.config.js</code> file that was missing key paths.
            After fixing and cleaning the config, Tailwind worked again.
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>Always verify your content paths</li>
            <li>Restart the dev server after every Tailwind config change</li>
            <li>Don’t rely 100% on utilities — CSS knowledge saves you</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6" ref={addToRef}>
            3. Environment Variables Are Different in Production
          </h2>

          <p ref={addToRef}>
            Supabase kept failing silently during the production build. The
            issue? My environment variables worked locally, but in production
            the build could not detect them.
          </p>

          <p className="mt-2" ref={addToRef}>
            I learned that production builds require the variables to be in the
            correct file and correctly spelled. After fixing them, all my API
            calls started working.
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>
              <code>.env.local</code> ≠ <code>.env.production</code>
            </li>
            <li>Variables must match exactly</li>
            <li>Restart the server after changes</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6" ref={addToRef}>
            4. Debugging Deployment Requires Patience and a Plan
          </h2>

          <p ref={addToRef}>
            Deployment was the longest part of the project. My app worked
            perfectly in development, but the build kept failing over and over.
            I spent more than 24 hours fixing:
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>Unused or wrong imports</li>
            <li>Incorrect file paths</li>
            <li>Server–client component conflicts</li>
            <li>Supabase initialization errors</li>
          </ul>

          <p className="mt-2" ref={addToRef}>
            After cleaning everything systematically, the build finally passed.
          </p>

          <h2 className="text-2xl font-bold mt-6" ref={addToRef}>
            5. Full-Stack Projects Demand Clean Structure
          </h2>

          <p ref={addToRef}>
            By the end of the project, I realized that full-stack apps only
            scale when the structure is clean:
          </p>

          <ul className="list-disc ml-4 mt-2" ref={addToRef}>
            <li>Organize API routes properly</li>
            <li>Separate client and server components clearly</li>
            <li>Don’t mix logic inside UI components</li>
            <li>Use consistent folder patterns</li>
          </ul>

          <p className="mt-2" ref={addToRef}>
            Good structure saved me hours of debugging and helped me understand
            the real power of Next.js + Supabase.
          </p>

          <h2 className="text-2xl font-bold mt-8" ref={addToRef}>
            Final Thoughts
          </h2>

          <p ref={addToRef}>
            This project wasn’t just a build — it was a real learning
            experience. Every problem pushed me to understand Next.js, Tailwind,
            and Supabase deeper.
          </p>

          <p className="mt-2" ref={addToRef}>
            These lessons now guide how I approach every new project.
          </p>
        </div>
      </div>
    </div>
  );
}
