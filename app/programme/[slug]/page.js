import Link from "next/link";
import { Breadcrumb } from "antd";

export const revalidate = 60;

async function getData({ slug }) {
  const res = await fetch("http://localhost:3000/api/programme/" + slug);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SingleProgramme({ params }) {
  const { slug } = params;
  const data = await getData({ slug });
  const programmeType = data?.programme?.programType;
  const breadcrumb = [
    {
      title: <Link href="/">Home</Link>,
    },
    {
      title: <Link href="/programme">Programme</Link>,
    },
    {
      title: data?.programme?.name,
    }
  ]

  return (
    <main className="min-h-screen">
      <Breadcrumb
        items={breadcrumb}
        className="p-2 md:px-4 bg-gray-300"
      />
      <div className=" bg-gray-300 max-w-lg rounded-md overflow-hidden shadow-md m-2">
        <h1 className=" uppercase text-4xl text-center py-2 bg-slate-400 font-bold ">
          {data?.programme?.name} <span className=" capitalize">{programmeType}</span>
        </h1>
        <div className="flex flex-wrap gap-4 p-5 justify-center">
          {data?.programme?.semesters?.map((item, index) => {
            return (
              <Link
                key={index}
                href={"/programme/" + slug + "/" + item?.slug}
                className="flex flex-col justify-center"
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
      </div>
    </main>
  );
}
