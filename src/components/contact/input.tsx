import React from "react";

function Input({ label, name, placeholder }: { label: string; name: string; placeholder: string }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-light text-[0.95rem]">
        {label}
      </label>
      <input
        type="text"
        id={name}
        className="my-4 py-3 px-7 w-full sm:w-[25rem] text-[0.9rem] bg-secondary placeholder:text-light placeholder:opacity-25 placeholder:text-[0.8rem] rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
