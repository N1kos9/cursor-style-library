import React, { useEffect, useState } from "react";
import { useCursorDelay } from "./features/useCursorDelay"; // Adjust import path as needed

export const CursorOne: React.FC<{
  delay?: number; // Make delay optional
  size?: number;
  bgColor?: string;
  useMixBlendDifference?: boolean;
}> = ({
  delay,
  size = 20, // Default size
  bgColor = "white", // Default background color set to white
  useMixBlendDifference = true, // Option to enable or disable mix blend mode
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { position } = useCursorDelay(delay, { x: 0, y: 0 });

  useEffect(() => {
    const updateHoverState = (event: MouseEvent) => {
      const hoverableElements = ["A", "BUTTON", "INPUT", "TEXTAREA"];
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      setIsHovering(
        !!elemBelow && hoverableElements.includes(elemBelow.tagName)
      );
    };

    document.addEventListener("mousemove", updateHoverState);
    return () => document.removeEventListener("mousemove", updateHoverState);
  }, []);

  const cursorStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    position: "fixed",
    left: `${position.x}px`,
    top: `${position.y}px`,
    pointerEvents: "none",
    transform: `translate(-50%, -50%)${isHovering ? " scale(5)" : ""}`,
    transition: "transform 0.2s ease",
    backgroundColor: bgColor,
    mixBlendMode: useMixBlendDifference ? "difference" : "normal",
    zIndex: 9999, // Ensure it's above most elements
  };

  return <div style={cursorStyle} />;
};

export default CursorOne;
