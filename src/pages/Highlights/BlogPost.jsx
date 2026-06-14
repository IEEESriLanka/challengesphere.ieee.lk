import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import BlogHeroCover from "../../Components/Blogs/BlogHeroCover";
import BlogPostContent from "../../Components/Blogs/BlogPostContent";
import { getBlogBySlug } from "../../data/blogsData";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  useEffect(() => {
    if (!post) {
      navigate("/highlights/blogs", { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const galleryItems =
    post.gallery?.map((src) => ({ original: src, thumbnail: src })) ?? [];

  return (
    <div className="relative min-h-screen text-text-white">
      <div className="relative px-[5%] pt-24 lg:pt-32 pb-14 lg:px-[10%] cursor-default">
        <button
          type="button"
          className="flex items-center font-semibold text-lg md:text-xl text-text-white hover:text-chess-cyan transition-colors"
          onClick={() => navigate("/highlights/blogs")}
        >
          <GoArrowLeft className="text-base md:text-2xl mr-2" />
          Back to blogs
        </button>

        <article className="max-w-5xl mx-auto">
          {post.topic && (
            <span className="inline-block mt-10 mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-chess-cyan/40 text-chess-cyan bg-chess-cyan/10">
              {post.topic}
            </span>
          )}
          <time className="block text-chess-cyan text-sm tracking-wide font-medium">
            {post.date}
          </time>
          <h1 className="text-2xl lg:text-4xl font-bold text-white chess-heading-underline w-fit mt-3 mb-8">
            {post.title}
          </h1>

          {post.coverImage && <BlogHeroCover title={post.title} />}

          {galleryItems.length > 0 && (
            <div className="chess-card p-2 md:p-3 mb-8">
              <ImageGallery items={galleryItems} showPlayButton={false} />
            </div>
          )}

          <BlogPostContent post={post} />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
