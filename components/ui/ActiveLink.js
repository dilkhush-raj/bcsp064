"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";

export function HomeLink() {
  const pathname = usePathname();
  return (
    <Link
      href={"/"}
      className={
        pathname === "/"
          ? " bg-[#eee]  px-2 py-2 rounded-md flex gap-2 items-center"
          : " px-2 py-2 hover:bg-[#f5f5f5] rounded-md flex gap-2 items-center"
      }
    >
      <GoHomeFill /> <div>Home</div>
    </Link>
  );
}

export default function ActiveLink({ href, label, icon }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? " bg-[#eee] px-2 py-2 rounded-md flex gap-2 items-center "
          : " px-2 py-2 hover:bg-[#f5f5f5] rounded-md flex gap-2 items-center "
      }
    >
      {icon} <div>{label}</div>
    </Link>
  );
}
