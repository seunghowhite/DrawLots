import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Home from "@/public/svg/home.svg";

interface IFooterButtonProps {
  text: string;
  icon: any;
  iconFocus: any;
  href: string;
}

export default function FooterButton({ text, icon, iconFocus, href }: IFooterButtonProps) {
  const pathname = usePathname();
  const src = pathname === href ? iconFocus : icon;

  return (
    <Link
      href={href}
      className="flex w-1/5 flex-col items-center justify-center text-center transition-transform duration-200 ease-in-out
        hover:scale-125"
    >
      <Image
        src={src}
        alt="homeicon"
      />
      {text}
    </Link>
  );
}
