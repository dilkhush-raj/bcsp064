import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SingleProgramme from "@/components/Programme";
import NoticeBoard from "@/components/Notice";
import Programmes from "@/components/Programmes";
import getUserData from "@/utils/user";
import Link from "next/link";
import Bag2 from "@/assets/bag2";
import Marquee from "react-fast-marquee";
export const revalidate = 60;

export default async function Home() {
  const session = await getServerSession(authOptions);
  const data = await getUserData();
  const userProgramme = data?.user?.programme;

  return (
    <main className="min-h-screen ">
      <div className="w-full relative aspect-video  max-h-[40vh] bg-contain bg-no-repeat bg-center bg-white bg-[url('/img/full_logo.png')] ">
        {/* <div className="text-center font-bold text-5xl text-white absolute top-[50%] left-0 right-0 translate-y-[-50%] ">
          Welcome to IGNOU TPS Study Center
        </div> */}
        <div className=" flex gap-2 absolute bottom-2 right-2">
          <Link href={"#"} target="_blank">
            <img
              src="/img/whatsapp.svg"
              alt=""
              className="w-10 aspect-square"
            />
          </Link>
          <Link href={"#"} target="_blank">
            <img
              src="/img/telegram.svg"
              alt=""
              className="w-10 aspect-square"
            />
          </Link>
        </div>
      </div>
      <div className=" bg-white shadow-sm flex items-center border-[#ddd] border-b-2 border-t ">
        <div className="font-bold p-2 bg-gray-100 border-r border-[#ddd] ">
          Alert:{" "}
        </div>
        <Marquee pauseOnHover={true} autoFill={true}>
          <div className="flex gap-20 px-10 cursor-pointer">
            <div>This project is under construction.</div>
            <div>Please login to use all the features.</div>
          </div>
        </Marquee>
      </div>
      <div className="grid md:grid-cols-2 bg-white  ">
        <div className=" border-[#ddd] border-b-2">
          {session ? (
            <div className="mx-auto p-2 max-w-lg">
              <div className="flex flex-col pt-4">
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
              </div>
              <br />
              <div className="my-5 flex ">
                <SingleProgramme slug={userProgramme} />
              </div>
            </div>
          ) : (
            <Programmes />
          )}
        </div>
        <div
          className={
            !session
              ? "row-start-1 md:row-start-auto border-l-2 border-b-2 border-[#ddd]"
              : null +
                "  md:row-start-auto border-l-2 border-b-2 border-[#ddd] "
          }
        >
          <NoticeBoard programme={userProgramme} />
        </div>
      </div>
    </main>
  );
}
