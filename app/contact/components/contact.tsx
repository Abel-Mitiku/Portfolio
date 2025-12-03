"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contacts = useRef([]);
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
      contacts.current.forEach((el) => {
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

  const addToRef = (el) => {
    if (el && !contacts.current.includes(el)) {
      contacts.current.push(el);
    }
  };
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <h1 className="text-4xl font-bold max-[700px]:text-center" ref={header}>
        Contact
      </h1>
      <div className="flex flex-col items-start w-[80%] space-y-6 mt-8">
        <div className="flex space-x-2 items-center" ref={addToRef}>
          <a
            href="https://www.linkedin.com/in/abel-mitiku-4a6732360"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-8 h-8"
              src="/images/linkedin.svg"
              alt="Linked-In"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abel-mitiku-4a6732360"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex space-x-2 items-center" ref={addToRef}>
          <div className="bg-white w-8 h-8 items-center justify-center flex rounded-full">
            <a
              href="https://github.com/Abel-Mitiku"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-8 h-8"
                src="/images/logo-github.svg"
                alt="Github"
                width={20}
                height={20}
              />
            </a>
          </div>
          <a
            href="https://github.com/Abel-Mitiku"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Github
          </a>
        </div>
        <div className="flex space-x-2 items-center" ref={addToRef}>
          <a
            href="https://www.instagram.com/__deadprince?igsh=M2NiOTB5N2c5ZXpm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/__deadprince?igsh=M2NiOTB5N2c5ZXpm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>

        <div className="flex space-x-2 items-center" ref={addToRef}>
          <a
            href="mailto:abelmitiku461@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Mail className="w-8 h-8" />
          </a>
          <a
            href="mailto:abelmitiku461@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Email
          </a>
        </div>
        <div className="flex space-x-2 items-center" ref={addToRef}>
          <a
            href="https://t.me/Zeroflagged"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send className="w-8 h-8" />
          </a>
          <a
            href="https://t.me/Zeroflagged"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
