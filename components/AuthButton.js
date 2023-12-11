"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function AuthButton() {
  const [model, setModel] = useState(false);
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="relative">
        <div
          onClick={() => setModel(!model)}
          className="  w-10 aspect-square cursor-pointer rounded-full overflow-hidden  bg-[#eee] border-4 border-transparent hover:border-[#a0a0a022] "
        >
          <img src={session?.user?.image || "/user.svg"} alt="" />
        </div>
        {model ? (
          <>
            <div className=" border min-w-[250px] border-[#ddd] fixed flex pt-2 flex-col z-40 shadow-md rounded-md w-max top-[58px] right-1 overflow-hidden">
              <img
                src={session?.user?.image || "/user.svg"}
                className=" w-20 aspect-square ml-2 rounded-full overflow-hidden "
                alt=""
              />
              <div className="bg-white mt-2 flex flex-col p-4 justify-center items-center">
                <b>{session?.user?.name}</b>
                <i>{session?.user?.email}</i>
                <div className="flex gap-4 mt-2">
                  <Link href="/account">
                    <button className="bg-[#465fc8] text-white font-bold py-1 px-2 rounded-sm">Update</button>
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="bg-white border border-black font-bold py-1 px-2 rounded-sm"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
            <div
              onClick={() => setModel(!model)}
              className="fixed z-10 top-[54px] bottom-0 left-0 right-0"
            ></div>
          </>
        ) : null}
      </div>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className="bg-[#6a8aea] text-white font-bold py-1 px-2 rounded-full "
      >
        Sign In
      </button>
    </>
  );
}
