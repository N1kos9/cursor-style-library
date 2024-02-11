import React from 'react';

declare const CursorOne: React.FC<{
    delay?: number;
    size?: number;
    bgColor?: string;
    useMixBlendDifference?: boolean;
}>;

declare const CursorTwo: React.FC<{
    delay?: number;
    size?: number;
    sizeDot?: number;
    sizeOutline?: number;
    bgColorDot?: string;
    bgColorOutline?: string;
    useMixBlendDifference?: boolean;
}>;

declare const CursorThree: React.FC<{
    delay?: number;
    size?: number;
    bgColor?: string;
    useMixBlendDifference?: boolean;
}>;

declare const CustomCursor: React.FC<{
    type: string;
    delay?: number;
    size?: number;
    sizeDot?: number;
    sizeOutline?: number;
    bgColor?: string;
    bgColorDot?: string;
    bgColorOutline?: string;
    useMixBlendDifference?: boolean;
}>;

export { CursorOne, CursorThree, CursorTwo, CustomCursor };
