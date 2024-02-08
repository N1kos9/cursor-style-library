import React, { useState, useEffect } from "react";
import { baseCursorStyle, hoveringStyle } from "../styles/styles";

export const CursorOne: React.FC = () => {
  const [cursorX, setCursorX] = useState<number>(0);
  const [cursorY, setCursorY] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
      const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
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
      }}
    />
  );
};

export default CursorOne;
