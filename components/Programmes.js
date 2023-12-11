import Link from "next/link";
import { connectDB } from "@/utils/mongoose";
import Programme from "@/model/Programme";
import Bag2 from "@/assets/bag2";
export const revalidate = 60;

export default async function Programmes() {
  await connectDB();
  const data = await Programme.find();
  return (
    <main>
      <h2 className="text-3xl mt-2 text-center uppercase font-bold">
        All Programmes
      </h2>
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
