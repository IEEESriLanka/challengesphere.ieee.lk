import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import BlogCard from "../../Components/Blogs/BlogCard";
import { blogPosts } from "../../data/blogsData";

const Blogs = () => {
  const navigate = useNavigate();

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
          <p className="text-center text-chess-muted text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Updates, event recaps, and stories from IEEE Sri Lanka Challenge
            Sphere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
