import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import BlogCard from "../../Components/Blogs/BlogCard";
import { blogPosts, getBlogTopics } from "../../data/blogsData";

const Blogs = () => {
  const navigate = useNavigate();
  const topics = useMemo(() => getBlogTopics(), []);
  const [activeTopic, setActiveTopic] = useState("All");

  const filteredPosts = useMemo(
    () =>
      activeTopic === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.topic === activeTopic),
    [activeTopic]
  );

  return (
    <div className="relative min-h-screen text-text-white">
      <div className="relative px-[5%] pt-24 lg:pt-32 pb-14 lg:px-[10%] cursor-default">
        <button
          type="button"
          className="flex items-center font-semibold text-lg md:text-xl text-text-white hover:text-chess-cyan transition-colors"
          onClick={() => navigate("/#home")}
        >
          <GoArrowLeft className="text-base md:text-2xl mr-2" />
          Back to home page
        </button>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl lg:text-4xl pt-10 font-bold text-center text-white chess-heading-underline mx-auto block w-fit mb-4">
            Blogs
          </h1>
          <p className="text-center text-chess-muted text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Updates, event recaps, and stories from IEEE Sri Lanka Challenge
            Sphere.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  activeTopic === topic
                    ? "bg-chess-cyan/15 border-chess-cyan text-chess-cyan"
                    : "border-chess-border text-chess-muted hover:text-white hover:border-chess-cyan/50"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-chess-muted py-12">
              No posts in this topic yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
