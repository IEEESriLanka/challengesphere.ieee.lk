import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const galleryImages = [
    {
        original: "/sessions/elevate/11zon_compressed/DSC_3171_4_11zon.webp",
        thumbnail: "/sessions/elevate/11zon_compressed/DSC_3171_4_11zon.webp",

    },
    {
        original: "/sessions/elevate/11zon_compressed/DSC09392_3_11zon.webp",
        thumbnail: "/sessions/elevate/11zon_compressed/DSC09392_3_11zon.webp",

    },
    {
        original: "/sessions/elevate/11zon_compressed/DSC_3124_5_11zon.webp",
        thumbnail: "/sessions/elevate/11zon_compressed/DSC_3124_5_11zon.webp",

    },
    {
        original: "/sessions/elevate/11zon_compressed/DSC_3154_6_11zon.webp",
        thumbnail: "/sessions/elevate/11zon_compressed/DSC_3154_6_11zon.webp",

    },


    {
        original: "/sessions/elevate/11zon_compressed/DSC09397_1_11zon.webp",
        thumbnail: "/sessions/elevate/11zon_compressed/DSC09397_1_11zon.webp",

    },
    {
        original: "/sessions/elevate/11zon_compressed/DSC09413_2_11zon.webp",
        thumbnail: "/sessions/elevate/11zon_compressed/DSC09413_2_11zon.webp",

    },
];

const Elevate = () => {
    return (
        <div className="pt-36 bg-light-blue-50 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-light-blue-600 mb-6">
                    IEEE Sri Lanka – <br />Challenge Sphere Elevate Session
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
