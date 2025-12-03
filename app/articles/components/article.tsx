"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Article({ title, summary, date, tags, link }) {
  const [details, setDetails] = useState(false);
  return (
    <div className="w-full flex flex-col border rounded mt-4 py-2 px-1 cursor-default dark:hover:bg-gray-800 hover:bg-gray-100">
      <div
        className="flex justify-between w-full items-center"
        onClick={() => setDetails((prev) => !prev)}
      >
        <p>{title}</p>
        <p>{date}</p>
        {/* {!details && (
          <div className="mr-2 flex">
            {tags.map((t, i) => (
              <p key={i} className="px-1 py-1">
                {t},
              </p>
            ))}
          </div>
        )} */}
      </div>
      {details && (
        <div>
          <div>{summary}</div>
          <div>
            <ul>
              {tags.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <Link href={link} className="text-blue-500 hover:underline text-sm">
              Article
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
