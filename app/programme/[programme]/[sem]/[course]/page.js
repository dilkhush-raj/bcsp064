import { Suspense } from "react";
import { connectDB } from "@/utils/mongoose";
import Course from "@/model/Course";

export async function Book({ course }) {
  await connectDB();
  const data = await Course.findOne({ slug: course });

  return (
    <div>
      {data?.block?.map((block) => (
        <div key={block._id}>
          <div className="font-bold text-xl">{block.name}</div>
          <div className="flex flex-col gap-2 ml-4 mb-4">
            {block.units.map((unit) => (
              <a
                key={unit._id}
                href={unit?.url}
                target="_blank"
                className="w-max"
              >
                {unit.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const page = ({ params }) => {
  const { slug, sem, course } = params;

  return (
    <main className="p-2 min-h-screen">
      <h1 className="text-3xl mb-4 border-b-2 border-black capitalize font-bold">
        Course <span className="uppercase">{course}</span>
      </h1>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Book course={course} />
      </Suspense>
    </main>
  );
};

export default page;
