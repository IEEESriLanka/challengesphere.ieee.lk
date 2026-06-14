import React from "react";
import { Link } from "react-router-dom";

import BlogHeroCover from "./BlogHeroCover";

const BlogCard = ({ post }) => (
  <article className="chess-card overflow-hidden flex flex-col h-full hover:border-chess-cyan/40 transition-colors">
    {post.coverImage && (
      <Link to={`/highlights/blogs/${post.slug}`} className="block shrink-0">
        <div className="pointer-events-none scale-[1.02] origin-top">
          <BlogHeroCover title={post.title} compact />
        </div>
      </Link>
    )}

    <div className="p-6 sm:p-8 flex flex-col flex-grow">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {post.topic && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide border border-chess-cyan/40 text-chess-cyan bg-chess-cyan/10">
            {post.topic}
          </span>
        )}
        <time className="text-chess-cyan text-xs sm:text-sm tracking-wide font-medium">
          {post.date}
        </time>
      </div>
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-3 leading-snug">
        {post.title}
      </h2>
      <p className="text-chess-muted text-sm sm:text-base leading-relaxed flex-grow">
        {post.excerpt}
      </p>
      <Link
        to={`/highlights/blogs/${post.slug}`}
        className="mt-5 text-chess-cyan text-sm font-semibold hover:text-chess-cyan-soft hover:underline w-fit"
      >
        Read more →
      </Link>
    </div>
  </article>
);

export default BlogCard;
