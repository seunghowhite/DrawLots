export default function MyCoupon() {
  return (
    <div className={"mr-5 flex h-36 gap-2 rounded-xl bg-gray-200 p-4"}>
      <div className="flex items-end font-extrabold text-mbOrange">
        <p className={"mr-2 text-7xl"}>5</p>
        <p>th</p>
      </div>
      <div className="flex w-[55%] flex-col justify-end text-darkBlue">
        <p className={"text-4xl font-bold"}>문화상품권</p>
        <div className={"flex gap-4"}>
          <p className={"mt-1"}>등록일: 2025/01/12</p>
        </div>
      </div>
      <div className="flex w-[30%] flex-col items-end text-darkBlue">
        <p className={"text-lg font-bold"}>사용</p>
        <p className={""}>2025/01/12</p>
      </div>
    </div>
  );
}
