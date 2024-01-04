import AuthButton from "../AuthButton";
import ToggleNav from "./ToggleNav";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[60px]  shadow-sm bg-[#fff] border-b border-[#eee]">
      <div className=" md:hidden">
        <ToggleNav>
          <Sidebar />
        </ToggleNav>
      </div>

      <div className="flex items-center justify-between p-2 pl-[50px]  ">
        <Link href="/" className="text-2xl flex items-center gap-2">
          <picture>
            <img src="/logo.svg" alt="" className="w-[25px]" />
          </picture>
          <span className="hidden md:flex text-base font-bold leading-none">IGNOU Patna</span>
        </Link>
        <input
          type="search"
          name="q"
          className="py-2 w-[200px] sm:w-[400px] md:w-[600px] mx-auto text-sm sm:text-lg bg-gray-200  rounded-full px-5 focus:outline-none border border-transparent focus:border-black text-gray-900 "
          placeholder="Search..."
        />

        <AuthButton />
      </div>
    </div>
  );
}
