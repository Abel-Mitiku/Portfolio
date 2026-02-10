"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Image as ImageIcon,
  ZoomIn,
  Settings,
  CheckCircle,
  Palette,
  Layout,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageQuality() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLElement | null)[]>([]);

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

      contentRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2 + index * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRef = (el: HTMLElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            ref={addToRef}
          >
            Fixing Next.js Image Quality Issues
          </h1>

          <div
            className="flex items-center justify-center gap-4 text-gray-600 dark:text-gray-400"
            ref={addToRef}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>10 min read</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Nov 2025</span>
            </span>
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-8">
            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-purple-600 dark:text-purple-400">
                  <ZoomIn className="w-8 h-8" />
                </span>
                Identifying the Problem
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When I first implemented the Image component in my Tesla-style
                app, the images looked extremely blurry and pixelated. At first,
                I thought this was because the files were low-resolution, but
                the real issue was much deeper:
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>The images were being auto-compressed by Next.js.</li>
                  <li>I was giving very small width and height values.</li>
                  <li>
                    Next.js was generating tiny optimized versions based on
                    those dimensions.
                  </li>
                  <li>
                    The UI was stretching these tiny images, causing a loss of
                    quality.
                  </li>
                </ul>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">
                  <Settings className="w-8 h-8" />
                </span>
                Understanding Why Next.js Does This
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Next.js optimizes images by default.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                  That means:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    It uses your width and height to create a small optimized
                    version.
                  </li>
                  <li>It tries to reduce file size for performance.</li>
                  <li>
                    It assumes the numbers you pass are the "true" intended
                    display size.
                  </li>
                </ul>
              </div>
            </section>
            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-orange-600 dark:text-orange-400">🔍</span>
                Confirming the Issue
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I opened the image in DevTools and checked:
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>The rendered size (actual size on screen)</li>
                  <li>The intrinsic size (size Next.js generated)</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                They didn't match.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                The intrinsic size was much smaller — which confirmed Next.js
                wasn't the problem; my configuration was.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-green-600 dark:text-green-400">
                  <CheckCircle className="w-8 h-8" />
                </span>
                The Fix: Give the Image Its Maximum Natural Size
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The solution was to stop forcing the image into very small width
                and height values using the Next.js Image component. Next.js was
                aggressively compressing the image because it thought the
                component was supposed to render at those tiny dimensions.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-green-800 dark:text-green-200">
                  The correct approach:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    Set the image to its maximum natural resolution in the Image
                    component
                  </li>
                  <li>Control the visible size using Tailwind classes</li>
                  <li>Let Next.js optimize based on actual dimensions</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This allowed Next.js to optimize the image correctly while
                giving me full control over the layout. The compression issue
                disappeared immediately, and the image finally rendered with the
                expected quality.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-cyan-600 dark:text-cyan-400">⚡</span>
                Allowing Next.js to Generate a Properly Optimized Version
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                After updating the size, Next.js finally had enough data to
                generate a clean, high-quality optimized image. This eliminated
                the blur and pixelation I was seeing before.
              </p>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-cyan-800 dark:text-cyan-200">
                  Key lesson:
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  The Next.js Image component only works correctly when the
                  provided dimensions match the image's real proportions.
                </p>
              </div>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-pink-600 dark:text-pink-400">
                  <Palette className="w-8 h-8" />
                </span>
                Controlling the Appearance Purely with TailwindCSS
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Instead of manipulating the width and height through the Image
                props, I shifted that responsibility to TailwindCSS.
              </p>

              <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-pink-800 dark:text-pink-200 mb-2">
                  I applied utility classes like:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">
                      w-full
                    </code>
                  </li>
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">
                      h-auto
                    </code>
                  </li>
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">
                      max-w-screen-md
                    </code>
                  </li>
                  <li>Responsive classes depending on the layout</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This allowed me to style the image visually without forcing
                incorrect intrinsic sizes.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-indigo-600 dark:text-indigo-400">
                  <Layout className="w-8 h-8" />
                </span>
                Letting the Layout and Browser Handle Scaling
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By removing the artificial limits and using Tailwind for visual
                control, the browser handled the scaling much more smoothly.
              </p>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-indigo-800 dark:text-indigo-200">
                  The result:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>The image stayed sharp at any size</li>
                  <li>Loaded correctly across all devices</li>
                  <li>Behaved well across all screen sizes</li>
                  <li>No more blurry or pixelated images</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This was something that wasn't happening before when I provided
                incorrect dimensions.
              </p>
            </section>

            <section ref={addToRef}>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="text-green-600 dark:text-green-400">
                  <Rocket className="w-8 h-8" />
                </span>
                Final Verification in Production Build
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Finally, I tested the images using:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                <code className="text-green-400 font-mono text-sm md:text-base">
                  npm run build
                </code>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I ensured that the optimized versions generated during the
                production build still maintained quality.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <p className="font-medium text-green-800 dark:text-green-200">
                  The results confirmed:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Images remained sharp and stable</li>
                  <li>Perfectly aligned with the layout</li>
                  <li>Issue was fully resolved (not just dev mode)</li>
                </ul>
              </div>
            </section>

            <section
              ref={addToRef}
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Key Takeaways
              </h2>

              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white mb-6">
                <p className="text-xl leading-relaxed">
                  Always provide the image's natural dimensions to the Next.js
                  Image component, then use TailwindCSS for visual styling. This
                  gives you the best of both worlds: proper optimization from
                  Next.js and flexible layout control from Tailwind.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                    ✅ DO:
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Use natural image dimensions</li>
                    <li>Control display size with Tailwind</li>
                    <li>Test in production build</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <p className="font-bold text-red-800 dark:text-red-300 mb-2">
                    ❌ DON'T:
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Force tiny width/height values</li>
                    <li>Stretch compressed images</li>
                    <li>Only test in development mode</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
