"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function AuthButton() {
  const [model, setModel] = useState(false);
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="relative">
        <div
          onClick={() => setModel(!model)}
          className=" w-10 aspect-square cursor-pointer rounded-full overflow-hidden border-4 border-transparent hover:border-[#5552] "
        >
          <img src={session?.user?.image || "/user.svg"} alt="" />
        </div>
        {model ? (
          <>
            <div className="fixed flex flex-col justify-center items-center z-40 bg-white shadow-md rounded-md p-4 w-max top-[58px] right-1">
              <img
                src={session?.user?.image || "/user.svg"}
                className=" w-20 aspect-square rounded-full overflow-hidden "
                alt=""
              />
              <b>{session?.user?.name}</b>
              <i>{session?.user?.email}</i>
              <button className="bg-gray-300 rounded-md px-2 py-1 mt-2">
                Manage Your Account
              </button>
              <button
                onClick={() => signOut()}
                className="bg-red-600 text-white px-2 py-1 mt-2 shadow-md rounded-md"
              >
                Sign out
              </button>
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
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
