import React from "react";

type Props = {
  title: string;
  value: string;
  description: string;
};

function Status({ title, description, value }: Props) {
  return (
    <div className="lg:pr-[4rem] mt-6">
      <h4 className="text-[1.5rem] font-medium ">{title}</h4>
      <div className="pb-3 mt-1 flex justify-between text-light text-[0.5rem] lg:text-[.9rem] border-b-2 border-[#6F6E6F]">
        <p>{description}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default Status;
