"use client";

import React from "react";
import { useWaitlist } from "./WaitlistProvider";

type WaitlistButtonProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function WaitlistButton({ children, className, id }: WaitlistButtonProps) {
  const { openWaitlist } = useWaitlist();

  return (
    <button id={id} type="button" className={className} onClick={openWaitlist}>
      {children}
    </button>
  );
}
