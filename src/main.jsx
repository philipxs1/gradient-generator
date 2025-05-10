import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global-styles.css";
import App from "./components/App/App.jsx";
import GradientProvider from "./components/GradientProvider/GradientProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GradientProvider>
      <App />
    </GradientProvider>
  </StrictMode>
);
