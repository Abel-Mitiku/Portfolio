"use client";
import { useEffect, useRef } from "react";
import { Instagram, Mail, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contactRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current?.querySelector("h1") as HTMLElement | null,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      contactRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.2 + index * 0.1,
            ease: "power2.out",
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRef = (el: HTMLElement | null) => {
    if (el && !contactRefs.current.includes(el)) {
      contactRefs.current.push(el);
    }
  };

  const contacts = [
    {
      icon: "images/linkedin.svg",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abel-mitiku-4a6732360",
      color:
        "hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: "https://cdn.simpleicons.org/github",
      name: "GitHub",
      href: "https://github.com/Abel-Mitiku",
      color:
        "hover:bg-gray-500/10 hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      icon: "https://cdn.simpleicons.org/instagram",
      name: "Instagram",
      href: "https://www.instagram.com/__deadprince?igsh=M2NiOTB5N2c5ZXpm",
      color:
        "hover:bg-pink-500/10 hover:text-pink-600 dark:hover:text-pink-400",
    },
    {
      icon: "https://cdn.simpleicons.org/gmail",
      name: "Email",
      href: "mailto:abelmitiku461@gmail.com",
      color: "hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400",
    },
    {
      icon: "https://cdn.simpleicons.org/telegram",
      name: "Telegram",
      href: "https://t.me/Zeroflagged",
      color:
        "hover:bg-blue-400/10 hover:text-blue-500 dark:hover:text-blue-300",
    },
  ];

  return (
    <div
      className="w-full flex flex-col items-center min-h-screen pt-24 pb-16 px-4 bg-gray-50 dark:bg-gray-900"
      ref={containerRef}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out through any of my social platforms or send me
          an email directly.
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-3">
        {contacts.map((contact, index) => (
          <div
            key={index}
            ref={addToRef}
            className={`contact-item group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 ${contact.color} hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-lg`}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
              <img
                src={contact.icon}
                alt={`${contact.name} icon`}
                className="w-6 h-6"
              />
            </div>

            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {contact.name}
            </a>

            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          💬 <span className="font-medium">abelmitiku461@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
