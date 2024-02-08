import React, { useState, useEffect } from "react";
import { baseCursorStyle } from "../styles/styles";

export const CursorThree: React.FC = () => {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        ...baseCursorStyle,
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        width: "35px",
        height: "35px",
        border: "2px solid white", // Specific style for CursorThree
      }}
    />
  );
};

export default CursorThree;
