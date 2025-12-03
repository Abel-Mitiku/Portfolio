"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const skill = useRef(null);
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

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col items-center w-full pt-32 mb-[250px]">
      <div className="w-[80%] flex flex-col items-center">
        <h1 className="text-4xl font-bold" ref={addToRefs}>
          Tesla-Inspired Vehicle Ordering Platform | Next.js + Supabase
        </h1>
        <div className="flex flex-col items-start">
          <h2
            className="text-2xl font-bold mt-4 mb-2 max-[700px]:mt-8 "
            ref={addToRefs}
          >
            An end-to-end EV ordering experience with model browsing,
            customization, authentication, and order submission — inspired by
            Tesla’s workflow.
          </h2>
          <Image
            ref={addToRefs}
            src="/images/home1.png"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-full"
          />
          <h2
            className="text-2xl font-bold mt-16 mb-2 underline underline-offset-8 decoration-white"
            ref={addToRefs}
          >
            🚀 Project Description
          </h2>
          <p className="mb-2" ref={addToRefs}>
            This project replicates Tesla’s online vehicle ordering workflow
            using real database-driven car data, Supabase authentication,
            dynamic model pages, and persistent order submissions. Built with a
            mix of Server Components and Client Components for performance and
            data security. It focuses on production-grade architecture: typed
            database queries, secure authentication, server-side rendering, and
            persistent user-driven actions.
          </p>
          <Image
            ref={addToRefs}
            src="/images/home-2.png"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-full"
          />
          <h2
            className="text-2xl font-bold underline underline-offset-8 mb-2 mt-16"
            ref={addToRefs}
          >
            🔧 Key Features
          </h2>
          <ul className="list-disc mt-2" ref={addToRefs}>
            <li>Authentication (sign up, login, protected routes)</li>
            <li>Vehicle models fetched from Supabase database</li>
            <li>Dynamic pages per model using Next.js route segments</li>
            <li>Order form that creates real DB entries</li>
            <li>Server actions and API routes</li>
            <li>Reusable UI components</li>
            <li>Smooth animations</li>
            <li>Fully responsive layout</li>
            <li>Secure Supabase queries with RLS-protected tables</li>
          </ul>
          <h2
            className="text-2xl font-bold underline underline-offset-8 mt-16 mb-4"
            ref={addToRefs}
          >
            Individual Order Pages for Each Model
          </h2>
          <Image
            ref={addToRefs}
            src="/images/model-3.png"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-full"
          />
          <h2
            className="text-2xl font-bold underline underline-offset-8 mb-4 mt-16"
            ref={addToRefs}
          >
            Login And Full Authentication Flow
          </h2>
          <Image
            ref={addToRefs}
            src="/images/login.png"
            width={1920}
            height={1080}
            alt="Homepage"
            className="w-full"
          />
          <h2
            className="text-2xl font-bold underline underline-offset-8 mt-16 mb-4"
            ref={addToRefs}
          >
            🛠️ Tech Stack
          </h2>
          <ul className="list-disc" ref={addToRefs}>
            <li>
              Next.js (Server Components, Client Components, Routing, SSR)
            </li>
            <li>Supabase (Auth, Database, RLS)</li>
            <li>Tailwind CSS + custom CSS</li>
            <li>TypeScript for type safety</li>
            <li>Vercel (Deployment + edge optimizations)</li>
            <li>Git (Version control)</li>
          </ul>
          <div
            className="grid min-[700px]:grid-cols-6 min-[900px]:grid-cols-9 max-[700px]:grid-cols-3 items-center space-x-6"
            ref={addToRefs}
          >
            <Image
              src="/images/nextjs-original.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-8 h-8"
            />
            <Image
              src="/images/tailwindcss-original-wordmark.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-[80px] h-[80px]"
            />
            <Image
              src="/images/javascript-original.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-8 h-8"
            />
            <Image
              src="/images/typescript-original.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-8 h-8"
            />
            <Image
              src="/images/git-original-wordmark.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-[80px] h-[80px]"
            />
            <Image
              src="/images/github-original-wordmark.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-8 h-8 bg-white"
            />
            <Image
              src="/images/css3-original-wordmark.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-[50px] h-[50px]"
            />
            <Image
              src="/images/supabase-original-wordmark.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-[80px] h-[80px]"
            />
            <Image
              src="/images/vercel-original-wordmark.svg"
              width={1920}
              height={1080}
              alt="Homepage"
              className="w-[80px] h-[80px]"
            />
          </div>
          <h2
            className="text-2xl font-bold underline underline-offset-8 decoration-2 mt-16 mb-4"
            ref={addToRefs}
          >
            👨‍💻 My Role
          </h2>
          <p ref={addToRefs}>
            Designed the frontend architecture, built dynamic model pages with
            server-driven data fetching, implemented authentication, structured
            RLS-secured Supabase tables, developed reusable components, managed
            client–server workflows, and deployed to Vercel.
          </p>
          <div className="flex space-x-6 mt-4" ref={addToRefs}>
            <a
              href="https://abels-tesla-clone-one-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Live
            </a>
            <a
              href="https://github.com/Abel-Mitiku/Tesla-Clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
