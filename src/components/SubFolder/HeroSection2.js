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
       Social Engineering
      </h1>

      {/* ✅ Subheading */}
      <p className="max-w-2xl mx-auto mb-10 font-light text-xl">
        Exposing deceptive tactics that manipulate human behavior
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
       Social engineering attacks exploit human psychology rather than technical vulnerabilities.
Cloned voices, fake messages, and manipulated media trick individuals into revealing sensitive data.
Recognizing these tactics is crucial to protecting personal and organizational security.
Attackers often create urgency or fear to manipulate victims into quick action.
Education and awareness remain the strongest defenses against these attacks.

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
