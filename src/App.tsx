/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { Journal } from "./components/Journal";
import { Explorations } from "./components/Explorations";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import { ArticleModal } from "./components/ArticleModal";
import { LightboxModal } from "./components/LightboxModal";
import { ResumeModal } from "./components/ResumeModal";
import { ContactModal } from "./components/ContactModal";
import { AllCredentialsModal } from "./components/AllCredentialsModal";
import { Project, JournalEntry, ExplorationItem } from "./data/portfolioData";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalEntry | null>(null);
  const [selectedExploration, setSelectedExploration] = useState<ExplorationItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isAllCredentialsOpen, setIsAllCredentialsOpen] = useState<boolean>(false);

  const scrollToWorks = () => {
    const el = document.getElementById("works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[hsl(var(--bg))] text-[hsl(var(--text))] font-body selection:bg-[#4E85BF]/30 selection:text-white relative">
        {/* Loading Screen Overlay */}
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Global Floating Navbar */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Main Content Flow */}
        <main>
          {/* Section 2: Hero */}
          <Hero
            isLoading={isLoading}
            onOpenContact={() => setIsContactOpen(true)}
            onScrollToWorks={scrollToWorks}
          />

          {/* Section 3: Selected Works (Bento Grid) */}
          <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

          {/* Section 4: Certifications */}
          <Journal
            onSelectArticle={(article) => setSelectedArticle(article)}
            onOpenAll={() => setIsAllCredentialsOpen(true)}
          />

          {/* Section 5: Explorations (Parallax Gallery) */}
          <Explorations
            onOpenLightbox={(item) => setSelectedExploration(item)}
          />

          {/* Section 6: Stats */}
          <Stats />

          {/* Section 7: Contact / Footer */}
          <Footer onOpenContact={() => setIsContactOpen(true)} />
        </main>

        {/* Interactive Modals */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        <LightboxModal
          item={selectedExploration}
          onClose={() => setSelectedExploration(null)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />

        <AllCredentialsModal
          isOpen={isAllCredentialsOpen}
          onClose={() => setIsAllCredentialsOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
