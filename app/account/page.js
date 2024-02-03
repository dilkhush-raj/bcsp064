import Link from "next/link";
import getUserData from "@/utils/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export const revalidate = 60;

const Page = async () => {
  const session = await getServerSession(authOptions);
  const data = await getUserData();

  return (
    <main className="min-h-screen p-2 md:p-4">
        <h1 className="text-3xl mb-2 border-b-2 border-black font-bold">
          Account
        </h1>
      {session ? (
        <div className="p-2 max-w-lg">
          <div className="flex flex-col gap-2">
            <picture>
              <img
                src={session?.user?.image}
                className="rounded-md my-1 "
                alt=""
              />
            </picture>
            <div>
              <b>Name: </b> {session.user.name}
            </div>
            <div>
              <b>Enrolment: </b>
              <span>{data?.enrollment}</span>
            </div>
            <div>
              <b>Programme: </b>
              <span className=" uppercase">{data?.programme}</span>
            </div>
            <div>
              <b>Email: </b>
              <span>{data?.email}</span>
            </div>
            <div>
              <b>Alternate Email: </b>
              <span>{data?.email2 || "Please Update"}</span>
            </div>
            <div>
              <b>Mobile: </b>
              <span>{data?.mobile || "Please Update"}</span>
            </div>
            <div>
              <b>Address: </b>
              <span>{data?.address || "Please Update"}</span>
            </div>
          </div>
          <br />
          <Link href={"/account/update"}>
            <button className="bg-[#465fc8] text-white font-bold py-1 px-2 rounded-md">
              Update
            </button>
          </Link>
        </div>
      ) : (
        <div>Please Login</div>
      )}
    </main>
  );
};

export default Page;
