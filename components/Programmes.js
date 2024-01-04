import Link from "next/link";
import { connectDB } from "@/utils/mongoose";
import Programme from "@/model/Programme";
import Bag2 from "@/assets/bag2";
import { H2 } from "./ui/Headings";
export const revalidate = 60;

export default async function Programmes() {
  await connectDB();
  const data = await Programme.find();
  return (
    <main>
      <H2>All Programmes</H2>
      <div className="flex gap-4 p-4 justify-center flex-wrap">
        {data?.map((programme) => (
          <Link
            href={"/programme/" + programme.slug}
            key={programme._id}
            className=" flex-initial h-max"
          >
            <Bag2 title={programme.name}  />
          </Link>
        ))}
      </div>
    </main>
  );
}
