"use client";

import { useMemo } from "react";

import FooterButton from "@/components/footer/FooterButton";
import Admin from "@/public/svg/admin.svg";
import AdminFocus from "@/public/svg/admina-focus.svg";
import ApprovalFocus from "@/public/svg/approval-focus.svg";
import Approval from "@/public/svg/approval.svg";
import HomeFocus from "@/public/svg/home-focus.svg";
import Home from "@/public/svg/home.svg";
import MyPageFocus from "@/public/svg/mypage-focus.svg";
import MyPage from "@/public/svg/mypage.svg";
import RankFocus from "@/public/svg/rank-focus.svg";
import Rank from "@/public/svg/rank.svg";

export default function Footer() {
  const buttonsArray = useMemo(
    () => [
      { text: "홈", link: "/home", icon: Home, iconFocus: HomeFocus },
      { text: "랭킹", link: "/rank", icon: Rank, iconFocus: RankFocus },
      { text: "승인", link: "/approval", icon: Approval, iconFocus: ApprovalFocus },
      { text: "관리자", link: "/admin", icon: Admin, iconFocus: AdminFocus },
      { text: "마이페이지", link: "/mypage", icon: MyPage, iconFocus: MyPageFocus },
    ],
    []
  );

  return (
    <footer className="absolute bottom-0 flex h-20 w-full bg-white shadow-[0_-8px_10px_-4px_rgba(0,0,0,0.1)]">
      {buttonsArray.map(({ text, link, icon, iconFocus }) => (
        <FooterButton
          key={link}
          text={text}
          href={link}
          icon={icon}
          iconFocus={iconFocus}
        />
      ))}
    </footer>
  );
}
