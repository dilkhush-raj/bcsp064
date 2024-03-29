"use client"
import { navLinks } from "@/utils/constant";
import { MdAdminPanelSettings } from "react-icons/md";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";

export default function Sidebar({role}) {
  return (
    <div className="flex flex-col justify-between h-full border-r-1 border-t bg-white shadow-md border-[#eee]">
        <div>
          <div className="py-4 ">
            <nav className="flex flex-col items-bottom font-medium gap-3 px-2 ">
              <HomeLink />
              {role === "admin" ? (
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
