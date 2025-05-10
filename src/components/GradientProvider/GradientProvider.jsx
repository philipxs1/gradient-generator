import React, { createContext, useState } from "react";

export const GradientContext = createContext();

const GradientProvider = ({ children }) => {
  const [angle, setAngle] = useState(180);

  function handleAngle(e) {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = 0;
    if (val > 360) val = 360;
    if (val < 0) val = 0;

    setAngle(val);
  }

  return (
    <GradientContext.Provider value={{ angle, handleAngle }}>{children}</GradientContext.Provider>
  );
};

export default GradientProvider;
