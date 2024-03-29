import NoticeBoard from "@/components/NoticeBoard";
import SingleProgramme from "@/components/Programme";
export const revalidate = 60;

export default async function SingleProgrammePage({ params }) {
  const { programme } = params;

  return (
    <main className="min-h-screen">
      <div className="grid gap-10 p-2 md:grid-cols-2 sm:p-5 ">
        <div className="max-w-lg">
          <h1 className="mx-2 mt-2 mb-4 text-3xl font-bold uppercase border-b-2 border-black ">
            {programme}
          </h1>
          <SingleProgramme slug={programme} />
        </div>
        <NoticeBoard programme={programme} />
      </div>
    </main>
  );
}
