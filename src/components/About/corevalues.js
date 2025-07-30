import React, { useState } from "react";

export default function CoreServicesPage() {
  const services = [
    {
      title: "TRust & Transparency",
      description:
        "We provide clear, explainable AI results so users can trust the authenticity of the content they verify.",
      image: "/images/bg1 (1).svg",
    },
    {
      title: "Security & Privacy",
      description:
        "User data is encrypted, securely processed, and automatically deleted after analysis to ensure complete privacy.",
      image: "/images/bg1 (2).svg",
    },
    {
      title: "Accuracy",
      description:
        "Our AI models are designed to deliver highly accurate detection, minimizing false positives and false negativest.",
      image: "/images/bg1 (3).svg",
    },
    {
      title: "Innovations",
      description:
        "We continuously integrate advanced AI technologies to stay ahead of evolving misinformation threats.",
      image: "/images/bg1 (5).svg",
    },
    {
      title: "Awareness & Education",
      description:
        "We empower users with knowledge, resources, and tips to help them independently identify fake content..",
      image: "/images/bg1 (4).svg",
    },
    {
      title: "Collaboration",
      description:
        "We believe in working together with users, fact-checking organizations, and technology partners to enhance detection accuracy and combat misinformation more effectively.",
      image: "/images/bg1 (6).svg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      {/* Core Services Section */}
      <section className="py-20 px-6 sm:px-4 max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-0 mt-0 leading-relaxed">
          Our Core Services
        </h2>
        <h3 className="text-2xl font-normal text-center mb-10 mt-6 leading-relaxed">
          These fundamental principles guide our decisions and define our culture
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={service.image}
                alt="service icon"
                className="w-16 h-16"
              />
              <h3 className="font-semibold text-xl mt-8 mb-2">
                {service.title}
              </h3>
              <p className="mb-4 mt-6 text-gray-600 text-[16px] font-normal line-clamp-3">
                {service.description}
              </p>

              {/* Hover Popup */}
              {hoveredIndex === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 rounded-3xl shadow-2xl p-6 z-10 transition-all duration-300">
                  <h3 className="font-semibold text-xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
