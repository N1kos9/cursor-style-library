import { useRef, useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const lerp = (start: number, end: number, alpha: number) =>
  (1 - alpha) * start + alpha * end;

// Set a default value for delay in the function parameters
export const useCursorDelay = (
  delay: number = 0,
  initialPosition: Position
) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const frame = useRef<number>(0);
  const targetPosition = useRef<Position>(initialPosition);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
      if (delay === 0) {
        // Immediate update for delay = 0
        setPosition(targetPosition.current);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [delay]); // Include delay in dependencies array to handle immediate update

  useEffect(() => {
    if (delay === 0) return; // Skip the lerp animation if delay is 0

    const updatePosition = () => {
      // Adjust alpha based on delay. With delay as 10, alpha should be minimum (more delay).
      // As delay approaches 0, alpha should increase, reducing the delay effect.
      // This maps delay from [0, 10] to alpha [1, 0.1] (inversely proportional)
      const alpha = 1 - delay * 0.09; // Adjust this formula as needed
      const newX = lerp(position.x, targetPosition.current.x, alpha);
      const newY = lerp(position.y, targetPosition.current.y, alpha);
      setPosition({ x: newX, y: newY });
      frame.current = requestAnimationFrame(updatePosition);
    };

    frame.current = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [position, delay]);

  return { position };
};
