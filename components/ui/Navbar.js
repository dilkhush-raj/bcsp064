import { website_title } from "@/utils/constant";
import AuthButton from "../AuthButton";
import getUserData from "@/utils/user";
import { navLinks } from "@/utils/constant";
import Active, { HomeLink } from "./ActiveLink";

export default async function Navbar() {
  const data = await getUserData();
  return (
    <div className="flex sticky z-50 top-0 items-center justify-between p-2 shadow-md bg-[#fff]  ">
      <div className="flex items-center gap-5">
        <div className="sm:hidden text-2xl">=</div>
        <div href={"/"} className="px-2 font-bold">
          {website_title}
        </div>
        <nav className="hidden sm:flex items-bottom font-medium gap-2 px-2 ">
          {data?.user?.role === "admin" ? (
            <Active href={"/admin"} label={"Dashboard"} />
          ) : null}
          <HomeLink />
          {navLinks.map((link) => (
            <div key={link.route} className="flex items-center">
              <Active href={link.route} label={link.label} />
            </div>
          ))}
        </nav>
      </div>
      <AuthButton />
    </div>
  );
}
