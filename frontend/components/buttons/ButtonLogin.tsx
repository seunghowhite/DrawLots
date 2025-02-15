"use client";

import ArrowIcon from "@/public/svg/ArrowIcon";

interface IButtonLogin {
  className?: string;
  text: string;
}

export default function ButtonLogin({ className, text }: IButtonLogin) {
  return (
    <button
      onClick={() => {}}
      className={`h-[50px] w-full max-w-[70%] rounded-[15px] border-2 border-mbBlue text-mbBlue ${className}
        hover:focus:shadow-outline-blue-500 focus:shadow-outline-blue-500 group flex items-center justify-center gap-2.5 text-xl
        font-bold hover:border-mbOrange hover:bg-mbOrange hover:text-white hover:shadow-xl`}
    >
      {text}
      <ArrowIcon />
    </button>
  );
}
