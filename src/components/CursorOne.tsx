import React, { useEffect, useState } from "react";
import { baseCursorStyle, hoveringStyle } from "../styles/styles";
import { useCursorDelay } from "./features/useCursorDelay";

export const CursorOne: React.FC<{ delay: number }> = ({ delay }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Adjusted to destructure the returned object to get the position directly
  const { position } = useCursorDelay(delay, { x: 0, y: 0 });

  useEffect(() => {
    // Function to check if the cursor is hovering over interactive elements
    const checkHovering = () => {
      const elemBelow = document.elementFromPoint(position.x, position.y);
      const hoverableElements = ["A", "BUTTON", "INPUT", "TEXTAREA"];
      setIsHovering(
        elemBelow !== null && hoverableElements.includes(elemBelow.tagName)
      );
    };

    checkHovering();

    // This effect should rerun whenever the position changes, ensuring the cursor's hover state is updated accordingly
  }, [position.x, position.y]); // Updated to specifically listen for changes in position.x and position.y

  return (
    <div
      style={{
        ...baseCursorStyle,
        ...(isHovering ? hoveringStyle : {}),
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "fixed", // Ensuring position is fixed for the custom cursor
        pointerEvents: "none", // Ensure the custom cursor doesn't interfere with elements below it
      }}
    />
  );
};

export default CursorOne;
