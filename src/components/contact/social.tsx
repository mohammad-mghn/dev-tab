import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  text: string;
};

function Social({ image, text }: Props) {
  return (
    <div className="flex items-center gap-x-3">
      <Image src={image} alt="text" className="w-8" />

      <h2 className="text-lighter text-[0.9rem]">{text}</h2>
    </div>
  );
}

export default Social;
