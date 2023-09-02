import React from "react";
import Image, { StaticImageData } from "next/image";

import { StarsIcon } from "@/assets";

type Props = {
  text: string;
  name: string;
  position: string;
  image: StaticImageData;
};

function Comment({ text, image, name, position }: Props) {
  return (
    <div className="p-5 mx-auto md:mx-0 w-[90%] md:w-[20rem] h-fit rounded-md bg-secondary">
      <Image src={StarsIcon} alt="5 stars" className="w-[7rem]" />

      <p className="mt-6 text-[.9rem] text-light">{text}</p>
      <div className="mt-4 flex items-center gap-x-2">
        <Image src={image} alt={name} className="w-10" />
        <div className="flex-1">
          <h6 className="text-[.9rem] text-lighter font-medium w-[13rem] overflow-hidden whitespace-nowrap text-ellipsis">
            {name}
          </h6>
          <p className="text-light text-[0.85rem] w-[13rem] overflow-hidden whitespace-nowrap text-ellipsis">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
