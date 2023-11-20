import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/components/Users";

export default async function page() {
  const session = await getServerSession(authOptions);

  // console.log(session?.user?.role);

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
      <h1 className="text-2xl font-bold bg-[#eee] shadow-md p-2 rounded-md text-center">
        Admin Dashboard
      </h1>
      <User />
    </main>
  );
}
