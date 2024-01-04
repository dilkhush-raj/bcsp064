"use client";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export default function ToggleNav({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" fixed top-0 z-50">
      <div className=" flex items-center gap-2">
        <button
          onClick={() => setToggle(!toggle)}
          className="text-xl h-[56px] pl-4 font-bold "
        >
          {toggle ? <IoClose /> : <IoMenu />}
        </button>
      </div>
      <div
        className={` w-full fixed bottom-0 top-[56px] transition-all duration-500 z-50 ${
          toggle ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="grid grid-cols-[auto_1fr] h-full">
          <div onClick={() => setToggle(!toggle)} className="bg-white h-full">{children}</div>
          <div onClick={() => setToggle(!toggle)} className="w-full"></div>
        </div>
      </div>
    </div>
  );
}
