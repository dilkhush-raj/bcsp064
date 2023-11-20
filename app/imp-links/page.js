import { impLinks } from "@/utils/constant";
import Link from "next/link";

export default function ImpLinks() {
  return (
    <div className="min-h-screen">
      <h1 className=" capitalize text-4xl text-center py-2 bg-slate-400 font-bold ">
        Important Links
      </h1>
      <div className="flex flex-col gap-2 p-2">
        {impLinks.map((link) => (
          <Link href={link.link} key={link.link} className=" flex w-max ">
            <img
              src="/img/link.svg"
              className="w-5 object-contain aspect-square"
              alt=""
            />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
