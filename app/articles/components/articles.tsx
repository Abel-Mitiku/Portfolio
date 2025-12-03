"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Article from "./article";

export default function Articles() {
  const refs = useRef<HTMLElement[]>([]);
  const header = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        defaults: { duration: 0.6, ease: "power2.out" },
      });

      t1.fromTo(
        header.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
        }
      );
      refs.current.forEach((el) => {
        t1.fromTo(
          el,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
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
    <div className="w-full flex justify-center mb-16 mt-8 pt-16">
      <div className="w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8" ref={header}>
          All Articles
        </h1>
        <div className="w-full" ref={addToRef}>
          <Article
            title="Fixing Next.js Image Rendering Issues in My Tesla-Inspired App"
            summary="I struggled with the Next.js <Image> component refusing to render images due to domain configuration errors, Low quality rendering and incorrect file paths. This article explains the exact mistakes I made and how editing next.config.js finally fixed everything."
            date="Nov 2025"
            tags={["Next.js", "Tailwind", "Image Optimization", "Debugging"]}
            link="/articles/image"
          />
        </div>
        <div className="w-full" ref={addToRef}>
          <Article
            title="How I Fixed My Broken Tailwind Setup Mid-Project"
            summary="During development, Tailwind randomly stopped applying styles. I had to revert to custom CSS just to keep the UI moving. This article covers what caused the issue, how I fixed my tailwind.config.js, and how I cleaned up the project afterward."
            date="Nov 2025"
            tags={["TailwindCSS", "CSS", "Bug Fix"]}
            link="/articles/tailwind"
          />
        </div>
        <div className="w-full" ref={addToRef}>
          <Article
            title="Debugging 24+ Hours of Build Errors in Next.js: What I Learned"
            summary="My app worked locally but kept failing during production build. I spent more than 24 hours digging through logs, fixing environment variables, cleaning imports, and reconfiguring Next.js. Here’s a breakdown of every step I took to finally deploy the project."
            date="Nov 2025"
            tags={["Next.js", "Supabase", "Deployment", "Build Errors"]}
            link="/articles/debugging"
          />
        </div>
        <div className="w-full" ref={addToRef}>
          <Article
            title="The Environment Variable Mistake That Broke My Supabase Setup"
            summary="I misconfigured my Supabase URL and anon keys which broke server actions and API calls. This article explains how production builds treat environment variables differently and how I eventually got Supabase working."
            date="Nov 2025"
            tags={["Supabase", "Environment Variables", "Next.js"]}
            link="/articles/supabase"
          />
        </div>
        <div className="w-full" ref={addToRef}>
          <Article
            title="Why I Used Custom CSS Alongside Tailwind in My Full-Stack Tesla Project"
            summary="Even though the project uses Tailwind, I had to write custom CSS to bypass Tailwind’s broken configuration. This article explains what styles I wrote manually, why it was necessary, and how I replaced them once Tailwind was fixed."
            date="Nov 2025"
            tags={["TailwindCSS", "CSS", "UI"]}
            link="/articles/CSS"
          />
        </div>

        <div className="w-full" ref={addToRef}>
          <Article
            title="5 Lessons I Learned While Building My Tesla-Inspired Full-Stack App"
            summary="After solving multiple issues—image failures, Tailwind bugs, Supabase misconfigurations, and deployment errors—I collected the most important lessons that made me a better developer."
            date="Nov 2025"
            tags={["Next.js", "Tailwind", "Supabase", "Debugging"]}
            link="/articles/lessons"
          />
        </div>
      </div>
    </div>
  );
}
