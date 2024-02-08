import React from 'react';

declare const CursorOne: React.FC;

declare const CursorTwo: React.FC;

declare const CursorThree: React.FC;

interface CustomCursorProps {
    type: "one" | "two" | "three";
}
declare const CustomCursor: React.FC<CustomCursorProps>;

export { CursorOne, CursorThree, CursorTwo, CustomCursor };
