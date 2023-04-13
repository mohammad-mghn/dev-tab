import React from "react";
import Social from "./social";

import TelegramIcon from "../../public/icons/telegram.svg";
import EmailIcon from "../../public/icons/email.svg";
import Input from "./input";

function Contact() {
  return (
    <div className="h-[40rem] flex flex-col sm:flex-row sm:justify-between gap-y-14 ">
      <div className="">
        <h1 className="text-gradient font-medium text-[2.5rem]">Get in touch</h1>

        <p className="mt-2 sm:max-w-[25rem] leading-7 text-light">
          Need a website to add ? Looking for a partner or work together ? Reach out through the form and I&apos;ll back
          to you i the 48 hours.
        </p>

        <div className="mt-10 flex flex-col gap-y-3">
          <Social image={EmailIcon} text="vito.mohagheghian@gmail.com" />
          <Social image={TelegramIcon} text="Hereisvito" />
        </div>
      </div>

      <form className="">
        <Input label="Your name" name="name" placeholder="e.g: Vito Mohagheghian" />
        <Input label="Your E-mail" name="email" placeholder="e.g: vito.mohagheghian@gmail.com" />
        <Input label="Your Subject" name="subject" placeholder="e.g: have an idea for dashboard" />

        <div className="flex flex-col">
          <label htmlFor={"textarea"} className="text-light">
            Text
          </label>
          <textarea
            id="textarea"
            placeholder="e.g: I made a pull request..."
            className="my-4 py-3 px-7 w-full sm:w-[25rem] min-h-[8rem] max-h-[12rem] text-[0.9rem] bg-secondary placeholder:text-light placeholder:opacity-25 placeholder:text-[0.8rem] rounded-md"
          />
        </div>
        <button className="mt-3 px-4 py-3 bg-gradient rounded-full text-primary text-[0.9rem] font-semibold sm:font-medium">
          SUBMIT NOW
        </button>
      </form>
    </div>
  );
}

export default Contact;
