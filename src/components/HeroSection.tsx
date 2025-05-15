
import React from "react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-crypto-purple/20 blur-[100px] -z-10"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-crypto-blue/20 blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-crypto-teal/20 blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4 text-center">
        <div className="inline-block mb-6">
          <span className="chip bg-white/10 text-crypto-teal">
            Token Launch Coming Soon
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">
          <span className="gradient-text">Ascension Fund</span>
          <br />
          Token Launch
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Join the future of decentralized finance with our innovative blockchain ecosystem, featuring our own blockchain, CEX platform, and upcoming mobile app.
        </p>

        <div className="mb-12">
          <CountdownTimer />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="bg-gradient-to-r from-crypto-blue to-crypto-purple text-lg px-8 py-6 h-auto hover:opacity-90 hover:shadow-lg transition-all">
            Join Whitelist
          </Button>
          <Button variant="outline" className="border-white/20 hover:bg-white/5 text-lg px-8 py-6 h-auto group">
            View Tokenomics
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-10 px-2">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold mb-1 gradient-text">$10M</p>
            <p className="text-sm text-gray-400">Hardcap</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold mb-1 gradient-text">100M</p>
            <p className="text-sm text-gray-400">Total Supply</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold mb-1 gradient-text">$0.20</p>
            <p className="text-sm text-gray-400">Initial Price</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold mb-1 gradient-text">3 Phases</p>
            <p className="text-sm text-gray-400">Token Sale</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
