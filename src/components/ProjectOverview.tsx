
import React from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectOverview = () => {
  const features = [
    {
      title: "Native Blockchain",
      description: "Our own blockchain technology provides fast, secure, and scalable transactions with minimal fees.",
      icon: "🔗",
      highlight: true
    },
    {
      title: "CEX Platform",
      description: "Trade with confidence on our centralized exchange featuring advanced trading tools and deep liquidity.",
      icon: "📊",
      highlight: true
    },
    {
      title: "Mobile App",
      description: "Coming soon: Access the full ecosystem from your pocket with our intuitive mobile application.",
      icon: "📱",
      highlight: true
    },
    {
      title: "Staking Rewards",
      description: "Earn passive income through our flexible staking program with competitive APY rates.",
      icon: "💰",
      highlight: false
    },
    {
      title: "Governance",
      description: "Token holders can participate in platform decisions through our decentralized governance model.",
      icon: "🏛️",
      highlight: false
    },
    {
      title: "Ecosystem Integration",
      description: "Seamlessly interact with all elements of our ecosystem using a single token.",
      icon: "🔄",
      highlight: false
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-crypto-purple/10 blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-crypto-teal/10 blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip bg-white/10 text-crypto-teal mb-4 inline-block">About</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The Ascension Fund is building a comprehensive blockchain ecosystem with multiple integrated products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-effect p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-xl",
                feature.highlight ? "border-crypto-purple/30" : "border-white/5"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-crypto-blue/10 to-crypto-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              {feature.highlight && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="h-5 w-5 text-crypto-teal" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 gradient-text">Key Benefits</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Secure", "Scalable", "Low Fees", "User-Friendly", "Interoperable", "Innovative"].map((tag, index) => (
              <div key={index} className="chip bg-white/5 text-gray-300 border border-white/10">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
