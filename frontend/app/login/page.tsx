import Image from "next/image";

import ButtonLogin from "@/components/buttons/ButtonLogin";
import InputLogin from "@/components/inputs/InputLogin";
import MegabridgeLogo from "@/public/svg/megabridge-logo-icon.svg";

export default function LoginPage() {
  return (
    <div className={"flex flex-col items-center"}>
      <div className="mt-32 flex flex-col items-center justify-center gap-2">
        <Image
          src={MegabridgeLogo}
          alt={"Megabridge Logo"}
          className="h-auto w-auto"
        />
        <h1 className="mt-4 text-center text-3xl font-extrabold">뽑기 현황판</h1>
        <p className="text-center text-darkGary">메가브릿지 이메일과 동일합니다</p>
      </div>
      <div className="mt-20 flex w-full flex-col items-center gap-4">
        <InputLogin
          className={""}
          type={"id"}
        />
        <InputLogin
          className={""}
          type={"password"}
        />
      </div>

      <div className={`w-full max-w-[70%] ${false ? "opacity-100" : "opacity-0"}`}>
        <p className="text-mbOrange">warningcode</p>
      </div>

      <ButtonLogin
        text={`Login`}
        className={"mt-20"}
      />
    </div>
  );
}
