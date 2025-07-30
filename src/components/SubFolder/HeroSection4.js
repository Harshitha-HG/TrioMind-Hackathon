import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background:
          "linear-gradient(104.9deg, #1E3A8A 0%, #3B82F6 50%, #FF6B35 100%)",
      }}
      className="text-white py-20 px-4 text-center"
    >
      {/* ✅ Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-5">
       Cyber Warfare
      </h1>

      {/* ✅ Subheading */}
      <p className="max-w-2xl mx-auto mb-10 font-light text-xl">
        Detecting and defending against cyber-based warfare.
      </p>

      {/* ✅ Project Description */}
      <p
        style={{
          textAlign: "justify",
          lineHeight: "1.8",
          fontSize: "1.4rem",
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      >
       Cyber warfare involves state-backed misinformation and AI-driven attacks targeting nations and critical systems.
These threats aim to destabilize economies, spread fear, and undermine trust in institutions.
Understanding these tactics helps users recognize the larger impact of misinformation campaigns.
Such attacks often combine fake content with hacking strategies to amplify damage.
International collaboration and strong cybersecurity measures are vital to defend against these evolving threats.
      </p>

      {/* ✅ CTA Button */}
      <div className="flex justify-center mb-16">
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white text-xl px-8 py-3 rounded-lg font-semibold shadow-md transition-all transform hover:scale-110 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-300"
        >
          Back to Home
        </button>
      </div>

     
    </section>
  );
}
