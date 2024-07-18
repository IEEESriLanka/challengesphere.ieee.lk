import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const galleryImages = [
    {
        original: "/sessions/elevate/image.png",
        thumbnail: "/sessions/elevate/image.png",
    },
    {
        original: "/sessions/elevate/image1.png",
        thumbnail: "/sessions/elevate/image1.png",
    },
    {
        original: "/sessions/elevate/image copy.png",
        thumbnail: "/sessions/elevate/image copy.png",
    },
    {
        original: "/sessions/elevate/image copy 3.png",
        thumbnail: "/sessions/elevate/image copy 3.png",
    },
    {
        original: "/sessions/elevate/image copy 2.png",
        thumbnail: "/sessions/elevate/image copy 2.png",
    },
];

const Elevate = () => {
    return (
        <div className="pt-36 bg-light-blue-50 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-light-blue-900 mb-6">
                    IEEE Sri Lanka – Challenge Sphere Elevate Session
                </h1>
                <ImageGallery items={galleryImages} />
                <p className="text-lg text-light-blue-700 mb-4">
                    On June 27th, 2024, the IEEE Sri Lanka Section proudly hosted an
                    electrifying event, the Challenge Sphere Elevate Session, attracting
                    over 200 enthusiastic delegates from various fields. This
                    unforgettable session, held with great enthusiasm, aimed to equip
                    participants with insights and preparation techniques for tackling
                    challenges in cutting-edge technological areas such as Arduino,
                    Circuit Design, Artificial Intelligence, Signal Processing, and
                    Microelectronics.
                </p>
                <p className="text-lg text-light-blue-700 mb-4">
                    The day was packed with engaging activities and informative sessions
                    led by experts in the field. Participants had the opportunity to delve
                    deep into the intricacies of each domain, gaining valuable knowledge
                    and hands-on experience. The session not only highlighted the
                    importance of these technologies but also provided practical guidance
                    on how to approach and solve related challenges effectively.
                </p>
                <p className="text-lg text-light-blue-700 mb-4">
                    The success of the event was evident in the active participation and
                    positive feedback from the delegates. The atmosphere was charged with
                    curiosity, learning, and collaboration, reflecting the true spirit of
                    IEEE's mission to foster technological innovation and excellence for
                    the benefit of humanity.
                </p>
                <p className="text-lg text-light-blue-700 mb-8">
                    A heartfelt thank you goes out to everyone who participated and
                    contributed to making this event a resounding success. Your enthusiasm
                    and dedication were truly inspiring, and we look forward to many more
                    such successful collaborations and advancements in the future.
                </p>

            </div>
        </div>
    );
};

export default Elevate;
