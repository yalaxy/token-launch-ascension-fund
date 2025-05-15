
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crypto-dark-blue/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-hero-pattern animate-pulse-slow"></div>
            <span className="text-xl font-bold tracking-tight">AscensionToken</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#token">Token</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-crypto-teal text-crypto-teal hover:text-crypto-teal/90 hover:bg-crypto-teal/10">
              Whitepaper
            </Button>
            <Button className="bg-gradient-to-r from-crypto-blue to-crypto-purple hover:opacity-90">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="p-2 rounded-md md:hidden text-gray-200 hover:bg-gray-800/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 bg-crypto-dark-blue z-40 transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
          <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#token" onClick={() => setIsMenuOpen(false)}>Token</MobileNavLink>
          <MobileNavLink href="#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</MobileNavLink>
          <MobileNavLink href="#team" onClick={() => setIsMenuOpen(false)}>Team</MobileNavLink>
          <MobileNavLink href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
          
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="border-crypto-teal text-crypto-teal hover:text-crypto-teal/90 hover:bg-crypto-teal/10 w-full">
              Whitepaper
            </Button>
            <Button className="bg-gradient-to-r from-crypto-blue to-crypto-purple hover:opacity-90 w-full">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-gray-300 hover:text-white transition-colors font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a 
    href={href}
    className="text-xl py-2 text-gray-300 hover:text-white transition-colors font-medium border-b border-gray-800"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
