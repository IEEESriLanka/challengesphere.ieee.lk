import React from "react";

const BlogPostContent = ({ post }) => {
  if (post.sections?.length) {
    return (
      <div className="space-y-6">
        {post.sections.map((section, index) => {
          switch (section.type) {
            case "heading":
              return (
                <h2
                  key={index}
                  className="text-white text-xl md:text-2xl font-semibold pt-2"
                >
                  {section.text}
                </h2>
              );
            case "quote":
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-chess-cyan pl-4 md:pl-6 py-1 italic text-white/90 text-base md:text-lg leading-relaxed"
                >
                  {section.text}
                </blockquote>
              );
            case "list":
              return (
                <ul key={index} className="space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item.title}
                      className="chess-card p-4 md:p-5 border border-chess-border/80"
                    >
                      <p className="text-white font-semibold text-base md:text-lg">
                        {item.icon && (
                          <span className="mr-2" aria-hidden>
                            {item.icon}
                          </span>
                        )}
                        {item.title}
                      </p>
                      <p className="text-chess-muted text-sm md:text-base mt-2 leading-relaxed">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              );
            case "hashtags":
              return (
                <p
                  key={index}
                  className="text-chess-cyan text-sm md:text-base font-medium pt-2"
                >
                  {section.tags.join(" ")}
                </p>
              );
            default:
              return (
                <p
                  key={index}
                  className="text-base md:text-lg text-chess-muted text-justify leading-relaxed"
                >
                  {section.text}
                </p>
              );
          }
        })}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {post.paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          className="text-base md:text-lg text-chess-muted text-justify leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default BlogPostContent;
