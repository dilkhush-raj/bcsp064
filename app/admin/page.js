import AddNotice from "@/components/admin/AddNotice";
import AddImpLinks from "@/components/admin/AddImpLinks";
import AddProgramme from "@/components/admin/AddProgramme";
import AddCourse from "@/components/admin/AddCourse";
import getUserData from "@/utils/user";

export default async function page() {
  const data = await getUserData();

  if (data?.role !== "admin") {
    return (
      <section className="py-24 min-h-screen">
        <div className="container">
          <h1 className="text-3xl mt-2 mx-2 border-b-2 border-black uppercase font-bold">
            You are not authorized to view this page
          </h1>
        </div>
      </section>
    );
  }

  return (
    <main className=" p-4 min-h-screen ">
      <h1 className="text-3xl my-2 border-b-2 border-black uppercase font-bold">
        Admin
      </h1>
      <div className="flex gap-5 flex-wrap">
        <AddNotice />
        <AddImpLinks />
        <AddProgramme />
        <AddCourse />
      </div>
    </main>
  );
}
