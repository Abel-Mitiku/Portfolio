"use client";
import Navigation from "./home/navigation";
import Home from "./home/home";

export default function Page() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-screen">
      <Navigation />
      <Home />
    </div>
  );
}
