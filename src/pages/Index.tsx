
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TokenInfo from "@/components/TokenInfo";
import ProjectOverview from "@/components/ProjectOverview";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-crypto-dark-blue text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectOverview />
        <TokenInfo />
        <Roadmap />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
