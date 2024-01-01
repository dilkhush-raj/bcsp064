import Link from "next/link";
import { connectDB } from "@/utils/mongoose";
import Course from "@/model/Course";
import BookIcon from "@/assets/book";

export default async function CoursePage({ params }) {
  const { sem, slug } = params;
  console.log(slug);
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
    <main className="min-h-screen">
      {/* <h1>{sem}</h1> */}

      <div className="index p-4">
        {Object.entries(groupedData).map(([category, categoryData]) => (
          <div key={category} className="">
            <h2 className="capitalize text-2xl font-medium">{category}</h2>
            <ul className="flex gap-5 flex-wrap">
              {categoryData.map((item, index) => (
                <li key={index} className="w-max relative">
                  <Link
                    href={"/programme/" + slug + "/" + sem + "/" + item?.slug}
                  >
                    <BookIcon label={item.name} />
                    <div className="absolute z-20 top-[20px] left-[50px] w-[110px]">{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
