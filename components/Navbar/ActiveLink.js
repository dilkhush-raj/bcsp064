"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ActiveLink() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={"/admin"}
        className={
          pathname.startsWith("/admin") ? " bg-[#cbcbcb70]  px-2 py-1 rounded-md " : " px-2 py-1"
        }
      >
        Dashboard
      </Link>
    </>
  );
}
