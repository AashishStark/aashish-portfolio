import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AiLab } from "@/components/AiLab";
import { TechnicalJourney } from "@/components/TechnicalJourney";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { BeyondCode } from "@/components/BeyondCode";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafbfc] dark:bg-[#0b0f17] text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-emerald-500/20 selection:text-emerald-500">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections (In Exact Specified Order) */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Skills */}
        <Skills />

        {/* 3. Featured Projects */}
        <FeaturedProjects />

        {/* 4. AI Lab */}
        <AiLab />

        {/* 5. Technical Journey */}
        <TechnicalJourney />

        {/* 6. About */}
        <About />

        {/* 7. Research */}
        <Research />

        {/* 8. Beyond Code */}
        <BeyondCode />
      </main>

      {/* 9. Contact / Footer */}
      <ContactFooter />
    </div>
  );
}
