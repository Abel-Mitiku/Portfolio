"use client";
import { decodeFormState } from "next/dist/server/app-render/entry-base";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Image() {
  const refs = useRef<HTMLElement[]>([]);

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

  const addToRef = (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="flex justify-center mt-8 mb-[200px] pt-16">
      <div className="w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold" ref={addToRef}>
          Fixing Next.js Image Quality Issues
        </h1>
        <div className="flex flex-col justify-start w-full mt-8">
          <h2 className="text-2xl font-bold mb-2" ref={addToRef}>
            1. Identifying the Problem
          </h2>
          <p ref={addToRef}>
            When I first implemented the Image component in my Tesla-style app,
            the images looked extremely blurry and pixelated. At first, I
            thought this was because the files were low-resolution, but the real
            issue was much deeper:
          </p>
          <ul className="list-disc ml-4" ref={addToRef}>
            <li>The images were being auto-compressed by Next.js.</li>
            <li>I was giving very small width and height values.</li>
            <li>
              Next.js was generating tiny optimized versions based on those
              dimensions.
            </li>
            <li>
              The UI was stretching these tiny images, causing a loss of
              quality.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-4 mb-2" ref={addToRef}>
            2. Understanding Why Next.js Does This
          </h2>
          <p ref={addToRef}>Next.js optimizes images by default.</p>
          <p ref={addToRef}>That means:</p>
          <ul className="list-disc ml-4" ref={addToRef}>
            <li>
              It uses your width and height to create a small optimized version.
            </li>
            <li>It tries to reduce file size for performance.</li>
            <li>
              It assumes the numbers you pass are the “true” intended display
              size.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-4 mb-2" ref={addToRef}>
            3. Confirming the Issue
          </h2>
          <p ref={addToRef}>I opened the image in DevTools and checked:</p>
          <ul className="list-disc ml-4" ref={addToRef}>
            <li>The rendered size (actual size on screen)</li>
            <li>The intrinsic size (size Next.js generated)</li>
          </ul>
          <p ref={addToRef}>They didn’t match.</p>
          <p ref={addToRef}>
            The intrinsic size was much smaller — which confirmed Next.js wasn’t
            the problem; my configuration was.t t
          </p>
          <h2 className="text-2xl font-bold mt-4 mb-2" ref={addToRef}>
            4. The Fix: Give the Image Its Maximum Natural Size and Control It
            with TailwindCSS
          </h2>
          <p ref={addToRef}>
            The solution was to stop forcing the image into very small width and
            height values using the Next.js Image component. Next.js was
            aggressively compressing the image because it thought the component
            was supposed to render at those tiny dimensions.
          </p>
          <p ref={addToRef}>
            To fix it, I set the image to its maximum natural resolution inside
            the Image component and then handled the actual visible size using
            Tailwind classes. This allowed Next.js to optimize the image
            correctly while giving me full control over the layout. The
            compression issue disappeared immediately, and the image finally
            rendered with the expected quality.
          </p>
          <h2 className="text-2xl font-bold mt-4 mb-2" ref={addToRef}>
            5. Allowing Next.js to Generate a Properly Optimized Version
          </h2>
          <p ref={addToRef}>
            After updating the size, Next.js finally had enough data to generate
            a clean, high-quality optimized image. This eliminated the blur and
            pixelation I was seeing before. The important lesson here is that
            the Next.js Image component only works correctly when the provided
            dimensions match the image’s real proportions.
          </p>
          <h2 className="text-2xl font-bold mt-4 mb-2" ref={addToRef}>
            6. Controlling the Appearance Purely with TailwindCSS
          </h2>
          <p ref={addToRef}>
            Instead of manipulating the width and height through the Image
            props, I shifted that responsibility to TailwindCSS. I applied
            utility classes like w-full, h-auto, or responsive classes depending
            on the layout I wanted. This allowed me to style the image visually
            without forcing incorrect intrinsic sizes.
          </p>
          <h2 className="text-2xl font-bold mt-4 mb-2" ref={addToRef}>
            7. Letting the Layout and Browser Handle Scaling
          </h2>
          <p ref={addToRef}>
            By removing the artificial limits and using Tailwind for visual
            control, the browser handled the scaling much more smoothly. The
            image now stayed sharp at any size, loaded correctly, and behaved
            well across all screen sizes — something that wasn’t happening
            before when I provided incorrect dimensions.
          </p>
          <h2 className="text-2xl font-bold mt-4 mb-2" ref={addToRef}>
            Final Verification in Production Build
          </h2>
          <p ref={addToRef}>
            Finally, I tested the images using npm run build to ensure that the
            optimized versions generated during the production build still
            maintained quality. The images remained sharp, stable, and perfectly
            aligned with the layout. This confirmed that the issue was fully
            resolved and not just working in development mode.
          </p>
        </div>
      </div>
    </div>
  );
}
