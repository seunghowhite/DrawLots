import Image from "next/image";

import CheckPassword from "@/public/svg/check-password.svg";
import Password from "@/public/svg/password.svg";
import User from "@/public/svg/user.svg";

interface IInputLogin {
  className?: string;
  placeHolder?: string;
  type: "id" | "password" | "checkPassword";
}

export default function InputLogin({ type, placeHolder }: IInputLogin) {
  const Icon = type === "id" ? User : type === "password" ? Password : CheckPassword;
  const maxLength = type === "id" ? 35 : 12;
  return (
    <div className="flex w-full max-w-[70%] items-center gap-2 rounded-[15px] border-2 border-mbBlue px-4 focus-within:border-mbOrange">
      <Image
        src={Icon}
        alt={`${type} logo`}
      />
      <input
        type={type === "id" ? "text" : "password"}
        placeholder={placeHolder}
        className="h-[50px] w-full flex-1 border-none outline-none"
        maxLength={maxLength}
      />
    </div>
  );
}
