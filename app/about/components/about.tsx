"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function About() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  const biography = useRef(null);
  const heading = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        defaults: { duration: 0.6, ease: "power2.out" },
      });

      t1.fromTo(
        heading.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
        }
      );

      t1.fromTo(
        refs[0].current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
        }
      );
      t1.fromTo(
        refs[1].current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
        },
        "-=0.3"
      );

      t1.fromTo(
        refs[2].current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
        },
        "-=0.3"
      );
      t1.fromTo(
        biography.current,
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
    return () => ctx.revert();
  }, []);
  return (
    <div className="w-full flex flex-col items-center mt-8 pt-16">
      <h1 className="text-4xl font-bold max-[500px]:ml-8" ref={heading}>
        Passion Fuels Purpose!
      </h1>
      <div
        className="grid grid-cols-3 max-[700px]:grid-cols-1 w-[90%] mt-16"
        ref={refs[0]}
      >
        <div className="max-[700px]:hidden">
          <p className="font-bold mb-4 text-2xl">Biography</p>
          <p>
            I’m Abel Mitiku, a full-stack developer who builds production-ready
            web applications with React, Next.js, modern JavaScript, Node.js,
            and Supabase. I focus on clean architecture, intuitive interfaces,
            and scalable back-end logic — turning ideas into functional,
            polished products.
          </p>
          <p>
            I’m always growing, always building, and always hungry to learn
            more.
          </p>
        </div>
        <div className="flex justify-center" ref={refs[1]}>
          <Image
            src="/images/abel-avatar.jpg"
            width={200}
            height={250}
            className="h-[90%] w-[90%]"
            alt="Bulb"
          />
        </div>
        <div className="min-[700px]:hidden" ref={biography}>
          <p className="text-2xl font-bold mb-4 max-[700px]:mt-16">Biography</p>
          <p>
            I’m Abel Mitiku, a full-stack developer who builds production-ready
            web applications with React, Next.js, modern JavaScript, Node.js,
            and Supabase. I focus on clean architecture, intuitive interfaces,
            and scalable back-end logic — turning ideas into functional,
            polished products.
          </p>
          <p>
            I’m always growing, always building, and always hungry to learn
            more.
          </p>
        </div>
        <div
          className="flex flex-col max-[700px]:mt-16 max-[700px]:mb-16"
          ref={refs[2]}
        >
          <div className="flex flex-col items-start space-y-8">
            <div className="">
              <p className="text-4xl font-bold">10+</p>
              <p>Projects Completed:</p>
            </div>
            <div>
              <p className="text-4xl font-bold">Actively Seeking</p>
              <p>Clients:</p>
            </div>
            <div>
              <p className="text-4xl font-bold">2+ Years </p>
              <p>Exprecience:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
