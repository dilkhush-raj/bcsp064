"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/utils/constant";

export default  function NavLink() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={"/"}
        className={
          pathname === "/"
            ? " bg-[#cbcbcb70]  px-2 py-1 rounded-md"
            : " px-2 py-1"
        }
      >
        Home
      </Link>

      {navLinks.map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className={
            pathname.startsWith(link.route)
              ? " bg-[#cbcbcb70] rounded-md  px-2 py-1"
              : " px-2 py-1"
          }
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
