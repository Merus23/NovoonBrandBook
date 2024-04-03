import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <div className="w-full border-y-[0.5px] border-black ">
      {/* Need setup the letter spacing */}
      <h1 className="text-sm font-semibold p-3 text-start uppercase">
        {title}
      </h1>
    </div>
  );
};

export default Title;
