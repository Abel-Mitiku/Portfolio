"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: { src: string; alt: string; className?: string }[];
  images: { src: string; alt: string }[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  id: string;
}

export default function ProjectSection({
  title,
  subtitle,
  description,
  features,
  techStack,
  images,
  liveUrl,
  githubUrl,
  role,
  id,
}: ProjectSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      if (contentRefs.current.length > 0) {
        gsap.fromTo(
          contentRefs.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      id={id}
      className="w-full py-24 border-b border-gray-800/50 dark:border-gray-200/20"
      aria-labelledby={`${id}-title`}
    >
      <div className="w-[90%] max-w-6xl mx-auto">
        <h2
          ref={addToRefs}
          id={`${id}-title`}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {title}
        </h2>
        <p
          ref={addToRefs}
          className="text-xl text-gray-600 dark:text-gray-400 mb-12"
        >
          {subtitle}
        </p>

        <article className="space-y-12">
          <p
            ref={addToRefs}
            className="text-lg leading-relaxed max-w-3xl text-gray-700 dark:text-gray-300"
          >
            {description}
          </p>

          {images[0] && (
            <div
              ref={addToRefs}
              className="w-full overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src={images[0].src}
                width={1920}
                height={1080}
                alt={images[0].alt}
                className="w-full h-auto object-contain"
                loading="lazy"
                priority={false}
              />
            </div>
          )}

          <div>
            <h3
              ref={addToRefs}
              className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white"
            >
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                1
              </span>
              Key Features
            </h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <ul
                ref={addToRefs}
                className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-4"
              >
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {images.slice(1).map((image, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="w-full overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src={image.src}
                width={1920}
                height={1080}
                alt={image.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
                priority={false}
              />
            </div>
          ))}

          <div>
            <h3
              ref={addToRefs}
              className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white"
            >
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center">
                2
              </span>
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 items-center">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                >
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className={`w-auto h-10 ${tech.className || ""}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              ref={addToRefs}
              className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white"
            >
              <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                3
              </span>
              My Role
            </h3>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p
                ref={addToRefs}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {role}
              </p>
            </div>
          </div>

          {(liveUrl || githubUrl) && (
            <div ref={addToRefs} className="flex gap-6 pt-4">
              {liveUrl && (
                <a
                  href="https://abels-quick-cart-ecommerce-delta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/40 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <span>🌐</span>
                  View Live
                </a>
              )}
              {githubUrl && (
                <a
                  href="https://github.com/Abel-Mitiku/QuickCart-Ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/40 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <span>🐙</span>
                  GitHub
                </a>
              )}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
