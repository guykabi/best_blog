"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IMainTitleProps } from "@/app/types/ui.types";

const MainTitle = ({ text, path, size = "base" }: IMainTitleProps) => {
  const { push } = useRouter();

  const handleRedirect = () => {
    if (!path) return;
    push(path);
  };

  return (
    <div>
      <header
        className={`flex justify-center items center mx-auto p-4 font-bold cursor-pointer text-${size}`}
        onClick={handleRedirect}
      >
        {text}
      </header>
    </div>
  );
};

export default MainTitle;
