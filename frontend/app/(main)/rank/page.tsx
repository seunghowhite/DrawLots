"use client";

import { useEffect, useRef, useState } from "react";

import RankCoupon from "@/components/coupons/RankCoupon";
import Header from "@/components/header/Header";

export default function RankPage() {
  const [selectedOption, setSelectedOption] = useState("전체");
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 상태

  // useRef에 명시적인 타입 지정
  const dropdownRef = useRef<HTMLDivElement | null>(null); // 드롭다운 메뉴 참조
  const buttonRef = useRef<HTMLButtonElement | null>(null); // 드롭다운 버튼 참조

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };

  // 외부 클릭 시 드롭다운 닫기
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // 드롭다운 닫기
    }
  };

  useEffect(() => {
    // 마운트 시 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);

    // 언마운트 시 이벤트 리스너 제거
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <Header text={"전체 뽑기 현황"} />
      <div className={"mb-6 flex justify-end px-6"}>
        <div className="relative">
          {/* 드롭다운 버튼 */}
          <button
            ref={buttonRef} // 드롭다운 버튼 참조
            className="flex w-48 items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700"
            onClick={() => setIsOpen((prev) => !prev)} // 이전 상태 토글
          >
            {selectedOption}
            {/* 오른쪽 화살표 */}
            <svg
              className="ml-2 h-4 w-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* 드롭다운 메뉴 */}
          {isOpen && (
            <div
              ref={dropdownRef} // 드롭다운 메뉴 참조
              className="absolute z-10 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg"
            >
              {["전체", "서비스플렛폼", "데이터융합"].map((option) => (
                <div
                  key={option}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mb-4 flex max-h-[calc(100vh-230px)] flex-col gap-3 overflow-y-auto pl-5">
        <RankCoupon />
        <RankCoupon />
        <RankCoupon />
        <RankCoupon />
        <RankCoupon />
        <RankCoupon />
        <RankCoupon />
        <RankCoupon />
        <RankCoupon />
      </div>
    </div>
  );
}
