import Course from "@/model/Course";
import { connectDB } from "@/utils/mongoose";
import { Suspense } from "react";

export async function Book({ course }) {
  await connectDB();
  const data = await Course.findOne({ slug: course });

  return (
    <div>
      {data?.block?.map((block) => (
        <div key={block._id}>
          <div className="text-xl font-bold">{block.name}</div>
          <div className="flex flex-col gap-2 mb-4 ml-4">
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
    <main className="min-h-screen p-2">
      <h1 className="mb-4 text-3xl font-bold capitalize border-b-2 border-black">
        Course <span className="uppercase">{course}</span>
      </h1>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Book course={course} />
      </Suspense>
    </main>
  );
};

export default page;
