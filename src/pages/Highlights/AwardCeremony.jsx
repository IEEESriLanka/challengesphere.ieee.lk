import React from "react";
import first from "../../assets/awardceremony/00.jpg";
import second from "../../assets/awardceremony/01.jpg";
import third from "../../assets/awardceremony/02.jpg";
import fourth from "../../assets/awardceremony/03.jpg";
import fifth from "../../assets/awardceremony/04.jpg";
import sixth from "../../assets/awardceremony/05.jpg";
import seventh from "../../assets/awardceremony/06.jpg";
import eighth from "../../assets/awardceremony/07.jpg";
import nineth from "../../assets/awardceremony/08.jpg";
import tenth from "../../assets/awardceremony/09.jpg";
import eleventh from "../../assets/awardceremony/10.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const galleryImages = [
  { original: first, thumbnail: first },
  { original: second, thumbnail: second },
  { original: third, thumbnail: third },
  { original: fourth, thumbnail: fourth },
  { original: fifth, thumbnail: fifth },
  { original: sixth, thumbnail: sixth },
  { original: seventh, thumbnail: seventh },
  { original: eighth, thumbnail: eighth },
  { original: nineth, thumbnail: nineth },
  { original: tenth, thumbnail: tenth },
  { original: eleventh, thumbnail: eleventh },
];

const AwardCeremony = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-chess-bg-2 text-text-white">
      <div className="absolute inset-0 chess-grid-overlay" aria-hidden />
      <div className="relative px-[5%] pt-24 lg:pt-32 pb-14 lg:px-[10%] cursor-default">
        <button
          className="flex items-center font-semibold text-lg md:text-xl text-text-white hover:text-chess-cyan transition-colors"
          onClick={() => navigate("/#home")}
        >
          <GoArrowLeft className="text-base md:text-2xl mr-2" />
          Back to home page
        </button>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl lg:text-4xl pt-10 font-bold text-center text-white chess-heading-underline mx-auto block w-fit mb-8">
            IEEE Challenge Sphere 2024 <br /> Awards Ceremony Highlights
          </h1>
          <div className="chess-card p-2 md:p-3 mb-8">
            <ImageGallery items={galleryImages} showPlayButton={false} />
          </div>
          <p className="text-base md:text-lg text-chess-muted mb-4 leading-relaxed">
            Held on 22nd October at Hotel Ramada Colombo, the IEEE Challenge
            Sphere 2024 Awards Ceremony celebrated innovation, talent, and
            collaboration. The evening brought together brilliant minds,
            industry leaders, and rising changemakers in a vibrant atmosphere of
            recognition and connection.
          </p>
          <p className="text-base md:text-lg text-chess-muted mb-4 leading-relaxed">
            Swipe through the gallery to revisit the moments that made it
            unforgettable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardCeremony;
