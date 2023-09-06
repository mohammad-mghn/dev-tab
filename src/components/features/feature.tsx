import React from "react";
import Image from "next/image";

import { StarIcon } from "@/constants/icons";

function Feature({ title }: { title: string }) {
  return (
    <div className="px-[2.5rem] flex items-center gap-x-[2.5rem]">
      <h2 className="font-extrabold text-md lg:text-20 whitespace-nowrap">
        {title}
      </h2>
      <Image src={StarIcon} alt="" />
    </div>
  );
}

export default Feature;
