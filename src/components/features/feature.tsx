import React from "react";
import Image from "next/image";

import Star from "../../public/icons/star.svg";

function Feature({ title }: { title: string }) {
  return (
    <div className="px-[2.5rem] flex items-center gap-x-[2.5rem]">
      <h2 className="font-extrabold text-md lg:text-20 whitespace-nowrap">{title}</h2>
      <Image src={Star} alt="" />
    </div>
  );
}

export default Feature;
