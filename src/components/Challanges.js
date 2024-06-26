import React from "react";
import Circuit from "./challanges/circuit";
import Arduino from "./challanges/arduino";
import Ai from "./challanges/ai";
import Signal from "./challanges/signal";
import Chips from "./challanges/chips";

const Challanges = () => {
  return (
    <div>
      <div id="circuit" style={{ height: "100vh", background: "lightblue" }}>
        <Circuit />
      </div>
      <div id="arduino" style={{ height: "100vh", background: "lightyellow" }}>
        <Arduino />
      </div>
      <div id="ai" style={{ height: "100vh", background: "lightpink" }}>
        <Ai />
      </div>
      <div id="signal" style={{ height: "100vh", background: "lightgray" }}>
        <Signal />
      </div>
      <div id="chips" style={{ height: "100vh", background: "lightpurple" }}>
        <Chips />
      </div>
    </div>
  );
};

export default Challanges;
