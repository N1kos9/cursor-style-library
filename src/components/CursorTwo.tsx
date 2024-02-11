import React, { useEffect, useRef } from "react";
import { useCursorDelay } from "./features/useCursorDelay";

export const CursorTwo: React.FC<{
  delay?: number; // Make delay optional
  size?: number;
  sizeDot?: number;
  sizeOutline?: number;
  bgColorDot?: string;
  bgColorOutline?: string;
  useMixBlendDifference?: boolean;
}> = ({
  delay,
  size,
  sizeDot = size || 10, // Default size for dot
  sizeOutline = size || 45, // Default size for outline
  bgColorDot = "white", // Default background color for dot
  bgColorOutline = "white", // Default background color for outline
  useMixBlendDifference = true, // Default mix blend mode to true
}) => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  const { position: delayedPosition } = useCursorDelay(delay, { x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${event.clientX}px`;
        cursorDotRef.current.style.top = `${event.clientY}px`;
        cursorDotRef.current.style.transform = "translate(-50%, -50%)"; // Ensure dot is centered
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    if (cursorOutlineRef.current) {
      cursorOutlineRef.current.style.left = `${delayedPosition.x}px`;
      cursorOutlineRef.current.style.top = `${delayedPosition.y}px`;
      cursorOutlineRef.current.style.transform = "translate(-50%, -50%)"; // Ensure outline is centered
    }
  }, [delayedPosition]);

  const mixBlendModeValue = useMixBlendDifference ? "difference" : "normal";

  return (
    <>
      <div
        ref={cursorDotRef}
        style={{
          width: `${sizeDot}px`,
          height: `${sizeDot}px`,
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          backgroundColor: bgColorDot,
          borderRadius: "50%",
          mixBlendMode: mixBlendModeValue,
        }}
      />
      <div
        ref={cursorOutlineRef}
        style={{
          width: `${sizeOutline}px`,
          height: `${sizeOutline}px`,
          borderRadius: "50%",
          border: `2px solid ${bgColorOutline}`,
          pointerEvents: "none",
          mixBlendMode: mixBlendModeValue,
          zIndex: 9998,
          backgroundColor: "transparent",
          position: "fixed",
        }}
      />
    </>
  );
};

export default CursorTwo;
