import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const HighlightDetails = () => {
  const { id } = useParams(); // "3"
  const [highlightDetails, setHighlightDetails] = useState(null);

  useEffect(() => {
    fetch("/json/highlights/highlights.json")
      .then((res) => res.json())
      .then((data) => {
        const matchedHighlight = data.find((item) => item.id === Number(id));

        setHighlightDetails(matchedHighlight);
      });
  }, [id]);

  if (!highlightDetails) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full h-fit px-[5%] pt-32 pb-14 lg:px-[20%] cursor-default">
      <h1 className="text-3xl font-bold mb-4">{highlightDetails.heading}</h1>

      <p className="mb-6 text-gray-600">{highlightDetails.cardDescription}</p>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {highlightDetails.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${highlightDetails.title} ${index + 1}`}
            className="rounded-lg"
          />
        ))}
      </div>

      {/* Description */}
      <div className="space-y-4">
        {highlightDetails.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};
