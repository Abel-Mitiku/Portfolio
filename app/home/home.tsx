"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  const bulb = useRef(null);
  const avatar = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        defaults: { duration: 0.5, ease: "power2.out" },
      });

      refs.forEach((ref) => {
        if (!ref.current) return;
        t1.fromTo(
          ref.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
          }
        );
      });
      t1.fromTo(
        avatar.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      t1.fromTo(
        bulb.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex max-[700px]:flex-col justify-between mt-16 w-[90%] max-[700px]:mb-16">
      <div className="ml-16 mr-8 mt-4" ref={avatar}>
        <Image
          className="rounded-full min-[700px]:h-[75%] max-[700px]:h-[350px]"
          src="/images/abel-avatar.jpg"
          width={400}
          height={400}
          alt="profile-pic"
        />
      </div>
      <div className="w-full relative flex flex-col items-center justify-center">
        <h1
          className="text-4xl font-bold max-[700px]:text-center"
          ref={refs[0]}
        >
          Turning Vision into Reality With Code And Design
        </h1>
        <p className="mt-8 max-[700px]:text-center" ref={refs[1]}>
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="flex justify-start w-full mt-4">
          <div
            className="w-full flex max-[700px]:justify-center space-x-6"
            ref={refs[2]}
          >
            <button className="bg-white p-2 text-black text-sm space-x-2 rounded flex h-8 items-center justify-center">
              <p>Resume</p>
              <ExternalLink className="w-[20px] h-[20px]" />
            </button>
            <Link href={"/contact"} className="underline text-bold mt-2">
              Contact
            </Link>
          </div>
        </div>
        <div
          className="absolute top-[230px] right-5 max-[800px]:hidden"
          ref={bulb}
        >
          <Image
            src="/images/miscellaneous_icons_1.svg"
            width={100}
            height={100}
            alt="Bulb"
          />
        </div>
      </div>
    </div>
  );
}
