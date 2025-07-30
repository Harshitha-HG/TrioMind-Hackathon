import React from "react";

export default function LearningResources() {
  const interactiveLearning = [
    "Real vs. fake side-by-side comparison.",
    "Short video guides on detecting deepfakes.",
    "“Spot the Fake” image/audio quiz.",
    "Interactive timeline showing evolution of fake media.",
    "Hands-on demo to test suspicious content with our AI.",
    "Visual breakdown of common manipulation signs.",
    "Gamified challenges to practice fake detection skills.",
  ];

  const toolsResources = [
    "Google Fact Check Explorer.",
    "TinEye Reverse Image Search.",
    "InVID for video analysis.",
    "Snopes fact-checking database.",
    "Our AI-powered detection platform.",
    "Hoaxy for tracking spread of misinformation.",
    "Amnesty’s YouTube DataViewer for video verification.",
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Interactive Learning Card */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-orange-600 flex items-center mb-4">
            <span className="mr-2">🎥</span> Interactive Learning
          </h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2 text-[15px]">
            {interactiveLearning.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        {/* Tools & Resources Card */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-orange-600 flex items-center mb-4">
            <span className="mr-2">🛠️</span> Tools & Resources
          </h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2 text-[15px]">
            {toolsResources.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
