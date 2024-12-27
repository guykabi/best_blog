"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IButton } from "@/app/types/ui.types";

export const Button = ({
  text,
  path,
  onAction,
  isLoading,
  Icon,
  type,
  disabled,
  borderBottom,
}: IButton) => {
  const router = useRouter();

  const handleNavigation = () => {
    if (!path) return;
    router.push(path);
  };

  const handleAction = () => {
    if (!onAction) return;
    return onAction();
  };

  return (
    <>
      <button
        className={`flex items-center justify-center font-bold ${
          borderBottom ? "border-b-2 border-b-current" : ""
        } hover:text-primary-blur/70 transition duration-300 ease-in-out`}
        role="button"
        onClick={path ? handleNavigation : handleAction}
        type={type}
        disabled={disabled}
      >
        {!isLoading && text?.length ? text : Icon ? Icon : "Loading..."}
      </button>
    </>
  );
};
