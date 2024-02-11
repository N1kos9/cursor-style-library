import React from "react";
import { baseCursorStyle } from "../styles/styles";
import { useCursorDelay } from "./features/useCursorDelay";

export const CursorThree: React.FC<{
  delay?: number; // Make delay optional
  size?: number;
  bgColor?: string; // Background color for the cursor
  useMixBlendDifference?: boolean; // Option to enable or disable mixBlendMode difference
}> = ({
  delay,
  size = 35, // Default size
  bgColor = "white", // Default background color
  useMixBlendDifference = true, // mixBlendMode difference enabled by default
}) => {
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
        border: `2px solid ${bgColor}`, // Use dynamic border color
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        width: `${size}px`, // Adjustable size
        height: `${size}px`, // Maintain aspect ratio
        mixBlendMode: useMixBlendDifference ? "difference" : "normal", // Dynamically set mixBlendMode
        zIndex: 9999,
        backgroundColor: "transparent",
      }}
    />
  );
};

export default CursorThree;
