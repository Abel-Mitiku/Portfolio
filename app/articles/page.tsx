"use client";
import Navigation from "./components/nav";
import Articles from "./components/articles";

export default function Page() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-screen">
      <Navigation />
      <Articles />
    </div>
  );
}
