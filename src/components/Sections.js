import React from "react";
import Sponsor from "./Sponser";
import Home from "./Home";
import About from "./About";
import Schedule from "./Schedule";
import Challanges from "./Challanges";

const Sections = () => {
  return (
    <>
      <div id="home" style={{ height: "100vh", background: "black" }}>
        <Home />
      </div>
      <div id="about" style={{ height: "100vh" }}>
        <About />
      </div>
      <div id="about" style={{ height: "500vh" }}>
        <Challanges />
      </div>
      <div id="schedule" style={{ height: "100vh" }}>
        <Schedule />
      </div>
      {/* <div id="contact" style={{ height: "100vh", background: "lightcoral" }}>
        <h1>Section 3</h1>
      </div> */}
      <div id="sponsors">
        <Sponsor />
      </div>
    </>
  );
};

export default Sections;
