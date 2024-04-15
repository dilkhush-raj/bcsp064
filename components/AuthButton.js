"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function AuthButton() {
  const [model, setModel] = useState(false);
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="relative">
        <div
          onClick={() => setModel(!model)}
          className="  w-10 aspect-square cursor-pointer rounded-full overflow-hidden border-4 border-transparent hover:border-[#79797930] "
        >
          <picture>
            <img
              src={session?.user?.image || "/user.svg"}
              alt=""
              className="border-2 border-[#ddd] rounded-full"
            />
          </picture>
        </div>
        {model ? (
          <>
            <div className=" border min-w-[250px] border-[#ddd] profile-bg fixed flex pt-2 flex-col z-50 shadow-md rounded-md w-max top-[58px] right-1 overflow-hidden">
              <picture>
                <img
                  src={session?.user?.image || "/user.svg"}
                  className=" w-20 aspect-square ml-2 rounded-full shadow-md border-4 border-[#ddd] overflow-hidden "
                  alt=""
                />
              </picture>
              <div className="bg-white mt-2 border-t-2 border-[#eee] flex flex-col p-4 justify-center items-center">
                <b>{session?.user?.name}</b>
                <i>{session?.user?.email}</i>
                <div className="flex gap-4 mt-2">
                  <Link href="/account">
                    <button className="bg-[#465fc8] text-white font-bold py-1 px-2 rounded-full">
                      Account
                    </button>
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="px-2 py-1 font-bold bg-white border border-black rounded-full"
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
        className="bg-blue-600 text-white font-medium py-1 px-2 rounded-md "
      >
        Sign In
      </button>
    </>
  );
}
