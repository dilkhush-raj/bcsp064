import Link from "next/link";
import Bag from "../assets/bag";
import { connectDB } from "@/utils/mongoose";
import Programme from "@/model/Programme";
export const revalidate = 60;

export default async function SingleProgramme({ slug }) {
  await connectDB();
  const data = await Programme.findOne({ slug: slug });
  const color = [
    "#ff5d5d",
    "#ffee58",
    "#00aaff",
    "#ffa939",
    "#10ff90",
    "#a069ff",
  ];

  return (
    <div className="flex flex-wrap gap-4 ">
      {data?.semesters?.map((item, index) => {
        return (
          <Link
            key={item._id}
            href={"/programme/" + slug + "/" + (index + 1)}
            className="flex flex-col justify-center "
          >
            <div className="cursor-pointer w-[120px] object-contain">
              <Bag colour={color[index]} semester={item?.name} width={120} />
            </div>
            <span className="text-center">{item?.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
