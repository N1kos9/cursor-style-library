import React from "react";
import CursorOne from "./CursorOne";
import CursorTwo from "./CursorTwo";
import CursorThree from "./CursorThree";

export const CustomCursor: React.FC<{ type: string; delay: number }> = ({
  type,
  delay,
}) => {
  // Clamp the delay value to be between 0 and 10
  const clampedDelay = Math.max(0, Math.min(delay, 10));

  switch (type) {
    case "one":
      return <CursorOne delay={clampedDelay} />;
    case "two":
      // If CursorTwo and CursorThree also need to use the delay, pass clampedDelay similarly
      return <CursorTwo delay={clampedDelay} />;
    case "three":
      return <CursorThree delay={clampedDelay} />;
    default:
      return null; // or a default cursor
  }
};
