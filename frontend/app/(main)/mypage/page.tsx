"use client";

import { useState } from "react";

import Image from "next/image";

import MyCoupon from "@/components/coupons/MyCoupon";
import Header from "@/components/header/Header";
import Camera from "@/public/svg/camera.svg";
import Profile from "@/public/svg/profile-none.svg";

export default function MyPage() {
  const [isSetting, setIsSetting] = useState(false);

  return (
    <>
      <Header text={"마이페이지"} />
      <div className={"px-6"}>
        <div className="flex h-24 items-center justify-between rounded-2xl bg-white px-3 shadow-md">
          <div className={"flex items-center gap-4"}>
            <Image
              src={Profile}
              alt={"profile"}
            />
            <h1 className="text-2xl font-bold">kevin</h1>
          </div>

          <button
            onClick={() => {
              setIsSetting(true);
            }}
            className={`text-lg font-bold ${isSetting && "hidden"}`}
          >
            계정/ 정보관리
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-3 overflow-y-auto rounded-2xl bg-white px-3 py-4 pb-6 pl-5 shadow-md">
          {isSetting ? (
            <>
              <div className="flex items-center justify-between gap-2">
                <p className="text-lg font-bold">정보관리</p>
                <div className="flex gap-2">
                  <button className="rounded-lg border border-gray-400 px-4 py-1 text-gray-700 transition-all hover:border-gray-600 hover:bg-gray-100">
                    저장
                  </button>
                  <button
                    onClick={() => {
                      setIsSetting(false);
                    }}
                    className="rounded-lg border border-gray-400 px-4 py-1 text-gray-700 transition-all hover:border-gray-600 hover:bg-gray-100"
                  >
                    취소
                  </button>
                </div>
              </div>
              <div className="mt-2 flex h-[calc(100vh-400px)] flex-col gap-3 overflow-y-auto px-2">
                <div className={"flex justify-center"}>
                  <div className="flex h-32 w-32 cursor-pointer justify-center rounded-full border-2 border-gray-500 bg-gray-100">
                    <Image
                      src={Camera}
                      alt="Camera"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-lg font-semibold text-gray-700">이름</p>
                  <div
                    className="flex w-full items-center gap-2 rounded-[15px] border-2 border-gray-500 px-4 py-2 transition-all
                      focus-within:border-mbBlue focus-within:ring-2 focus-within:ring-mbBlue"
                  >
                    <input
                      type={"text"}
                      className="h-[30px] w-full flex-1 border-none bg-transparent text-gray-700 placeholder-gray-400 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-lg font-semibold text-gray-700">부서</p>
                  <div
                    className="flex w-full items-center gap-2 rounded-[15px] border-2 border-gray-500 px-4 py-2 transition-all
                      focus-within:border-mbBlue focus-within:ring-2 focus-within:ring-mbBlue"
                  >
                    <input
                      type={"text"}
                      className="h-[30px] w-full flex-1 border-none bg-transparent text-gray-700 placeholder-gray-400 outline-none"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between gap-2 pr-6">
                <p className={"text-lg font-bold"}>나의 뽑기</p>
                <select>
                  <option>남은뽑기</option>
                  <option>사용내역</option>
                  <option>승인현황</option>
                </select>
              </div>
              <div className="mt-2 flex h-[calc(100vh-400px)] flex-col gap-3 overflow-y-auto">
                <MyCoupon />
                <MyCoupon />
                <MyCoupon />
                <MyCoupon />
                <MyCoupon />
                <MyCoupon />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
