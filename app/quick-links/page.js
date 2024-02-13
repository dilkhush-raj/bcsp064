import { PiLinkSimpleBold } from "react-icons/pi";
import { connectDB } from "@/utils/mongoose";
import Link from "next/link";
import ImpLink from "@/model/impLink.model";
import { Suspense } from "react";
import { Skeleton } from "antd";

async function Content() {
  await connectDB();  
  const fetch = await ImpLink.find();
  const data = fetch.sort((a, b) => a.name.localeCompare(b.name));
  return (
      <div className="flex flex-col gap-4 p-2">
        {data?.map((link) => (
          <Link href={link.link} key={link._id} className=" flex items-center gap-2 w-max ">
            <PiLinkSimpleBold />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
  );
}

export default async function ImpLinks() {
  return(
    <main className="min-h-screen">
      <h1 className=" capitalize text-4xl p-2 text-[#333] font-bold ">
        Quick Links
      </h1>
      <Suspense fallback={<Skeleton />}>
        <Content />
      </Suspense>
    </main>
  )
}