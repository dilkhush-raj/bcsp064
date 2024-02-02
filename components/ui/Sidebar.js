import { website_title } from "@/utils/constant";
import getUserData from "@/utils/user";
import { navLinks } from "@/utils/constant";
import Active, { HomeLink } from "./ActiveLink";
import { MdAdminPanelSettings } from "react-icons/md";

export default async function Sidebar() {
  const data = await getUserData();
  return (
    <div className="flex flex-col justify-between h-full border-r-1 border-t bg-white shadow-md border-[#eee]">
        <div>
          <div className="py-4 ">
            <nav className="flex flex-col items-bottom font-medium gap-3 px-2 ">
              <HomeLink />
              {data?.role === "admin" ? (
                <Active
                  href={"/admin"}
                  label={"Dashboard"}
                  icon={<MdAdminPanelSettings />}
                />
              ) : null}
              {navLinks.map((link) => (
                <Active
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

