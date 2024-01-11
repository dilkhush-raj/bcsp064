"use client";
import Link from "next/link";
import { FaPenNib } from "react-icons/fa6";
import AuthButton from "./AuthButton";
import { IoClose } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { navLinks } from "@/utils/constant";
import ActiveLink, { HomeLink } from "./ui/ActiveLink";
import { website_title } from "@/utils/constant";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Navbar({ isAdmin }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" relative">
      <div className=" absolute top-0 left-0 z-50 md:hidden">
        <div className=" flex items-center gap-2">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-2xl px-3 h-[60px]  font-bold "
          >
            {toggle ? <IoClose /> : <BiMenuAltLeft />}
          </button>
        </div>
        <div
          className={` w-full fixed bottom-0 top-[60px] transition-all duration-500 z-50 ${
            toggle ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="grid grid-cols-[auto_1fr] h-full">
            <div className="bg-white shadow-md border-r-2 border-[#ccc] h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="py-4 ">
                    <nav
                      onClick={() => setToggle(!toggle)}
                      className="flex flex-col items-bottom font-medium gap-3 px-2 "
                    >
                      <HomeLink />
                      {isAdmin ? (
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
                <div className="font-bold p-2 text-sm">
                  &copy;{website_title} {new Date().getFullYear()}
                </div>
              </div>
            </div>
            <div onClick={() => setToggle(!toggle)} className="w-full"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between h-[60px]  shadow-sm bg-[#fff] border-b border-[#eee] p-4 pl-[50px] md:pl-[20px]  ">
        <Link href="/" className="text-2xl flex items-center gap-2">
          <FaPenNib />
          <span className="flex text-base font-semibold leading-none">
            IGNOU Patna
          </span>
        </Link>
        <AuthButton />
      </div>
    </div>
  );
}
