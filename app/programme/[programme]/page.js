import Link from "next/link";
import SingleProgramme from "@/components/Programme";
import Notice from "@/components/Notice";
export const revalidate = 60;

export default async function SingleProgrammePage({ params }) {
  const { programme } = params;

  return (
    <main className="min-h-screen">
      <div className="grid md:grid-cols-2 p-2 sm:p-5 gap-10 ">
        <div className="max-w-lg">
          <h1 className=" text-3xl mt-2 mb-4 mx-2 border-b-2 border-black uppercase font-bold">
            {programme}
          </h1>
          <SingleProgramme slug={programme} />
        </div>
        <Notice programme={programme} />
      </div>
    </main>
  );
}
