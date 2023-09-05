import React from "react";

type Props = {
  title: string;
  value: string;
  description: string;
};

function Status({ title, description, value }: Props) {
  return (
    <div className="lg:pr-[4rem] mt-6">
      <h4 className="text-[1.5rem] font-medium" data-aos="fade-right">
        {title}
      </h4>
      <div className="pb-3 mt-1 flex justify-between text-light text-[0.5rem] lg:text-[.9rem] border-b-2 border-[#6F6E6F]">
        <p data-aos="fade-right" data-aos-delay="100">
          {description}
        </p>
        <p data-aos="fade-left" data-aos-delay="200">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Status;
