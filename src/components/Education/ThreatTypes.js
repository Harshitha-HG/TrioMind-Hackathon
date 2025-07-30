import React from "react";

const services = [
  {
    title: "Deepfakes – The Illusion of Reality",
    description:
      "Deepfakes use AI to create hyper-realistic videos where people appear to say or do things they never did. These manipulations are so convincing that they can spread false narratives, damage reputations, and mislead entire audiences. What makes them dangerous is how easily they blend with real media, making truth hard to spot.",
  },
  {
    title: "Voice Cloning – When Voices Lie",
    description:
      "Voice cloning uses AI to mimic someone’s speech patterns so accurately that it can trick even close friends or family. This technology is often misused in scams, fake emergency calls, and identity theft, creating chaos and confusion. Always verify the source when you receive unexpected voice messages or calls.",
  },
  {
    title: "Fake News – Lies Disguised as Facts",
    description:
      "Fake news is false information crafted to look like legitimate journalism, designed to mislead or manipulate opinions. It spreads like wildfire on social media, shaping beliefs and fueling misinformation campaigns. Trust only credible sources and fact-check suspicious stories before sharing.",
  },
  {
    title: "AI-Manipulated Images – Perfect but False",
    description:
      "AI can generate or alter images so realistically that it’s almost impossible to tell they’re fake at first glance. These visuals are often used in scams, propaganda, or social media hoaxes to influence emotions and decisions. Look for unnatural details, distorted patterns, or use reverse image search to verify authenticity.",
  },
  {
    title: "Financial Scam Content – The Digital Con Artist",
    description:
      "From fake invoices to phishing emails with forged attachments, scammers use AI-generated content to steal money and data. These scams appear legitimate, tricking victims into transferring funds or revealing sensitive information. Always double-check requests for money, especially when urgency is used to pressure you.",
  },
  {
    title: "Cyber Warfare – Invisible Battles Online",
    description:
      "Cyber warfare uses misinformation, hacking, and AI-powered campaigns to destabilize nations and organizations. It’s not just about hacking systems—it’s about spreading fear, confusion, and distrust at a global level. Strong cybersecurity measures and critical thinking are key defenses against these hidden attacks.",
  },
];

export default function CoreServices() {
  return (
    <section className="py-20 px-6 sm:px-4 max-w-[1280px] mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold text-orange-600 text-center mb-10">
        Types of Digital Threats
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(255,115,0,0.4)] hover:-translate-y-1"
          >
            <h3 className="font-semibold text-xl mt-4 mb-2 text-gray-900">
              {service.title}
            </h3>
            <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
