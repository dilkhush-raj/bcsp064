"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function HomeLink() {
  const pathname = usePathname();
  return (
      <Link
        href={"/"}
        className={
          pathname === "/"
            ? " bg-[#eee]  px-2 py-1 rounded-md"
            : " px-2 py-1"
        }
      >
        Home
      </Link>
  );
}

export default function ActiveLink({href, label}) {
  const pathname = usePathname();
  return (
      <Link
        href={href}
        className={
          pathname.startsWith(href) ? " bg-[#eee] px-2 py-1 rounded-md " : " px-2 py-1"
        }
      >
        {label}
      </Link>
  );
}
