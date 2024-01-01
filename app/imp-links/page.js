import { LinkIcon } from "@/assets/icons";
// import { impLinks } from "@/utils/constant";
import { connectDB } from "@/utils/mongoose";
import Link from "next/link";
import ImpLink from "@/model/ImpLink";

export default async function ImpLinks() {
  await connectDB();  
  const fetch = await ImpLink.find();
  const data = fetch.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="min-h-screen">
      <h1 className=" capitalize text-4xl p-2 text-[#333] font-bold ">
        Important Links
      </h1>
      <div className="flex flex-col gap-2 p-2">
        {data?.map((link) => (
          <Link href={link.link} key={link._id} className=" flex w-max ">
            <LinkIcon width={20} />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
