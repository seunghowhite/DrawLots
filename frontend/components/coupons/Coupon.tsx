export default function Coupon() {
  return (
    <div className={"mr-5 flex h-36 rounded-xl bg-[#D2EBFF] p-4"}>
      <div className="flex w-full items-end font-extrabold text-mbBlue">
        <p className={"mr-2 text-7xl"}>5</p>
        <p>th</p>
      </div>
      <div className="flex w-full flex-col items-end justify-end text-darkBlue">
        <p className={"text-4xl font-bold"}>커피쿠폰</p>
        <p className={"mt-1"}>2025/01/12</p>
        <button className={"mt-5"}>사용하기</button>
      </div>
    </div>
  );
}
