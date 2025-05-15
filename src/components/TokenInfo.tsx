
import React from "react";
import { Button } from "@/components/ui/button";
import TokenAllocation from "./TokenAllocation";
import { Download } from "lucide-react";

const TokenInfo = () => {
  return (
    <section id="token" className="py-24 bg-crypto-dark-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-crypto-blue/10 blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-crypto-purple/10 blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip bg-white/10 text-crypto-teal mb-4 inline-block">Tokenomics</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Token Information</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our token is designed to power the entire ecosystem, from our blockchain to our CEX platform and mobile app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 space-y-6">
              <div className="glass-effect rounded-xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Token Name</span>
                  <span className="font-semibold">Ascension Token</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Symbol</span>
                  <span className="font-semibold">ASN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Platform</span>
                  <span className="font-semibold">Native Chain</span>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Total Supply</span>
                  <span className="font-semibold">100,000,000 ASN</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">ICO Supply</span>
                  <span className="font-semibold">40,000,000 ASN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Initial Price</span>
                  <span className="font-semibold">$0.20 USD</span>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Soft Cap</span>
                  <span className="font-semibold">$2,000,000 USD</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Hard Cap</span>
                  <span className="font-semibold">$10,000,000 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Min/Max Investment</span>
                  <span className="font-semibold">$100 / $50,000 USD</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <Button variant="outline" className="gap-2 border-crypto-teal text-crypto-teal hover:text-crypto-teal/90 hover:bg-crypto-teal/10">
                <Download size={18} />
                Download Whitepaper
              </Button>
            </div>
          </div>

          <TokenAllocation />
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
