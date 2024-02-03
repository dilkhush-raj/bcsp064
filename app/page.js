import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SingleProgramme from "@/components/Programme";
import NoticeBoard from "@/components/Notice";
import Programmes from "@/components/Programmes";
import getUserData from "@/utils/user";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import ServiceWorker from "@/components/ServiceWorker";
export const revalidate = 60;

export default async function Home() {
  <ServiceWorker />;
  const session = await getServerSession(authOptions);
  const data = await getUserData();
  const userProgramme = data?.programme;

  return (
    <main className="min-h-screen ">
      <div className="w-full relative aspect-video  max-h-[40vh] bg-cover bg-no-repeat bg-center bg-[url('/banner.svg')] ">
        
      </div>
      <div className="shadow-sm flex items-center border-[#222] border-2 ">
        <div className="font-bold p-2 bg-[#222] text-white border-r border-[#ddd] ">
          Alert:{" "}
        </div>
        <Marquee pauseOnHover={true} autoFill={true}>
          <div className="flex gap-20 px-10 cursor-pointer">
            <div>This project is under construction.</div>
            <div>Please login to use all the features.</div>
          </div>
        </Marquee>
      </div>

      <div className="max-w-4xl">
        {session ? (
          <div className=" ">
            <div className="flex flex-col p-2 pt-4">
              <h2 className="text-3xl mt-2 font-bold">Welcome {session.user.name}</h2>
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
            </div>
            <br />
            <div className="m-2">
              <h2 className="text-3xl mb-4 border-b-2 border-black uppercase font-bold">
                {userProgramme}
              </h2>
              <SingleProgramme slug={userProgramme} />
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-3xl mt-2 mx-2 border-b-2 border-black uppercase font-bold">
              All Programmes
            </h2>
            <Programmes />
          </>
        )}
        <NoticeBoard programme={userProgramme} />
      </div>
    </main>
  );
}
