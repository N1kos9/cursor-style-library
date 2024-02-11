import React from "react";
import CursorOne from "./CursorOne";
import { CursorTwo } from "./CursorTwo"; // Ensure correct import if necessary
import CursorThree from "./CursorThree";

export const CustomCursor: React.FC<{
  type: string;
  delay?: number;
  size?: number;
  sizeDot?: number;
  sizeOutline?: number;
  bgColor?: string; // Assuming this is for CursorOne
  bgColorDot?: string; // New prop for CursorTwo's dot color
  bgColorOutline?: string; // New prop for CursorTwo's outline color
  useMixBlendDifference?: boolean;
}> = ({
  type,
  delay = 0, // Provide a default value for delay
  size,
  sizeDot,
  sizeOutline,
  bgColor,
  bgColorDot,
  bgColorOutline,
  useMixBlendDifference,
}) => {
  const clampedDelay = Math.max(0, Math.min(delay, 1000)); // Adjusted max delay based on realistic expectations

  switch (type) {
    case "one":
      return (
        <CursorOne
          delay={clampedDelay}
          size={size}
          bgColor={bgColor}
          useMixBlendDifference={useMixBlendDifference}
        />
      );
    case "two":
      return (
        <CursorTwo
          delay={clampedDelay}
          sizeDot={sizeDot}
          sizeOutline={sizeOutline}
          bgColorDot={bgColorDot} // Pass bgColorDot to CursorTwo
          bgColorOutline={bgColorOutline} // Pass bgColorOutline to CursorTwo
          useMixBlendDifference={useMixBlendDifference} // Pass useMixBlendDifference to CursorTwo
        />
      );
    case "three":
      // Update CursorThree if necessary
      return (
        <CursorThree
          delay={clampedDelay}
          size={size}
          bgColor={bgColor}
          useMixBlendDifference={useMixBlendDifference}
        />
      );
    default:
      return null;
  }
};

export default CustomCursor;
