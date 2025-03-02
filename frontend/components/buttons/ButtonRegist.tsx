import Image from "next/image";
import Link from "next/link";

import RegistIcon from "@/public/svg/regist.svg";

export default function ButtonRegist() {
  return (
    <Link
      href="/regist"
      className="flex h-24 w-full items-center rounded-xl bg-[#426DB5] p-4 text-white transition-transform duration-200 ease-in-out
        hover:-translate-y-1"
    >
      <Image
        src={RegistIcon}
        alt="regist-icon"
      />
      <p className="ml-6 text-3xl font-bold">뽑기등록하기</p>
    </Link>
  );
}
