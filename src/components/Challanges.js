import React from "react";
import Circuit from "./challanges/circuit";

const Challanges = () => {
  return (
    <div>
      <div id="circuit" style={{ height: "100vh", background: "lightblue" }}>
        <Circuit />
      </div>
      <div id="arduino" style={{ height: "100vh", background: "lightyellow" }}>
        <h1>Arduino</h1>
      </div>
      <div id="ai" style={{ height: "100vh", background: "lightpink" }}>
        <h1>AI</h1>
      </div>
      <div id="signal" style={{ height: "100vh", background: "lightgray" }}>
        <h1>Signal</h1>
      </div>
      <div id="chips" style={{ height: "100vh", background: "lightpurple" }}>
        <h1>Chips</h1>
      </div>
    </div>
  );
};

export default Challanges;
