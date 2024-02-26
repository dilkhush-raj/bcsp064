import BookIcon from "@/assets/book";
import Course from "@/model/Course";
import { connectDB } from "@/utils/mongoose";
import Link from "next/link";
import { Suspense } from "react";

async function Content({ sem, programme }) {
  await connectDB();
  const semester = sem;
  const data = await Course.find({ semester });

  const groupedData = data.reduce((obj, item) => {
    if (!obj[item.category]) {
      obj[item.category] = [];
    }
    obj[item.category].push(item);
    return obj;
  }, {});
  return (
    <div className="p-4 index">
      {Object.entries(groupedData).map(([category, categoryData]) => (
        <div key={category} className="">
          <h2 className="text-2xl font-medium capitalize">{category}</h2>
          <ul className="flex flex-wrap gap-5">
            {categoryData.map((item, index) => (
              <li key={index} className="relative w-max">
                <Link
                  href={
                    "/programme/" + programme + "/" + sem + "/" + item?.slug
                  }
                >
                  <BookIcon label={item.name} />
                  <div className="absolute z-20 top-[20px] left-[50px] w-[110px]">
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default async function CoursePage({ params }) {
  const { sem, programme } = params;
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Skelton />}>
        <Content sem={sem} programme={programme} />
      </Suspense>
    </main>
  );
}

function Skelton() {
  return (
    <div className="p-4 ">
      <ul className="flex flex-wrap gap-5">
        <div className=" w-[180px] h-[202px] rounded-lg bg-[#eee] animate-pulse"></div>
        <div className=" w-[180px] h-[202px] rounded-lg bg-[#eee] animate-pulse"></div>
        <div className=" w-[180px] h-[202px] rounded-lg bg-[#eee] animate-pulse"></div>
        <div className=" w-[180px] h-[202px] rounded-lg bg-[#eee] animate-pulse"></div>
      </ul>
      <ul className="flex flex-wrap gap-5 mt-5">
        <div className=" w-[180px] h-[202px] rounded-lg bg-[#eee] animate-pulse"></div>
        <div className=" w-[180px] h-[202px] rounded-lg bg-[#eee] animate-pulse"></div>
        <div className=" w-[180px] h-[202px] rounded-lg bg-[#eee] animate-pulse"></div>
        <div className=" w-[180px] h-[202px] rounded-lg bg-[#eee] animate-pulse"></div>
      </ul>
    </div>
  );
}