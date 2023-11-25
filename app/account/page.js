import Link from "next/link";
import getUserData from "@/utils/user";
export const revalidate = 60;

export default async function Account() {
  const data = await getUserData();
  console.log(data);
  return (
    <main className="min-h-screen md:p-4 p-2">
      <img src={data?.user?.image} alt=""  />
      {data.user.name}

    </main>
  );
}
