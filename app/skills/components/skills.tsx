"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Bug, Brain, Search, Cpu, Lock, Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
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
    <div className="w-full flex flex-col items-center mt-8 mb-[200px] pt-16">
      <h1 className="text-4xl font-bold" ref={addToRef}>
        My Skills
      </h1>
      <div className="w-[80%] flex flex-col items-start space-y-3">
        <h2 className="text-2xl font-bold mt-10 mb-4" ref={addToRef}>
          1. Languages
        </h2>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/javascript-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>JavaScript</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/typescript-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>TypeScript</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/cplusplus-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>C++</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/java-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>Java</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Cpu className="w-8 h-8" />
          <p>Assembly</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" ref={addToRef}>
          2. Front-End
        </h2>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/nextjs-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>Next.js</p>
        </div>
        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/tailwindcss-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>Tailwind CSS</p>
        </div>
        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/html5-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>HTML</p>
        </div>
        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/css3-original-wordmark.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-10 h-10"
          />
          <p>CSS</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/react-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>React</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/2386673.png"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>GSAP</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" ref={addToRef}>
          3. Back-End & Database
        </h2>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/supabase-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>Supabase</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/nodejs-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>Node.js</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Workflow className="w-8 h-8" />
          <p>REST APIs</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Lock className="w-8 h-8" />
          <p>Authentication</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" ref={addToRef}>
          4. Tools
        </h2>

        <div
          className="flex items-center justify-center bg-white hover:opacity-80 transition rounded"
          ref={addToRef}
        >
          <Image
            src="/images/vercel-original-wordmark.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-16 h-12"
          />
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/git-original-wordmark.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-16 h-12 rounded"
          />
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/github-original-wordmark.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-16 h-12 bg-white rounded"
          />
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Image
            src="/images/npm-original.svg"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-8 h-8"
          />
          <p>NPM</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" ref={addToRef}>
          5. Soft Skills
        </h2>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Bug className="w-8 h-8" />
          <p>Debugging</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Brain className="w-8 h-8" />
          <p>Problem Solving</p>
        </div>

        <div
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition"
          ref={addToRef}
        >
          <Search className="w-8 h-8" />
          <p>Attention to Detail</p>
        </div>
      </div>
    </div>
  );
}
