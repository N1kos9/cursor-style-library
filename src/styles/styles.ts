import React from "react";

export const baseCursorStyle: React.CSSProperties = {
  position: "fixed",
  width: "20px",
  height: "20px",
  backgroundColor: "white",
  borderRadius: "50%",
  pointerEvents: "none",
  mixBlendMode: "difference",
  cursor: "none",
  transition: "transform 0.2s ease",
};

export const hoveringStyle: React.CSSProperties = {
  transform: "scale(5)",
};
