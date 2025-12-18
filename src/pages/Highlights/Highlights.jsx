import { useEffect, useState } from "react";
import { HighlightCard } from "../../Components/HighlightCard/HighlightCard";

export const Highlights = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    fetch("/json/highlights/highlights.json")
      .then((res) => res.json())
      .then((data) => {
        setHighlights(data);
      });
  }, []);

  return (
    <div className="flex flex-col w-full h-fit px-[5%] pt-28 pb-14 lg:px-[20%] cursor-default">
      <p className="text-text-black font-bold text-[250%] md:text-[350%] text-center">
        Our
        <span className="text-light-blue"> Highlights</span>
      </p>

      <div className="grid grid-cols-3 w-full gap-8 mt-8 justify-center">
        {highlights.map((highlight, index) => (
          <HighlightCard key={index} highlight={highlight} />
        ))}
      </div>
    </div>
  );
};
