import React, { useContext, useState } from "react";
import "./Colorbox.css";
import ColorSwatch from "../../ColorSwatch/ColorSwatch";
import DegreeOption from "../../DegreeOptions/DegreeOption";
import { GradientContext } from "../../GradientProvider/GradientProvider";

const Colorbox = () => {
  const { angle } = useContext(GradientContext);
  const [colors, setColors] = useState(["#1419a9", "#FFD500", "#FF0040", "#FF0008", "#10f048"]);
  const [numOfVisibleColors, setNumOfVisisbleColors] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(", ");

  const backgroundImage = `linear-gradient(${angle}deg , ${colorStops})`;

  function handleColorChange(e, index) {
    {
      const newArray = [...colors];
      newArray[index] = e.target.value;
      setColors(newArray);
    }
  }

  function addColors() {
    if (numOfVisibleColors >= 5) {
      return;
    }

    setNumOfVisisbleColors(numOfVisibleColors + 1);
  }

  function removeColors() {
    if (numOfVisibleColors <= 1) {
      return;
    }
    setNumOfVisisbleColors(numOfVisibleColors - 1);
  }

  return (
    <div className="grid-container">
      <div className="preview-container" style={{ backgroundImage }} />

      <div className="options-container">
        <label>Colors:</label>
        <div>
          <ul className="color-container">
            {visibleColors.map((color, index) => {
              const colorId = `color-${index}`;
              return (
                <ColorSwatch
                  id={colorId}
                  key={index}
                  color={color}
                  handleColorChange={handleColorChange}
                />
              );
            })}
          </ul>
        </div>
        <div className="actions">
          <button
            className={`color-button ${numOfVisibleColors <= 2 ? "disabled" : ""}`}
            onClick={removeColors}>
            Remove color
          </button>
          <button
            className={`color-button ${numOfVisibleColors >= 5 ? "disabled" : ""}`}
            onClick={addColors}>
            Add color
          </button>
        </div>
        <DegreeOption />
      </div>
    </div>
  );
};

export default Colorbox;
