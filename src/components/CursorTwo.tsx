import React, { useEffect, useRef } from "react";
import { baseCursorStyle } from "../styles/styles";
import { useCursorDelay } from "./features/useCursorDelay"; // Ensure this path is correct

export const CursorTwo: React.FC<{ delay: number }> = ({ delay }) => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  // Use the hook for the delayed outline position
  const { position: delayedPosition } = useCursorDelay(delay, { x: 0, y: 0 });

  // Add an event listener for the dot to follow the cursor without delay
  useEffect(() => {
    const moveDot = (event: MouseEvent) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${event.clientX}px`;
        cursorDotRef.current.style.top = `${event.clientY}px`;
      }
    };

    // Listen to mousemove event to move the dot instantly with the cursor
    window.addEventListener("mousemove", moveDot);

    return () => {
      window.removeEventListener("mousemove", moveDot);
    };
  }, []);

  useEffect(() => {
    // This effect updates the outline position with delay
    if (cursorOutlineRef.current) {
      cursorOutlineRef.current.style.left = `${delayedPosition.x}px`;
      cursorOutlineRef.current.style.top = `${delayedPosition.y}px`;
    }
  }, [delayedPosition]);

  return (
    <>
      <div
        ref={cursorDotRef}
        style={{
          ...baseCursorStyle,
          width: "10px",
          height: "10px",
          // Additional styles for the dot
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999, // Ensure it's above other elements
        }}
      />
      <div
        ref={cursorOutlineRef}
        style={{
          ...baseCursorStyle,
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          border: "2px solid white",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
          zIndex: 9998, // Slightly below the dot to ensure dot is always visible
          backgroundColor: "transparent", // Explicitly set to transparent
          position: "fixed",
        }}
      />
    </>
  );
};

export default CursorTwo;
