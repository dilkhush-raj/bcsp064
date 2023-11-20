import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SingleProgramme from "@/components/Programme";
import Notice from "@/components/Notice";
import AllProgramme from "@/components/AllProgramme";
import getUserData from "@/utils/user";
import AllNotice from "@/components/AllNotice";
export const revalidate = 60;

export default async function Home() {
  const session = await getServerSession(authOptions);
  const data = await getUserData();
  const userProgramme = data?.user?.programme;

  return (
    <main className="min-h-screen ">
      <div className="w-full relative aspect-video bg-slate-300 max-h-[50vh] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=crop&q=80&w=1773&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        {/* <div className="text-center font-bold text-5xl text-white absolute top-[50%] left-0 right-0 translate-y-[-50%] ">
          Welcome to IGNOU TPS Study Center
        </div> */}
      </div>
      <div className="shadow-md bg-white flex items-center">
        <div className="font-bold p-2 bg-gray-300  ">📣</div>
        <marquee behavior="" direction="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut
          eligendi magni suscipit. Quia, eaque? Harum totam tenetur iure
          sapiente.
        </marquee>
      </div>
      <div className="grid md:grid-cols-2 p-2 sm:p-5 gap-10 ">
        {session ? (
          <>
            <div>
              <div className="font-bold text-2xl">
                Welcome {session.user.name}
              </div>
              <div>
                <b>Enrolment: </b>
                <span>{data.user.enrollment}</span>
              </div>
              <div>
                <b>Programme: </b>
                <span className=" uppercase">{data.user.programme}</span>
              </div>
              <div>
                <b>Email: </b>
                <span>{data.user.email}</span>
              </div>
              <br />
              <div className="my-5 max-w-lg">
                <SingleProgramme slug={userProgramme} />
              </div>
            </div>
            <Notice programme={userProgramme} />
          </>
        ) : (
          <>
           <div> <AllProgramme /></div>
            <AllNotice />
          </>
        )}
      </div>
      <div></div>
      {/* <div className="grid grid-cols-3 overflow-y-auto gap-2 p-2 ">
        
        
        <ImpLinks />
      </div> */}
    </main>
  );
}
