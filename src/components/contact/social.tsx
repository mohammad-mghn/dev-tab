import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  delay?: string;
  image: StaticImageData;
};

function Social({ image, text, delay }: Props) {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src={image}
        alt="text"
        className="w-8"
        data-aos="fade-right"
        data-aos-delay={delay}
      />

      <h2
        className="text-lighter text-[0.9rem]"
        data-aos="fade-left"
        data-aos-delay={delay}
      >
        {text}
      </h2>
    </div>
  );
}

export default Social;
