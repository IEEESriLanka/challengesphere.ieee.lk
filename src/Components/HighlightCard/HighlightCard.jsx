import { useNavigate } from "react-router-dom";

export const HighlightCard = ({ highlight }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-full h-[40vh] rounded-2xl bg-light-blue/20 hover:scale-105 transition-transform duration-300"
      onClick={() => navigate(`/highlights/${highlight.id}`)}
    >
      <img
        src={highlight.cardImage}
        alt="Award"
        className="rounded-t-2xl h-52 object-cover"
      />
      <span className="p-2">{highlight.cardDescription}</span>
    </div>
  );
};
