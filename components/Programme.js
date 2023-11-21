import Link from "next/link";

export const revalidate = 60;

async function getData({ slug }) {
  const res = await fetch(process.env.DOMAIN + "/api/programme/" + slug);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SingleProgramme({ slug }) {
  const data = await getData({ slug });
  const programmeType = data?.programme?.programType;

  return (
    <div className="flex flex-wrap  gap-4 ">
      {data?.programme?.semesters?.map((item, index) => {
        return (
          <Link
            key={item._ids}
            href={"/programme/" + slug + "/" + item?.slug}
            className="flex flex-col justify-center "
          >
            <img
              src={`/img/${item.slug}.svg`}
              alt={item.slug}
              className="cursor-pointer w-[120px]"
            />
            <span className="text-center">{item?.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
