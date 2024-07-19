import React from "react";
import Sponsor from "./Sponser";
import Home from "./Home";
import About from "./About";
import Schedule from "./Schedule";
import Challanges from "./Challanges";
import Organizing from "./organizing/Organizing";
import Leaders from "./organizing/Leaders";
import Background from "three/examples/jsm/renderers/common/Background.js";

const Sections = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="about">
        <Challanges />
      </div>

      <div id="schedule" >
        <Schedule />
      </div>

      <div id="organizing">
        <Organizing />
      </div>
      <div id="leaders">
        <Leaders />
      </div>
      <div id="sponsors">
        <Sponsor />
      </div>

    </>
  );
};

export default Sections;
