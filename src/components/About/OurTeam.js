import React, { useState } from "react";

const teamMembers = [
  {
    name: "Chitrashree K",
    role: "Backend Developer",
    description:
      "Chitrashree built the entire backend system, including user authentication, protected routes, and integration of AI models for deepfake detection. She ensured secure, scalable, and intelligent API functionality.",
    image: "/images/chitra.jpg",
  },
  {
    name: "Dyuthi",
    role: "Database & Authentication Developer",
    description:
      "Dyuthi handled MongoDB management and built authentication for user login and registration. She also developed and integrated a machine learning model for detecting deepfake text, enhancing the platform’s multi-modal detection system.",
    image: "/images/dyuthi.jpg",
  },
  {
    name: "Harshitha H G",
    role: "UI/UX & Frontend Developer",
    description:
      "Harshitha designed the user interface for login, upload, and trend pages. She focused on a clean, tech-driven experience aligned with the cybersecurity theme, ensuring ease of use and visual appeal.",
    image: "/images/harsh.jpg",
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
          Meet Our Team - <span className="text-gray-800">TRIO MIND</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          A passionate team working to build a safer digital world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-2 hover:border-blue-400 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover object-top rounded-t-2xl"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-700 font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-lg">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
              >
                &times;
              </button>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-[300px] object-cover object-top rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedMember.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-2">
                {selectedMember.role}
              </p>
              <p className="text-gray-700">{selectedMember.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
