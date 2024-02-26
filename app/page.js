import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NoticeBoard from "@/components/Notice";
import SingleProgramme from "@/components/Programme";
import Programmes from "@/components/Programmes";
import ServiceWorker from "@/components/ServiceWorker";
import getUserData from "@/utils/user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Marquee from "react-fast-marquee";
export const revalidate = 60;

export default async function Home() {
  const session = await getServerSession(authOptions);
  const data = await getUserData();
  const userProgramme = data?.programme;
  if (session) {
    if (!data?.programme) {
      redirect("/account/update");
    }
  }
  <ServiceWorker />;
  return (
    <main className="min-h-screen ">
      <Hero />
      <div className="max-w-4xl">
        {session ? (
          <LoggedUserComponent
            session={session}
            data={data}
            userProgramme={userProgramme}
          />
        ) : (
          <NotLoggedUserComponent />
        )}
        <NoticeBoard programme={userProgramme} />
      </div>
    </main>
  );
}

const LoggedUserComponent = ({ session, data, userProgramme }) => {
  return (
    <div className="">
      <div className="flex flex-col p-2 pt-4">
        <h2 className="mt-2 text-3xl font-bold">Welcome {session.user.name}</h2>
        <div>
          <b>Enrolment: </b>
          <span>{data?.enrolment}</span>
        </div>
        <div>
          <b>Programme: </b>
          <span className="uppercase ">{data?.programme}</span>
        </div>
        <div>
          <b>Email: </b>
          <span>{data?.email}</span>
        </div>
      </div>
      <br />
      <div className="m-2">
        <h2 className="mb-4 text-3xl font-bold uppercase border-b-2 border-black">
          {userProgramme}
        </h2>
        {userProgramme === "admin" ? (
          <Programmes />
        ) : (
          <SingleProgramme slug={userProgramme} />
        )}
      </div>
    </div>
  );
};

const NotLoggedUserComponent = () => {
  return (
    <>
      <h2 className="mx-2 mt-2 text-3xl font-bold uppercase border-b-2 border-black">
        All Programmes
      </h2>
      <Programmes />
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="w-full relative aspect-video  max-h-[40vh] bg-cover bg-no-repeat bg-center bg-[url('/banner.svg')] "></div>
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
    </>
  );
};
