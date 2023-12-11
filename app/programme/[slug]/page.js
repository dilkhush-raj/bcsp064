import Link from "next/link";
import SingleProgramme from "@/components/Programme";
import Notice from "@/components/Notice";
export const revalidate = 60;

export default async function SingleProgrammePage({ params }) {
  const { slug } = params;

  return (
    <main className="min-h-screen">
      <h1 className=" uppercase pl-10 p-2 text-3xl font-bold">{slug}</h1>
      <div className="grid md:grid-cols-2 p-2 sm:p-5 gap-10 ">
        <div className="max-w-lg">
        <SingleProgramme slug={slug} />
        </div>
        <Notice programme={slug} />
      </div>
    </main>
  );
}
