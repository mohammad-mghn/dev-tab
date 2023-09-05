import React from "react";

type props = {
  label: string;
  name: string;
  delay?: string;
  placeholder: string;
};
function Input({ label, name, placeholder, delay }: props) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-light text-[0.95rem]"
        data-aos="fade-right"
        data-aos-delay={delay}
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        className="my-4 py-3 px-7 w-full sm:w-[25rem] text-[0.9rem] bg-secondary placeholder:text-light placeholder:opacity-25 placeholder:text-[0.8rem] rounded-md"
        placeholder={placeholder}
        data-aos="fade-left"
        data-aos-delay={delay}
      />
    </div>
  );
}

export default Input;
