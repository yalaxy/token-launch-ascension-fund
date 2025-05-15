
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Ascension Fund Token?",
      answer: "The Ascension Fund Token (ASN) is the native utility token of our ecosystem, powering our blockchain, CEX platform, and upcoming mobile app. It provides various benefits including reduced trading fees, staking rewards, governance rights, and more."
    },
    {
      question: "How can I participate in the ICO?",
      answer: "To participate in the ICO, you'll need to join our whitelist and complete KYC verification. Once verified, you can participate in the token sale through our website by connecting your wallet and following the purchase instructions."
    },
    {
      question: "What are the token sale phases?",
      answer: "The token sale will happen in three phases: Private Sale (early investors), Pre-Sale (whitelisted participants), and Public Sale (open to everyone). Each phase will have different token prices and purchase limits."
    },
    {
      question: "Which wallets are supported?",
      answer: "For the token sale, we support popular wallets including MetaMask, Trust Wallet, and WalletConnect-compatible wallets. After launch, our native blockchain will have its own wallet solution."
    },
    {
      question: "What is the vesting schedule?",
      answer: "ICO participants will receive 30% of their tokens immediately after the sale ends, with the remaining 70% vested linearly over 6 months. Team and advisor tokens are subject to a 12-month lock-up period with 24-month vesting."
    },
    {
      question: "How will funds be used?",
      answer: "Funds raised will be allocated to: 40% development of our blockchain and platform, 25% liquidity provision, 20% marketing and user acquisition, 10% operations and legal, and 5% security audits and testing."
    },
    {
      question: "Is there a KYC requirement?",
      answer: "Yes, all participants must complete KYC verification to comply with regulatory requirements and ensure the security of the token sale. The process is straightforward and can be completed through our platform."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-crypto-dark-blue relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-crypto-blue/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-crypto-purple/5 blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip bg-white/10 text-crypto-teal mb-4 inline-block">Support</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about our token and platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-effect rounded-xl p-4 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-crypto-teal transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a href="#" className="text-crypto-teal hover:text-crypto-teal/80 font-medium">
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
