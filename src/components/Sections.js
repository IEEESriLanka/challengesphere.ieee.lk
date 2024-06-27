import React from "react";
import Sponsor from "./Sponser";
import Home from "./Home";
import About from "./About";
import Schedule from "./Schedule";
import Challanges from "./Challanges";
import Organizing from "./organizing/Organizing";

const Sections = () => {
  return (
    <>
      <div id="home" style={{ height: "100vh", background: "black" }}>
        <Home />
      </div>
      <div id="about" style={{ height: "100vh" }}>
        <About />
      </div>
      <div id="about">
        <Challanges />
      </div>
      <div id="schedule" style={{ height: "90vh" }}>
        <Schedule />
      </div>
      {/* <div id="contact" style={{ height: "100vh", background: "lightcoral" }}>
        <h1>Section 3</h1>
      </div> */}
      <div id="sponsors">
        <Sponsor />
      </div>
      {/* <div id="organizing">
        <Organizing />
      </div> */}
    </>
  );
};

export default Sections;
