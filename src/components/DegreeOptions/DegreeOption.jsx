import React, { useContext } from "react";
import "./DegreeOption.css";
import { GradientContext } from "../GradientProvider/GradientProvider";

const DegreeOption = () => {
  const { handleAngle, angle } = useContext(GradientContext);

  return (
    <div className="angle-picker-container">
      <div className="angle-value">
        <span>{angle}</span> deg
      </div>
      <input
        type="range"
        min="0"
        max="360"
        size="4"
        value={angle}
        className="angle-input"
        onChange={(e) => handleAngle(e)}
      />
    </div>
  );
};

export default DegreeOption;
