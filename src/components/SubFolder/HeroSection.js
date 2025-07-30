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
       Political Manipulations
      </h1>

      {/* ✅ Subheading */}
      <p className="max-w-2xl mx-auto mb-10 font-light text-xl">
        Deceptive content aimed at altering political outcomes
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
       Political deepfakes and fake news are increasingly used to influence elections and public opinion. These 

manipulations spread quickly on social media, making it difficult to identify real information. Users must stay 

alert to avoid falling victim to propaganda designed to shape beliefs and decisions.Advanced AI techniques 

make these fakes highly realistic, fooling even experienced viewers. Staying informed and using verification 

tools is essential to combat this growing threat.
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
