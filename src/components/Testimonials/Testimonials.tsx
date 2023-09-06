import React from "react";

import Comment from "./comment";

import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
} from "@/constants//avatars";

function Testimonials() {
  return (
    <section className="flex items-center flex-col">
      <h1
        className="font-medium text-[1.75rem] md:text-[2.5rem] text-center"
        data-aos="zoom-in-down"
      >
        <span className="text-gradient font-semibold">Client</span> Testimonials
      </h1>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 gap-y-6">
          <Comment
            text="Great extension! All the info from the sources I like he fluff I don't need!"
            image={Avatar1}
            name="Vito Mohagheghian"
            position="Front-end Dev"
          />
          <Comment
            text="Great extension! All the info from the sources I like to read, none of the fluff I don't need!"
            image={Avatar2}
            name="Vito Mohagheghian"
            position="Front-end Dev"
          />
          <Comment
            text="Great extension! All the info from the sources I like to read, none of the fluff  extension! All the info from the sources I like to read, none of the fl I don't need!"
            image={Avatar3}
            name="Vito Mohagheghian"
            position="Front-end Dev"
          />
          <Comment
            text="Great extension! All the info from the sources I like to read, none of  I like to read, none of  I like to read, none of the fluff I don't need!"
            image={Avatar4}
            name="Vito Mohagheghian"
            position="Front-end Dev"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-6">
          <Comment
            text="Great extension! All the info from the sources I like to read, none of the fluff I don't need!"
            image={Avatar5}
            name="Vito Mohagheghian"
            position="Front-end Dev"
          />
          <Comment
            text="Great extension! All the info  extension! All of the fl  extension! All the info from the sources I like to read, none of the fl from the sources I like to read, none of the fluff I don't need!"
            image={Avatar6}
            name="Vito Mohagheghian"
            position="Front-end Dev"
          />
          <Comment
            text="Great extension! All the info from the sources I like to read, none of the fluff I don't need!"
            image={Avatar1}
            name="Vito Mohagheghian"
            position="Front-end Dev"
          />
          <Comment
            text="Great extension! All the info from the don't need!"
            image={Avatar2}
            name="Vito Mohagheghian"
            position="Front-end Dev"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
