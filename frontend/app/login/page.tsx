"use client";

import { useState } from "react";

import Image from "next/image";

import ButtonLogin from "@/components/buttons/ButtonLogin";
import InputLogin from "@/components/inputs/InputLogin";
import MegabridgeLogo from "@/public/svg/megabridge-logo-icon.svg";

export default function LoginPage() {
  const [isFirst, setIsFirst] = useState(false);
  const [warningText, setWarningText] = useState("");

  const loginHandler = () => {
    setIsFirst(true);
  };
  return (
    <div className={"flex flex-col items-center"}>
      <div className="mt-32 flex flex-col items-center justify-center gap-2">
        <Image
          src={MegabridgeLogo}
          alt={"Megabridge Logo"}
          className="h-auto w-auto"
        />
        <h1 className="mt-4 text-center text-3xl font-extrabold">뽑기 현황판</h1>
        <p className="text-center text-darkGary">{isFirst ? " 처음 로그인하셨군요!" : "Welcom!"}</p>
        <p className="text-center text-darkGary">
          {isFirst ? "비밀번호 설정이 필요합니다" : "메가브릿지 이메일과 동일합니다"}
        </p>
      </div>
      <div className="mt-20 flex w-full flex-col items-center gap-4">
        {isFirst ? (
          <>
            <InputLogin
              className={""}
              type={"password"}
              placeHolder={"12자 이하"}
            />
            <InputLogin
              className={""}
              type={"checkPassword"}
              placeHolder={"비밀번호 확인"}
            />
          </>
        ) : (
          <>
            <InputLogin
              className={""}
              type={"id"}
              placeHolder={"id @ meagabridge.co.kr"}
            />
            <InputLogin
              className={""}
              type={"password"}
              placeHolder={"12자 이하"}
            />
          </>
        )}
      </div>

      <div className={`w-full max-w-[70%] ${warningText ? "opacity-100" : "opacity-0"} `}>
        <p className="text-mbOrange">warningcode</p>
      </div>

      <ButtonLogin
        text={`${isFirst ? "Check" : "Login"}`}
        className={"mt-20"}
        onClick={loginHandler}
      />
    </div>
  );
}
