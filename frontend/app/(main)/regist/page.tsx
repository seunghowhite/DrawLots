"use client";

import { useState } from "react";

import Image from "next/image";

import Header from "@/components/header/Header";
import Camera from "@/public/svg/camera.svg";

export default function AgreePage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null); // 이미지 미리보기 상태

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 파일 선택
    if (file) {
      // 이미지 미리보기 업데이트
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // 미리보기 URL을 상태로 설정
      };
      reader.readAsDataURL(file); // 파일을 URL로 읽음
    }
  };

  const handleImageDelete = () => {
    setImagePreview(null); // 이미지 삭제
  };

  return (
    <div>
      <Header text={"뽑기 등록 신청서"} />
      <div className="px-6">
        {/* 이미지 업로드 영역 */}
        <div className="relative mb-6 flex justify-center">
          <label
            htmlFor="image-upload"
            className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 bg-gray-100"
          >
            {imagePreview ? (
              <div className="relative h-full w-full">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
                {/* 삭제 버튼 (X) */}
                <button
                  type="button"
                  onClick={handleImageDelete}
                  className="absolute right-0 top-0 rounded-full bg-white p-1 text-gray-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <Image
                src={Camera}
                alt="Camera"
                width={40}
                height={40}
              />
            )}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden" // input을 숨김
          />
        </div>

        <p className="mb-2 text-lg font-semibold text-gray-700">이름</p>
        <div
          className="mb-4 flex w-full items-center gap-2 rounded-[15px] border-2 border-gray-500 px-4 py-2 transition-all
            focus-within:border-mbBlue focus-within:ring-2 focus-within:ring-mbBlue"
        >
          <input
            type={"text"}
            className="h-[50px] w-full flex-1 border-none bg-transparent text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>

        <p className="mb-2 text-lg font-semibold text-gray-700">소속부서</p>
        <div
          className="mb-4 flex w-full items-center gap-2 rounded-[15px] border-2 border-gray-500 px-4 py-2 transition-all
            focus-within:border-mbBlue focus-within:ring-2 focus-within:ring-mbBlue"
        >
          <input
            type={"text"}
            className="h-[50px] w-full flex-1 border-none bg-transparent text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>

        <p className="mb-2 text-lg font-semibold text-gray-700">뽑기등수</p>
        <div
          className="mb-4 flex w-full items-center gap-2 rounded-[15px] border-2 border-gray-500 px-4 py-2 transition-all
            focus-within:border-mbBlue focus-within:ring-2 focus-within:ring-mbBlue"
        >
          <input
            type={"text"}
            className="h-[50px] w-full flex-1 border-none bg-transparent text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
