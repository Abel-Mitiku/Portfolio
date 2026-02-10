"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Rocket, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      // Animate bio
      gsap.fromTo(
        bioRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
        },
      );

      // Animate avatar
      gsap.fromTo(
        avatarRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.7)",
        },
      );

      // Animate stats
      gsap.fromTo(
        statsRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.out",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 px-4"
      ref={containerRef}
    >
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl">
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          Passion Fuels Purpose!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Building digital experiences that solve real problems
        </p>
      </header>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Biography */}
        <div ref={bioRef} className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                1
              </span>
              Biography
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm Abel Mitiku, a full-stack developer who builds
              production-ready web applications with React, Next.js, modern
              JavaScript, Node.js, and Supabase.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I focus on clean architecture, intuitive interfaces, and scalable
              back-end logic — turning ideas into functional, polished products.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="font-medium text-blue-800 dark:text-blue-200">
                I'm always growing, always building, and always hungry to learn
                more.
              </p>
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div
          ref={avatarRef}
          className="lg:col-span-1 flex justify-center items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800">
              <Image
                src="/images/abel-avatar.jpg"
                width={400}
                height={400}
                alt="Abel Mitiku - Full Stack Developer"
                className="w-[300px] h-[300px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                2
              </span>
              Quick Stats
            </h2>

            <div className="space-y-6">
              <div className="stat-card group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    10+
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Projects Completed
                </p>
              </div>

              <div className="stat-card group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    Actively Seeking
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Clients
                </p>
              </div>

              <div className="stat-card group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    2+ Years
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-4xl mt-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Ready to turn your ideas into reality? I'm here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
