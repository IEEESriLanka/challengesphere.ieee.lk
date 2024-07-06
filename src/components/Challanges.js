import React from "react";
import Circuit from "./challanges/circuit";
import Arduino from "./challanges/arduino";
import Ai from "./challanges/ai";
import Signal from "./challanges/signal";
import Chips from "./challanges/chips";

const Challanges = () => {
  return (
    <div>
      <div id="circuit">
        <Circuit />
      </div>
      <div id="arduino">
        <Arduino />
      </div>
      <div id="ai">
        <Ai />
      </div>
      <div id="signal">
        <Signal />
      </div>
      <div id="chips">
        <Chips />
      </div>
    </div>
  );
};

export default Challanges;
