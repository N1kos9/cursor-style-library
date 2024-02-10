import React, { useState, useEffect } from "react";
import { baseCursorStyle, hoveringStyle } from "../styles/styles";

export const CursorOne: React.FC = () => {
  const [cursorX, setCursorX] = useState<number>(0);
  const [cursorY, setCursorY] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Use clientX and clientY for mouse position relative to the viewport
      setCursorX(clientX);
      setCursorY(clientY);
      const elemBelow = document.elementFromPoint(clientX, clientY);
      const hoverableElements = ["A", "BUTTON", "INPUT"];
      setIsHovering(
        elemBelow !== null && hoverableElements.includes(elemBelow.tagName)
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      style={{
        ...baseCursorStyle,
        ...(isHovering ? hoveringStyle : {}),
        left: `${cursorX}px`,
        top: `${cursorY}px`,
        // Ensure 'position: fixed' is included either here or in baseCursorStyle
        // If already in baseCursorStyle, this line can be omitted
        position: "fixed",
      }}
    />
  );
};

export default CursorOne;
