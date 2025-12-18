import { useNavigate } from "react-router-dom";
import { HighlightCard } from "../HighlightCard/HighlightCard";
import { useEffect, useState } from "react";

export const OurHighlights = () => {
  const navigate = useNavigate();
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    fetch("/json/highlights/highlights.json")
      .then((res) => res.json())
      .then((data) => {
        setHighlights(data);
      });
  }, []);

  return (
    <section id="highlights">
      <div className="flex flex-col w-full h-fit bg-background-white-1 md:px-[20%] py-[10%] sm:py-[2%] cursor-default">
        <p className="text-text-black font-bold text-[250%] md:text-[350%] text-center">
          Our
          <span className="text-light-blue"> Highlights</span>
        </p>

        <div className="grid grid-cols-3 w-full gap-8 mt-8 justify-center">
          {highlights.slice(0, 3).map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} />
          ))}
        </div>

        <button
          className="self-center mt-8 bg-light-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
          onClick={() => navigate("/highlights")}
        >
          View All Highlights
        </button>
      </div>
    </section>
  );
};
