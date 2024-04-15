import AdminDashboard from "@/components/AdminDashboard";
import getUserData from "@/utils/user";

export default async function page() {
  const data = await getUserData();
  console.log(data);

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
      <picture>
        <img src={data?.image || "/"} alt="" />
      </picture>
      Welcome to Admin Dashboard {data?.name}
      <br />
      Your email is {data?.email}
      <AdminDashboard />
    </main>
  );
}
