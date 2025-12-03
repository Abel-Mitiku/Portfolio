"use clinet";
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [mobile, setMobile] = useState(false);
  const [home, setHome] = useState(true);
  const [clickHome, setClickHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [articles, setArticles] = useState(false);
  const [skills, setSkills] = useState(false);
  const [contact, setContact] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (mobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobile]);

  return (
    <nav className="flex items-center justify-between h-16 w-full bg-[#0f0f0f] border-b border-white/10">
      <div className="ml-16 pc-menu">
        <ul className="flex space-x-6">
          <li className={`${home && `underline`} cursor-pointer`}>Home</li>
          <li onClick={() => router.push("/about")} className="cursor-pointer">
            About
          </li>
          <li
            onClick={() => router.push("/projects")}
            className="cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => router.push("/articles")}
            className="cursor-pointer"
          >
            Articles
          </li>
          <li onClick={() => router.push("/skills")} className="cursor-pointer">
            Skills
          </li>
          <li
            onClick={() => router.push("/contact")}
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="flex space-x-6 mr-16 contact">
        <a
          href="https://www.linkedin.com/in/abel-mitiku-4a6732360"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/linkedin.svg"
            alt="Linked-In"
            width={20}
            height={20}
          />
        </a>
        <div className="bg-white rounded-full border">
          <a
            href="https://github.com/Abel-Mitiku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logo-github.svg"
              alt="Github"
              width={20}
              height={20}
            />
          </a>
        </div>
        <a
          href="https://www.instagram.com/__deadprince?igsh=M2NiOTB5N2c5ZXpm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-[20px] h-[20px]" />
        </a>

        <a
          href="mailto:abelmitiku461@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Mail className="w-[20px] h-[20px]" />
        </a>
        <a
          href="https://t.me/Zeroflagged"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send className="w-[20px] h-[20px]" />
        </a>
      </div>

      <div className="humberger m-8">
        {!mobile && (
          <Menu
            className="w-[20px] h-[20px] mobile-menu"
            onClick={() => setMobile(true)}
          />
        )}

        {mobile && (
          <div className="mobile-menu flex flex-col absolute top-0 left-0 w-screen bg-white text-black h-screen z-10">
            <div className="">
              <X
                className="w-8 h-8 mb-8 hover:bg-gray-100"
                onClick={() => setMobile(false)}
              />
            </div>
            <ul className="flex flex-col w-full ml-4 space-y-2">
              <li
                className={`hover:bg-gray-100 h-16 w-full flex items-center px-2 ${
                  home && `bg-gray-100`
                }`}
                onClick={() => {
                  setMobile(false);
                  setClickHome(true);
                  setAbout(false);
                  setProjects(false);
                  setArticles(false);
                  setContact(false);
                  setSkills(false);
                }}
              >
                Home
              </li>
              <li
                className={`hover:bg-gray-100 h-16 w-full flex items-center px-2 ${
                  about && `bg-gray-100`
                }`}
                onClick={() => {
                  router.push("/about");
                  setMobile(false);
                  setAbout(true);
                  setProjects(false);
                  setArticles(false);
                  setContact(false);
                  setSkills(false);
                }}
              >
                About
              </li>
              <li
                className={`hover:bg-gray-100 h-16 w-full flex items-center px-2 ${
                  projects && `bg-gray-100`
                }`}
                onClick={() => {
                  router.push("/projects");
                  setMobile(false);
                  setAbout(false);
                  setProjects(true);
                  setArticles(false);
                  setContact(false);
                  setSkills(false);
                }}
              >
                Projects
              </li>
              <li
                className={`hover:bg-gray-100 h-16 w-full flex items-center px-2 ${
                  articles &&
                  `hover:bg-gray-100 h-16 w-full flex items-center px-2`
                }`}
                onClick={() => {
                  router.push("/articles");
                  setMobile(false);
                  setAbout(false);
                  setProjects(false);
                  setArticles(true);
                  setContact(false);
                  setSkills(false);
                }}
              >
                Articles
              </li>
              <li
                className={`hover:bg-gray-100 h-16 w-full flex items-center px-2 ${
                  skills && `bg-gray-100`
                }`}
                onClick={() => {
                  router.push("/skills");
                  setMobile(false);
                  setAbout(false);
                  setProjects(false);
                  setArticles(false);
                  setContact(false);
                  setSkills(true);
                }}
              >
                Skills
              </li>
              <li
                className={`hover:bg-gray-100 h-16 w-full flex items-center px-2 ${
                  contact && `bg-gray-100`
                }`}
                onClick={() => {
                  router.push("/contact");
                  setMobile(false);
                  setAbout(false);
                  setProjects(false);
                  setArticles(false);
                  setContact(true);
                  setSkills(false);
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
