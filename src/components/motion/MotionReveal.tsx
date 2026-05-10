"use client";

import React, { useEffect, useRef } from "react";

type MotionVariant = "soft" | "hero" | "cards" | "media" | "footer";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  variant?: MotionVariant;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  id,
  variant = "soft",
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");

    if (reducedMotion.matches || mobile.matches) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    element.dataset.motionActive = "true";
    element.dataset.motionVisible = "false";

    const reveal = () => {
      element.dataset.motionVisible = "true";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.88 && rect.bottom > 0;

        if (isInView) {
          reveal();
          return;
        }

        observer.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      observer.disconnect();
      element.dataset.motionActive = "false";
      element.dataset.motionVisible = "true";
    };
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      data-motion-active="false"
      data-motion-visible="true"
      data-motion-variant={variant}
      style={{ "--motion-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
