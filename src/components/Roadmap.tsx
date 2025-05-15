
import React from "react";
import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const Roadmap = () => {
  const milestones = [
    {
      quarter: "Q1 2025",
      title: "Project Launch",
      items: [
        { text: "Whitepaper release", completed: true },
        { text: "Website launch", completed: true },
        { text: "Initial fundraising", completed: false }
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Token Sale",
      items: [
        { text: "Private sale", completed: false },
        { text: "Public ICO", completed: false },
        { text: "Exchange listings", completed: false }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Ecosystem Development",
      items: [
        { text: "Blockchain mainnet launch", completed: false },
        { text: "CEX platform V1", completed: false },
        { text: "Staking program", completed: false }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Expansion",
      items: [
        { text: "Mobile app release", completed: false },
        { text: "Governance implementation", completed: false },
        { text: "Strategic partnerships", completed: false }
      ]
    },
    {
      quarter: "Q1 2026",
      title: "Advanced Features",
      items: [
        { text: "Cross-chain integration", completed: false },
        { text: "DeFi platform launch", completed: false },
        { text: "NFT marketplace", completed: false }
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-crypto-dark-blue relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-crypto-blue/10 blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-crypto-purple/10 blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip bg-white/10 text-crypto-teal mb-4 inline-block">Timeline</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Roadmap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our strategic development plan to build and grow the Ascension Fund ecosystem.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < milestones.length - 1 && (
                <div className="absolute left-[15px] md:left-[47px] top-[60px] bottom-0 w-0.5 bg-gradient-to-b from-crypto-blue/50 to-crypto-purple/50"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6 mb-12">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-hero-pattern flex items-center justify-center shadow-lg token-glow">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6 md:hidden">
                    <h3 className="text-lg font-bold gradient-text">{milestone.quarter}</h3>
                    <h4 className="text-xl font-bold">{milestone.title}</h4>
                  </div>
                </div>
                
                <div className="md:w-40 hidden md:block">
                  <h3 className="text-xl font-bold gradient-text">{milestone.quarter}</h3>
                  <h4 className="text-lg font-bold">{milestone.title}</h4>
                </div>
                
                <div className="pl-14 md:pl-0 flex-1">
                  <div className={cn(
                    "glass-effect p-6 rounded-xl",
                    index === 0 ? "border-crypto-purple/30" : "border-white/10"
                  )}>
                    <ul className="space-y-3">
                      {milestone.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3">
                          {item.completed ? (
                            <CheckCircle className="h-5 w-5 text-crypto-teal flex-shrink-0" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                          <span className={item.completed ? "text-white" : "text-gray-400"}>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
