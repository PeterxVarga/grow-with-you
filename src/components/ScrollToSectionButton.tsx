"use client";

import React from "react";

type ScrollToSectionButtonProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  targetId: string;
};

export function ScrollToSectionButton({
  children,
  className,
  id,
  targetId,
}: ScrollToSectionButtonProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const centeredTop = targetTop - (window.innerHeight - target.offsetHeight) / 2;

    window.scrollTo({
      top: centeredTop - 72,
      behavior: "smooth",
    });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <button id={id} type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
