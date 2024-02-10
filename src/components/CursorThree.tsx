import React, { useRef, useState, useEffect } from "react";
import { baseCursorStyle } from "../styles/styles";

export const CursorThree: React.FC = () => {
  const requestRef = useRef<number | null>(null);
  const cursorPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const moveCursor = (e: MouseEvent) => {
    cursorPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const followCursor = () => {
    const { x, y } = cursorPosRef.current;
    setCursorPos((prevPos) => {
      const dx = x - prevPos.x;
      const dy = y - prevPos.y;
      return {
        x: prevPos.x + dx * 0.1,
        y: prevPos.y + dy * 0.1,
      };
    });

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
    <div
      style={{
        ...baseCursorStyle,
        position: "fixed",
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        borderRadius: "50%",
        border: "2px solid white",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        width: "35px", // Ring size
        height: "35px",
        mixBlendMode: "difference",
        // Ensure a high z-index if needed to keep the cursor above other elements
        zIndex: 9999,
      }}
    />
  );
};

export default CursorThree;
