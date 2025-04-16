"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";

export default function ProjectsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/projects-certifications");
  }, [router]);

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center pt-16">
        <p className="text-lg text-gray-400">Redirecting to projects & certifications page...</p>
      </div>
    </div>
  );
} 