import Bag2 from "@/assets/bag2";
import Bag2Skelton from "@/assets/bag2skelton";
import Programme from "@/model/Programme";
import { connectDB } from "@/utils/mongoose";
import Link from "next/link";
import { Suspense } from "react";
export const revalidate = 60;

const bagColors = [
  { c1: "#ff5d5d", c2: "#b24141" }, // Red shades
  { c1: "#70bf43", c2: "#049448" }, // Green shades
  { c1: "#00aaff", c2: "#008ecc" }, // Blue shades
  { c1: "#ffa939", c2: "#cc8c2e" }, // Orange shades
  { c1: "#a069ff", c2: "#8250cc" }, // Purple shades
  { c1: "#FFCC70", c2: "#ffcc50" }, // Yellow shades
];

async function Content() {
  await connectDB();
  const res = await Programme.find();
  const data = res.filter(obj => obj.slug !== "all");

  return (
    <div className="flex gap-4 p-4 justify-center md:justify-start flex-wrap">
      {data?.map((programme, index) => (
        <Link
          href={"/programme/" + programme.slug}
          key={programme._id}
          className=" flex-initial h-max"
        >
          <Bag2
            title={programme.name}
            c1={bagColors[index % bagColors.length].c1}
            c2={bagColors[index % bagColors.length].c2}
          />
        </Link>
      ))}
    </div>
  );
}

export default async function Programmes() {
  return (
    <Suspense fallback={<Skelton />}>
      <Content />
    </Suspense>
  );
}

const Skelton = () => {
  const repeatCount = 6;
  const elements = Array.from({ length: repeatCount });
  return (
    <div className="flex gap-4 p-4 justify-center md:justify-start flex-wrap">
      {elements?.map((_, index) => (
        <div key={index}>
          <Bag2Skelton />
        </div>
      ))}
    </div>
  );
};
