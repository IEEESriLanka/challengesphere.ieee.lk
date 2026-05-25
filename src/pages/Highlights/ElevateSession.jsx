import React from "react";
import first from "../../assets/sessions/elevate/DSC_3124_5_11zon.webp";
import second from "../../assets/sessions/elevate/DSC09392_3_11zon.webp";
import third from "../../assets/sessions/elevate/DSC_3124_5_11zon.webp";
import fourth from "../../assets/sessions/elevate/DSC_3154_6_11zon.webp";
import fifth from "../../assets/sessions/elevate/DSC09397_1_11zon.webp";
import sixth from "../../assets/sessions/elevate/DSC09413_2_11zon.webp";
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
];

const ElevateSession = () => {
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
            IEEE Sri Lanka – <br />
            Challenge Sphere Elevate Session 2024
          </h1>
          <div className="chess-card p-2 md:p-3 mb-8">
            <ImageGallery items={galleryImages} showPlayButton={false} />
          </div>
          <p className="text-base md:text-lg text-chess-muted mb-4 text-justify leading-relaxed">
            On June 27th, 2024, the IEEE Sri Lanka Section proudly hosted an
            electrifying event, the Challenge Sphere Elevate Session, attracting
            over 200 enthusiastic delegates from various fields. This
            unforgettable session, held with great enthusiasm, aimed to equip
            participants with insights and preparation techniques for tackling
            challenges in cutting-edge technological areas such as Arduino,
            Circuit Design, Artificial Intelligence, Signal Processing, and
            Microelectronics.
          </p>
          <p className="text-base md:text-lg text-chess-muted mb-4 text-justify leading-relaxed">
            The day was packed with engaging activities and informative sessions
            led by experts in the field. Participants had the opportunity to
            delve deep into the intricacies of each domain, gaining valuable
            knowledge and hands-on experience. The session not only highlighted
            the importance of these technologies but also provided practical
            guidance on how to approach and solve related challenges effectively.
          </p>
          <p className="text-base md:text-lg text-chess-muted mb-4 text-justify leading-relaxed">
            The success of the event was evident in the active participation and
            positive feedback from the delegates. The atmosphere was charged
            with curiosity, learning, and collaboration, reflecting the true
            spirit of IEEE's mission to foster technological innovation and
            excellence for the benefit of humanity.
          </p>
          <p className="text-base md:text-lg text-chess-muted mb-8 text-justify leading-relaxed">
            A heartfelt thank you goes out to everyone who participated and
            contributed to making this event a resounding success. Your
            enthusiasm and dedication were truly inspiring, and we look forward
            to many more such successful collaborations and advancements in the
            future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElevateSession;
