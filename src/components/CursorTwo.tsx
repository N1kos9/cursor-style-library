import React, { useState, useEffect, useRef } from "react";
import { baseCursorStyle } from "../styles/styles";

export const CursorTwo: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const followCursor = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${cursorPos.x}px`;
        cursorDotRef.current.style.top = `${cursorPos.y}px`;
      }
    };

    const animationFrame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos]);

  return (
    <div
      ref={cursorDotRef}
      style={{
        ...baseCursorStyle,
        width: "10px", // Adjust for CursorTwo specific style
        height: "10px", // Adjust for CursorTwo specific style
      }}
    />
  );
};

export default CursorTwo;
