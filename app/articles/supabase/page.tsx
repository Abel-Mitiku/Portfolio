"use client";
import Navigation from "../components/nav";
import Supabase from "./components/supabase";

export default function Page() {
  return (
    <div>
      <Navigation />
      <Supabase />
    </div>
  );
}
