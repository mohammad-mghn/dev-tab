import Image from "next/image";
import React from "react";
import Article from "./article";

import { Question } from "../../type";

import StatckoverflowIcon from "../../public/icons/stackoverflow.svg";

function Stackoverflow({ questions }: { questions: Question[] }) {
  return (
    <>
      <div className="h-[30rem] lg:h-full w-full lg:w-[30%] bg-secondary-glass rounded-lg border-glass overflow-hidden">
        <header className="flex gap-x-2 items-center">
          <Image src={StatckoverflowIcon} alt="stackoverflow icon" className="w-[3.25rem]" />

          <h1 className="text-lightgray text-[0.9rem]">Stackoverflow</h1>
        </header>

        <div className="overflow-y-auto overflow-x-hidden h-full scrollbar-dark">
          {questions.map((item: Question, index: number) => (
            <Article item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Stackoverflow;
