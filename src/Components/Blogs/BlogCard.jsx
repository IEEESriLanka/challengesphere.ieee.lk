import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => (
  <article className="chess-card p-6 sm:p-8 flex flex-col h-full hover:border-chess-cyan/40 transition-colors">
    <time className="text-chess-cyan text-xs sm:text-sm tracking-wide font-medium">
      {post.date}
    </time>
    <h2 className="text-white text-lg sm:text-xl font-semibold mt-2 mb-3 leading-snug">
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
  </article>
);

export default BlogCard;
