import React from "react";

type INoData = {
  text?: string;
};

const NoData = ({ text }: INoData) => {
  return (
    <>
      <div className="w-full h-20 flex items-center justify-center font-bold">
        {text || "No Data..."}
      </div>
    </>
  );
};

export default NoData;
