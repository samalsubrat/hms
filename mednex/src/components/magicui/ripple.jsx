import React from "react";

import { cn } from "@/lib/utils";

const Ripple = React.memo(function Ripple({
  mainCircleSize = 180,
  mainCircleOpacity = 0.24,
  numCircles = 10,
  className
}) {
  return (
    (<div
      className={cn(
        "absolute inset-0 ",
        className
      )}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 200;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 10 + i * 10;

        return (
          (<div
            key={i}
            className={`absolute animate-ripple rounded-full bg-foreground/20 border [--i:${i}]`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)"
              }
            } />)
        );
      })}
    </div>)
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
