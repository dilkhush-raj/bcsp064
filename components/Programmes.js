import Bag2 from "@/assets/bag2";
import Programme from "@/model/Programme";
import { connectDB } from "@/utils/mongoose";
import Link from "next/link";
import { Suspense } from "react";
export const revalidate = 60;

async function Content() {
  await connectDB();
  const data = await Programme.find();
  const bagColors = [
    { c1: "#ff5d5d", c2: "#b24141" }, // Red shades
    { c1: "#70bf43", c2: "#049448" }, // Green shades
    { c1: "#00aaff", c2: "#008ecc" }, // Blue shades
    { c1: "#ffa939", c2: "#cc8c2e" }, // Orange shades
    { c1: "#a069ff", c2: "#8250cc" }, // Purple shades
    { c1: "#ffff99", c2: "#cccc66" }, // Yellow shades
  ];
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
  return (
    <div>
      <div>Loading</div>
    </div>
  );
};
