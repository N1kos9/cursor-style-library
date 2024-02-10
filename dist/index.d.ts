import React from 'react';

declare const CursorOne: React.FC<{
    delay: number;
}>;

declare const CursorTwo: React.FC<{
    delay: number;
}>;

declare const CursorThree: React.FC<{
    delay: number;
}>;

declare const CustomCursor: React.FC<{
    type: string;
    delay: number;
}>;

export { CursorOne, CursorThree, CursorTwo, CustomCursor };
