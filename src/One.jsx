import React from "react";
import Map from "./Map";
import "./Mask";

export default () => (
  <div>
    <h1>One</h1>
    <p>in this module, I've only imported Map and Mask, yet Label works too.</p>
    <button onClick={Map.mask.foo}>mask foo</button>
    <button onClick={Map.label.foo}>label foo</button>
  </div>
);
