import Link from "next/link";
import Bag from "./common/bag";

export const revalidate = 60;

async function getData({ slug }) {
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/programme/" + slug);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SingleProgramme({ slug }) {
  const data = await getData({ slug });
  const programmeType = data?.programme?.programType;
  const color = ["#ff5d5d", "#ffee58", "#00aaff", "#ffa939", "#10ff90", "#a069ff"]

  return (
    <div className="flex flex-wrap  gap-4 ">
      {data?.programme?.semesters?.map((item, index) => {
        return (
          <Link
            key={item._ids}
            href={"/programme/" + slug + "/" + item?.slug}
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
