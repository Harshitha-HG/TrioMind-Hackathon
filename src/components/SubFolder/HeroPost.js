import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaRegCommentDots } from "react-icons/fa";

// Sample post data
const postsData = [
  {
    id: 1,
    title: "AI-Generated Misinformation",
    description:
      "This image shows a butterfly perched on a dog, but it is AI-generated. It contains inconsistencies like unnatural lighting or distorted edges.",
    image: "/images/fake.jpg",
  },
  {
    id: 2,
    title: "Manipulated Political Event",
    description:
      "This video seems to show a political leader at a controversial event, but it’s a deepfake generated with AI to mislead the public.",
    image: "/images/fake.jpg",
  },
  {
    id: 3,
    title: "Fake Product Advertisement",
    description:
      "This ad showcases a product with features it doesn't actually have. The visual was generated using synthetic media.",
    image: "/images/fake.jpg",
  },
  {
    id: 4,
    title: "False Social Engineering Message",
    description:
      "This post claims a new government scheme is open, tricking users into clicking phishing links.",
    image: "/images/fake.jpg",
  },
  {
    id: 5,
    title: "Deepfake Celebrity Endorsement",
    description:
      "A celebrity appears to endorse a crypto scam, but it’s AI-generated using their face and voice.",
    image: "/images/fake.jpg",
  },
  {
    id: 6,
    title: "Fake News Broadcast Clip",
    description:
      "A clip mimicking a reputable news channel was circulated to spread panic over a fake pandemic update.",
    image: "/images/fake.jpg",
  },
  // Add more posts as needed
];

export default function HeroPost() {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
        Explore Detected Threats
      </h2>

      <div className="max-w-3xl mx-auto">
        {postsData.slice(0, visibleCount).map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-orange-300 transition-shadow duration-300 mb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-t-lg object-cover max-h-[400px]"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {post.description}
                <span className="text-blue-500 cursor-pointer hover:underline ml-1">
                  Read more
                </span>
              </p>

              {/* Reactions */}
              <div className="flex justify-around text-gray-700 text-sm border-t border-gray-200 pt-4">
                <button
                  className="flex items-center gap-1 group hover:text-orange-500 transition"
                  title="Like this post"
                >
                  <FaThumbsUp className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  <span>Like</span>
                </button>

                <button
                  className="flex items-center gap-1 group hover:text-orange-500 transition"
                  title="Dislike this post"
                >
                  <FaThumbsDown className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  <span>Dislike</span>
                </button>

                <button
                  className="flex items-center gap-1 group hover:text-orange-500 transition"
                  title="Comment on this post"
                >
                  <FaRegCommentDots className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Load More Button */}
        {visibleCount < postsData.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 hover:shadow-lg transition-all duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
