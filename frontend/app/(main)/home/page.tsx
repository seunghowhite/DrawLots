import ButtonRegist from "@/components/buttons/ButtonRegist";
import Coupon from "@/components/coupons/Coupon";
import Header from "@/components/header/Header";

export default function HomePage() {
  return (
    <div>
      <Header text={"Kevin"} />
      <div className={"px-5"}>
        <ButtonRegist />
        <h1 className="py-3 text-xl font-extrabold">나의 뽑기 현황판</h1>
      </div>
      <div className="mb-4 flex max-h-[calc(100vh-320px)] flex-col gap-3 overflow-y-auto pl-5">
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
      </div>
    </div>
  );
}
