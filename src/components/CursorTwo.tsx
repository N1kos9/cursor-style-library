import React, { useState, useEffect, useRef } from "react";
import { baseCursorStyle } from "../styles/styles";

export const CursorTwo: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const cursorPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  const moveCursor = (e: MouseEvent) => {
    cursorPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const followCursor = () => {
    if (cursorDotRef.current && cursorOutlineRef.current) {
      const { x, y } = cursorPosRef.current;
      cursorDotRef.current.style.left = `${x}px`;
      cursorDotRef.current.style.top = `${y}px`;

      const outlineX = parseFloat(cursorOutlineRef.current.style.left || "0");
      const outlineY = parseFloat(cursorOutlineRef.current.style.top || "0");
      const dx = x - outlineX;
      const dy = y - outlineY;

      cursorOutlineRef.current.style.left = `${outlineX + dx * 0.1}px`;
      cursorOutlineRef.current.style.top = `${outlineY + dy * 0.1}px`;
    }

    requestRef.current = requestAnimationFrame(followCursor);
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    requestRef.current = requestAnimationFrame(followCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        style={{
          ...baseCursorStyle,
          width: "10px",
          height: "10px",
          // Additional styles for the dot
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
          zIndex: 9999, // Ensure it's above other elements
        }}
      />
    </>
  );
};

export default CursorTwo;
