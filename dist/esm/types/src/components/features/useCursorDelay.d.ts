interface Position {
    x: number;
    y: number;
}
export declare const useCursorDelay: (delay: number | undefined, initialPosition: Position) => {
    position: Position;
};
export {};
