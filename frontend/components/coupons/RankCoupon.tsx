import Image from "next/image";

import test from "@/public/jpg/profile-test.jpeg";

export default function RankCoupon() {
  return (
    <div className={"mr-5 flex h-56 items-center gap-4 rounded-xl bg-gray-200 p-4"}>
      <div className="flex items-end font-extrabold text-mbBlue">
        <p className={"mr-2 text-8xl"}>5</p>
        <p>th</p>
      </div>
      <div className="flex w-full flex-col gap-2 text-darkBlue">
        <div className={"flex items-end gap-2"}>
          <div className="h-10 w-10">
            <Image
              src={test}
              alt={"profile"}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className={"text-xl font-bold"}>Kevin</p>
        </div>
        <div className={"flex flex-wrap text-sm"}>
          <p className={""}>1등 연차 1개/</p>
          <p className={""}>2등 연차 1개/</p>
          <p className={""}>3등 연차 1개/</p>
          <p className={""}>4등 연차 1개/</p>
          <p className={""}>5등 연차 1개/</p>
          <p className={""}>6등 연차 1개</p>
        </div>
      </div>
    </div>
  );
}
