"use client";
import { navLinks } from "@/utils/constant";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import AuthButton from "./AuthButton";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";

export default function Navbar({ role }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 z-50 md:hidden">
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-2xl px-3 h-[60px]  font-bold "
          >
            {toggle ? <IoClose /> : <BiMenuAltLeft />}
          </button>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className={` ${
            toggle ? "visible" : "hidden"
          } fixed inset-0 top-[60px] z-40 w-full bg-[#00000048] transition-all duration-500`}
        ></div>
        <div
          className={` w-max fixed bottom-0 top-[60px] transition-all duration-300 z-50 ${
            toggle ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="h-full ">
            <div className="bg-white border-r-1 shadow-md border-[#eee] h-full">
              <div className="flex flex-col justify-between h-full">
                  <div className="py-4 ">
                    <nav
                      onClick={() => setToggle(!toggle)}
                      className="flex flex-col gap-3 px-2 font-medium items-bottom "
                    >
                      <HomeLink />
                      {(role==="admin") ? (
                        <ActiveLink
                          href={"/admin"}
                          label={"Dashboard"}
                          icon={<MdAdminPanelSettings />}
                        />
                      ) : null}
                      {navLinks.map((link) => (
                        <ActiveLink
                          key={link.route}
                          href={link.route}
                          label={link.label}
                          icon={link?.icon}
                        />
                      ))}
                    </nav>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between h-[60px]  shadow-sm bg-[#fff] border-b border-[#eee] p-4 pl-[50px] md:pl-[20px]  ">
        <Link href="/" className="flex items-center gap-2 text-2xl">
          <picture>
            <img src="/logo.png" className="w-[40px] aspect-square" alt="" />
          </picture>
          <span className="flex text-base font-semibold leading-none">
            IGNOU Patna Student Corner
          </span>
        </Link>
        <AuthButton />
      </div>
    </div>
  );
}

function HomeLink() {
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

function ActiveLink({ href, label, icon }) {
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
