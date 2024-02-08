import React from "react";
import CursorOne from "./CursorOne";
import CursorTwo from "./CursorTwo";
import CursorThree from "./CursorThree";

interface CustomCursorProps {
  type: "one" | "two" | "three";
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ type }) => {
  switch (type) {
    case "one":
      return <CursorOne />;
    case "two":
      return <CursorTwo />;
    case "three":
      return <CursorThree />;
    default:
      return null; // or <CursorOne /> as a default cursor, for example
  }
};

// Optionally, export individual cursors for direct import, if needed
export { CursorOne, CursorTwo, CursorThree };
