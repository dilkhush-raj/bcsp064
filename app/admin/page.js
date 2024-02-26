import AddCourse from "@/components/admin/AddCourse";
import AddImpLinks from "@/components/admin/AddImpLinks";
import AddNotice from "@/components/admin/AddNotice";
import AddProgramme from "@/components/admin/AddProgramme";
import ProgrammeData from "@/data/programme";
import getUserData from "@/utils/user";

export default async function page() {
  const programme = await ProgrammeData();
  console.log(programme);
  const data = await getUserData();

  if (data?.role !== "admin") {
    return (
      <section className="min-h-screen py-24">
        <div className="container">
          <h1 className="mx-2 mt-2 text-3xl font-bold uppercase border-b-2 border-black">
            You are not authorized to view this page
          </h1>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen p-4 ">
      <h1 className="my-2 text-3xl font-bold border-b-2 border-black">
        Admin
      </h1>
      <div className="flex flex-wrap gap-5">
        <AddNotice />
        <AddImpLinks />
        <AddProgramme />
        <AddCourse />
      </div>
    </main>
  );
}
