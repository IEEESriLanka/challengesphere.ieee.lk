import React from "react";
import Sponsor from "./Sponser";
import Home from "./Home";
import About from "./About";
import Schedule from "./Schedule";

const Sections = () => {
  //   Sponser array
  const sponsors = [
    { id: 1, name: "Company A", imageUrl: "/logo512.png" },
    { id: 2, name: "Company B", imageUrl: "/logo512.png" },
    { id: 3, name: "Company C", imageUrl: "/logo512.png" },
  ];

  return (
    <>
      <div id="home" style={{ height: "100vh", background: "black" }}>
        <Home />
      </div>
      <div id="about" style={{ height: "100vh", background: "lightblue" }}>
        <About />
      </div>

      <div id="schedule" style={{ height: "100vh", background: "lightgreen" }}>
        <Schedule />
      </div>
      <div id="contact" style={{ height: "100vh", background: "lightcoral" }}>
        <h1>Section 3</h1>
      </div>
      <div id="sponsors" className="py-8 bg-gray-900">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Sponsored Companies
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sponsors.map((sponsor) => (
              <Sponsor
                key={sponsor.id}
                name={sponsor.name}
                imageUrl={sponsor.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
