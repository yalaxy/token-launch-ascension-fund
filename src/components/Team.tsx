
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Williams",
      role: "Blockchain Lead",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  const advisors = [
    {
      name: "Dr. Michael Lee",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Sarah Tanaka",
      role: "Legal Counsel",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      social: {
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-crypto-indigo/10 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip bg-white/10 text-crypto-teal mb-4 inline-block">Meet The Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Experts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team of experienced professionals is dedicated to building the future of blockchain technology.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center group">
                <div className="relative mb-4 mx-auto">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 flex justify-center gap-2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="bg-crypto-dark-blue p-2 rounded-full hover:bg-crypto-blue/80 transition-colors">
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="bg-crypto-dark-blue p-2 rounded-full hover:bg-crypto-blue/80 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="bg-crypto-dark-blue p-2 rounded-full hover:bg-crypto-blue/80 transition-colors">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 text-center">Advisors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {advisors.map((advisor, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center group">
                <div className="relative mb-4 mx-auto">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 mx-auto">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 flex justify-center gap-2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {advisor.social.linkedin && (
                      <a href={advisor.social.linkedin} className="bg-crypto-dark-blue p-2 rounded-full hover:bg-crypto-blue/80 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-bold">{advisor.name}</h4>
                <p className="text-gray-400">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
