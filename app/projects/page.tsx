"use client";
import ProjectSection from "./components/projects";
import Navigation from "./components/nav";

export default function Projects() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center w-full pt-32 pb-32 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Tesla Project */}
          <ProjectSection
            id="tesla-clone"
            title="Tesla-Inspired Vehicle Ordering Platform"
            subtitle="Next.js + Supabase | Full-Stack E-Commerce"
            description="An end-to-end EV ordering experience with model browsing, customization, authentication, and order submission — inspired by Tesla's workflow. Built with a mix of Server Components and Client Components for optimal performance and data security."
            features={[
              "Authentication (sign up, login, protected routes)",
              "Vehicle models fetched from Supabase database",
              "Dynamic pages per model using Next.js route segments",
              "Order form that creates real database entries",
              "Server actions and API routes for secure operations",
              "Reusable UI components with consistent design",
              "Smooth GSAP animations on scroll",
              "Fully responsive layout for all devices",
              "Secure Supabase queries with RLS-protected tables",
            ]}
            images={[
              {
                src: "/images/home1.png",
                alt: "Tesla homepage showing vehicle model lineup with navigation",
              },
              {
                src: "/images/home-2.png",
                alt: "Tesla vehicle customization interface with color options",
              },
              {
                src: "/images/model-3.png",
                alt: "Model 3 individual page with specifications and order form",
              },
              {
                src: "/images/login.png",
                alt: "Login page with email/password authentication form",
              },
            ]}
            techStack={[
              {
                src: "https://cdn.simpleicons.org/nextdotjs",
                alt: "Next.js logo",
              },
              {
                src: "https://cdn.simpleicons.org/tailwindcss",
                alt: "Tailwind CSS logo",
                className: "h-12",
              },
              {
                src: "https://cdn.simpleicons.org/javascript",
                alt: "JavaScript logo",
              },
              {
                src: "https://cdn.simpleicons.org/typescript",
                alt: "TypeScript logo",
              },
              {
                src: "https://cdn.simpleicons.org/git",
                alt: "Git logo",
                className: "h-12",
              },
              {
                src: "https://cdn.simpleicons.org/github",
                alt: "GitHub logo",
                className: "bg-white rounded",
              },
              {
                src: "https://unpkg.com/simple-icons@10.1.0/icons/css3.svg",
                alt: "CSS3 logo",
                className: "h-8",
              },
              {
                src: "https://cdn.simpleicons.org/supabase",
                alt: "Supabase logo",
                className: "h-12",
              },
              {
                src: "https://cdn.simpleicons.org/vercel",
                alt: "Vercel logo",
                className: "h-12",
              },
            ]}
            liveUrl="https://abels-tesla-clone-one-tau.vercel.app/"
            githubUrl="https://github.com/Abel-Mitiku/Tesla-Clone"
            role="Designed the frontend architecture, built dynamic model pages with server-driven data fetching, implemented authentication, structured RLS-secured Supabase tables, developed reusable components, managed client-server workflows, and deployed to Vercel."
          />

          {/* Quick Cart Project - UPDATED */}
          <ProjectSection
            id="quick-cart"
            title="Quick Cart — E-Commerce Shopping Cart System"
            subtitle="Next.js + Node.js + MongoDB | Full-Stack E-Commerce"
            description="A production-ready shopping cart system with real-time cart updates, secure checkout flow, user authentication, and admin dashboard for product/order management. Built with Next.js for the frontend, Node.js/Express backend API, and MongoDB for data persistence."
            features={[
              "Real-time cart functionality with localStorage + server sync",
              "JWT-based authentication with refresh token rotation",
              "Role-based access control (customer, admin)",
              "Product catalog with search, filtering, and categories",
              "Checkout flow with form validation and order processing",
              "Admin dashboard for managing products, orders, and users",
              "RESTful API built with Express.js and MongoDB",
              "Password recovery with token expiration",
              "Fully responsive UI with mobile-first design",
            ]}
            images={[
              {
                src: "/images/Screenshot 2026-02-10 171430.png",
                alt: "Quick Cart homepage showing product catalog with featured items",
              },
              {
                src: "/images/Screenshot 2026-02-10 170852.png",
                alt: "Shopping cart interface showing items, quantities, and checkout button",
              },
              {
                src: "/images/image.png",
                alt: "Admin dashboard for managing products, orders, and user accounts",
              },
              {
                src: "/images/Screenshot 2026-02-10 170936.png",
                alt: "Product search feature with real-time results",
              },
              {
                src: "/images/Screenshot 2026-02-10 171300.png",
                alt: "User profile management interface",
              },
            ]}
            techStack={[
              {
                src: "https://cdn.simpleicons.org/nextdotjs",
                alt: "Next.js logo",
              },
              {
                src: "https://cdn.simpleicons.org/nodedotjs",
                alt: "Node.js logo",
                className: "bg-white rounded",
              },
              {
                src: "https://cdn.simpleicons.org/express",
                alt: "Express.js logo",
                className: "h-10",
              },
              {
                src: "https://cdn.simpleicons.org/mongodb",
                alt: "MongoDB logo",
              },
              {
                src: "https://cdn.simpleicons.org/javascript",
                alt: "JavaScript logo",
              },
              {
                src: "https://cdn.simpleicons.org/typescript",
                alt: "TypeScript logo",
              },
              {
                src: "https://cdn.simpleicons.org/tailwindcss",
                alt: "Tailwind CSS logo",
                className: "h-12",
              },
              {
                src: "https://cdn.simpleicons.org/git",
                alt: "Git logo",
                className: "h-12",
              },
              {
                src: "https://cdn.simpleicons.org/github",
                alt: "GitHub logo",
                className: "bg-white rounded",
              },
            ]}
            liveUrl="#"
            githubUrl="#"
            role="Built the entire full-stack application: designed MongoDB schema, implemented JWT authentication with refresh tokens, created RESTful API with Express.js, developed real-time cart synchronization, built admin CRUD interfaces, and deployed the application."
          />
        </div>
      </div>
    </div>
  );
}
