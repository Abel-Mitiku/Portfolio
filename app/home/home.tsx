"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Home() {
  const refs = [
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const bulbRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        defaults: { duration: 0.6, ease: "power2.out" },
      });

      t1.fromTo(refs[0].current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
      t1.fromTo(
        refs[1].current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.3",
      );
      t1.fromTo(
        refs[2].current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.3",
      );
      t1.fromTo(
        avatarRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, ease: "back.out(1.7)" },
        "-=0.8",
      );
      t1.fromTo(
        bulbRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=0.4",
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex max-[700px]:flex-col justify-between items-start mt-16 w-full max-[700px]:mb-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="ml-16 mr-8 flex-shrink-0" ref={avatarRef}>
        <div className="relative w-[350px] h-[350px] max-[700px]:w-[280px] max-[700px]:h-[280px] mx-auto group">
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>

          <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 overflow-hidden">
            <Image
              src="/images/abel-avatar.jpg"
              width={400}
              height={400}
              alt="Abel Mitiku - Full Stack Developer"
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full relative flex flex-col items-start justify-center pt-2 max-[700px]:items-center max-[700px]:mt-8">
        <h1
          ref={refs[0]}
          className="text-4xl md:text-5xl font-bold max-[700px]:text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 mt-0"
        >
          Turning Vision into Reality With Code And Design
        </h1>
        <p
          className="mt-2 max-[700px]:text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl"
          ref={refs[1]}
        >
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="flex justify-start w-full mt-6">
          <div
            className="w-full flex max-[700px]:justify-center space-x-4"
            ref={refs[2]}
          >
            <a
              href="/Resume-Abel-Mitiku.pdf"
              download
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 text-sm font-medium rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl min-w-[120px]"
            >
              <span>Resume</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 text-sm font-medium rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl min-w-[120px]"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <div
          className="absolute -top-6 right-4 max-[700px]:hidden"
          ref={bulbRef}
        >
          <Image
            src="/images/miscellaneous_icons_1.svg"
            width={80}
            height={80}
            alt="Light bulb icon"
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
}
