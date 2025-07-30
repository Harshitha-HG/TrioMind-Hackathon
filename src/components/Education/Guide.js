import React from "react";

export default function SpottingFakeGuide() {
  const steps = [
    {
      title: "Step 1 : Observe Carefully – Look Beyond the Surface",
      description:
        "Before believing any content, examine it closely. Look for inconsistencies in lighting, unnatural movements, or distorted features in images/videos. In audio, listen for robotic tones or mismatched speech patterns.",
    },
    {
      title: "Step 2 : Verify the Source – Trust the Origin",
      description:
        "Check where the content originated. Is it from a credible news outlet, official channel, or an anonymous source? Cross-check using trusted fact-checking platforms.",
    },
    {
      title: "Step 3 : Use Reverse Search – Find the Truth Trail",
      description:
        "Use tools like Google Reverse Image Search, TinEye, or InVID to trace whether an image or video has been altered or taken out of context.",
    },
    {
      title: "Step 4 : Analyze Metadata – Hidden Clues Matter",
      description:
        "Check file properties (metadata) for inconsistencies, such as mismatched creation dates or editing software tags. This often reveals tampering.",
    },
    {
      title: "Step 5 : Leverage Detection Tools – Let AI Assist You",
      description:
        "Use AI-powered detection platforms (like your project) to analyze deepfakes, cloned voices, and fake news. These tools can highlight anomalies invisible to the human eye.",
    },
    {
      title: "Step 6 : Cross-Check Information – Don’t Rely on One Source",
      description:
        "Compare the content with multiple reliable sources. If it’s true, reputable outlets will report it consistently.",
    },
    {
      title: "Step 7 : Trust Your Instincts – If It Feels Off, Verify",
      description:
        "When something looks too shocking or unreal, it probably is. Always verify before sharing.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-6 text-center">
        Spotting the Fake: Step-by-Step Guide
      </h1>
      {steps.map((step, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">{step.title}</h2>
          <p className="text-gray-700 mt-1 text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
