import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: "/images/bg1 (1).svg",
    title: "Political Manipulations",
    description:
      "AI-generated deepfakes and fake news are used to sway public opinion and influence elections.They spread rapidly online, making it harder to distinguish truth from propaganda.",
    path: "/politicalmanipulation", // ✅ navigate here
  },
  {
    icon: "/images/bg1 (2).svg",
    title: "Social Engineering",
    description:
      "Attackers use cloned voices, fake messages, and manipulated media to trick people into revealing sensitive data. Awareness of these tactics is key to avoiding identity theft and security breaches.",
    path: "/socialengineering", // ✅ navigate here
  },
  {
    icon: "/images/bg1 (3).svg",
    title: "Financial Scams",
    description:
      "Deepfakes and forged content enable online fraud that causes significant financial losses. Recognizing suspicious activity can help users protect themselves from these scams.",
    path: "/financialscams", // ✅ navigate here
  },
  {
    icon: "/images/bg1 (4).svg",
    title: "Cyber Warfare",
    description:
      "State-backed misinformation and AI-driven cyberattacks target governments and critical infrastructure.These digital threats disrupt trust and stability on a global scale.",
    path: "/cyberwarfare", // ✅ navigate here
  },
];

export default function CoreServices() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-10 sm:px-4 max-w-[1280px] mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold text-orange-600 text-center mb-10">
        Track Emerging Misinformation Threats
      </h2>

      <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-between overflow-x-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-6 w-full sm:w-[45%] lg:w-[22%] flex-shrink-0 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={service.icon} alt="icon" className="w-16 h-16" />
            <h3 className="font-semibold text-xl mt-8 mb-2">{service.title}</h3>
            <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">
              {service.description}
            </p>
            <button
              onClick={() => navigate(service.path)}
              className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-2 rounded transition-all"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
