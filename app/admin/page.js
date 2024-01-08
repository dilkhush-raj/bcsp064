
import AddNotice from "@/components/admin/AddNotice";
import AddImpLinks from "@/components/admin/AddImpLinks";
import AddProgramme from "@/components/admin/AddProgramme";
import AddCourse from "@/components/admin/AddCourse";
import { H1 } from "@/components/ui/Headings";
import getUserData from "@/utils/user";

export default async function page() {

  const data = await getUserData();

  if (data?.role !== "admin") {
    return (
      <section className="py-24 min-h-screen">
        <div className="container">
          <h1 className="text-2xl font-bold text-center p-4">
            You are not authorized to view this page
          </h1>
        </div>
      </section>
    );
  }

  return (
    <main className=" p-4 min-h-screen ">
      <div className="border-b-2 border-black mb-4"><H1>Admin</H1></div>
        <div className="flex gap-5 flex-wrap">
        <AddNotice />
        <AddImpLinks />
        <AddProgramme />
        <AddCourse />
        </div>
    </main>
  );
}
