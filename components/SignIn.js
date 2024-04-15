"use client"
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function SignIn(){
  return(
    <button onClick={() => signIn()} className=" bg-blue-600 hover:bg-blue-500 text-white rounded-md px-2 py-1 text-base flex gap-2 items-center">
      <FaGoogle /> Sign In with Google
    </button>
  )
}