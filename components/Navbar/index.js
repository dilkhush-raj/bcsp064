import Link from "next/link";
import NavLink from "./NavLink";
import { website_title } from "@/utils/constant";
import AuthButton from "../AuthButton";
import AdminLink from "./AdminLink";

export default function Navbar() {
  return (
    <div className="flex sticky z-50 top-0 items-center justify-between p-2 shadow-md bg-[#e4e4e4]  ">
      <div className="flex items-center gap-5">
        <Link href={"/"}>
          <div className="px-4 font-bold">{website_title}</div>
        </Link>
        <nav className="hidden sm:flex items-bottom font-medium gap-2 px-2 ">
          <AdminLink />
          <NavLink />
        </nav>
      </div>
      <AuthButton />
    </div>
  );
}