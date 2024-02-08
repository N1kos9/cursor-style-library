import React from "react";
import CursorOne from "./CursorOne";
import CursorTwo from "./CursorTwo";
import CursorThree from "./CursorThree";
interface CustomCursorProps {
    type: "one" | "two" | "three";
}
export declare const CustomCursor: React.FC<CustomCursorProps>;
export { CursorOne, CursorTwo, CursorThree };
