import React from "react";
import { baseCursorStyle } from "../styles/styles";
import { useCursorDelay } from "./features/useCursorDelay"; // Make sure this path is correct

export const CursorThree: React.FC<{ delay: number }> = ({ delay }) => {
  // Use the hook for delayed position
  const { position: delayedPosition } = useCursorDelay(delay, { x: 0, y: 0 });

  return (
    <div
      style={{
        ...baseCursorStyle,
        position: "fixed",
        left: `${delayedPosition.x}px`,
        top: `${delayedPosition.y}px`,
        borderRadius: "50%",
        border: "2px solid white",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        width: "35px", // Ring size
        height: "35px",
        mixBlendMode: "difference",
        zIndex: 9999, // Ensure it's above other elements
        backgroundColor: "transparent", // Explicitly set to transparent
      }}
    />
  );
};

export default CursorThree;
