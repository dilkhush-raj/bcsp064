import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddNotice from "@/components/admin/AddNotice";
import { CourseIcon, ProgrammeIcon } from "@/assets/icons";
import AddImpLinks from "@/components/admin/AddImpLinks";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== "admin") {
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
      <h1 className="text-3xl font-bold border-b-2 border-black mb-5">
        Admin Dashboard
      </h1>
        <div className="flex gap-5">
        <AddNotice />
        <AddImpLinks />
        <CourseIcon width={150} />
        <ProgrammeIcon width={150} />
        </div>
    </main>
  );
}
