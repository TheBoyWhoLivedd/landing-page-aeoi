import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";

import { Icons } from "@/lib/icons";
import { AnimatedBeam } from "./animated-beam";

const Box = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded border-2 border-border bg-body p-4",
        "size-16 sm:size-20 md:size-24",
        className
      )}
    >
      {children}
    </div>
  );
});

Box.displayName = "Box";

export function IntegrationBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const outputRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const middleRef = useRef<HTMLDivElement>(null);

  const getRandomBool = () => Math.random() >= 0.5;

  return (
    <div
      className={cn(
        "fixed inset-0 flex w-full items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="mx-4 flex w-full flex-row items-stretch justify-between gap-20 xl:max-w-[calc(-450px+100vw)]">
        <div className="flex flex-col justify-center gap-8">
          {inputRefs.map((ref, index) => (
            <Box ref={ref} key={`input-${index}`}>
              {React.createElement(
                Icons[`input${index + 1}` as keyof typeof Icons]
              )}
            </Box>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <Box ref={middleRef} className="size-20 bg-gray-200">
            <Icons.middle />
          </Box>
        </div>
        <div className="flex flex-col justify-center gap-8">
          {outputRefs.map((ref, index) => (
            <Box ref={ref} key={`output-${index}`}>
              {React.createElement(
                Icons[`output${index + 1}` as keyof typeof Icons]
              )}
            </Box>
          ))}
        </div>
      </div>

      {inputRefs.map((inputRef, index) => (
        <AnimatedBeam
          key={`beam-in-${index}`}
          containerRef={containerRef}
          fromRef={inputRef}
          toRef={middleRef}
          reverse={getRandomBool()}
        />
      ))}

      {outputRefs.map((outputRef, index) => (
        <AnimatedBeam
          key={`beam-out-${index}`}
          containerRef={containerRef}
          fromRef={outputRef}
          toRef={middleRef}
          reverse={getRandomBool()}
        />
      ))}
    </div>
  );
}
