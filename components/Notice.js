import Notice from "@/model/Notice";
import { connectDB } from "@/utils/mongoose";
import getUserData from "@/utils/user";
import Link from "next/link";
import { Suspense } from "react";
import DeleteNoticeButton from "./ui/deleteNotice";
export const dynamic = 'force-dynamic'

async function NoticeData({ programme }) {
  const user = await getUserData();
  const isAdmin = user?.role === "admin" || false;
  await connectDB();

  const totalRecords = await Notice.countDocuments();
  const limit = 5;
  const page = 1;
  const skip = (page - 1) * limit;
  const notice = await Notice.find()
    .sort({ createdOn: -1 })
    .skip(skip)
    .limit(5);

  let notices;
  if (programme) {
    if(programme === "admin"){
      notices = await Notice.find().sort({ createdAt: -1 }).skip(skip).limit(5);
    } else {
      notices = await Notice.find({ programme: programme })
      .sort({ createdOn: -1 })
      .skip(skip)
      .limit(5);
    }
  } else {
    notices = await Notice.find().sort({ createdAt: -1 }).skip(skip).limit(5);
  }

  const textColors = [
    "bg-[#00aaff] ",
    "bg-[#ffa939] ",
    "bg-[#10ff90] ",
    "bg-[#a069ff] ",
    "bg-[#00aaff] ",
    "bg-[#ffa939] ",
    "bg-[#10ff90] ",
    "bg-[#a069ff] ",
  ];

  return (
    <div className="p-2 min-h-[450px] overflow-y-auto flex  flex-col gap-3 ">
      {notices?.map((item) => {
        const id = item._id.toString();
        function getDateFormatted(dateString) {
          // Assuming your `dateString` is in a consistent format
          const dateObject = new Date(dateString);

          // Format only the date, month name, and year
          const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
          };
          const formattedDate = dateObject.toLocaleDateString("en-IN", options);

          return formattedDate;
        }
        const utcTime = item?.createdOn;
        const formattedDate = getDateFormatted(utcTime);
        return (
          <div
            key={item._id}
            className="flex  bg-white rounded-md leading-none min-h-0 relative border border-[#ddd] shadow-sm hover:shadow-md w-full  "
          >
            <div className="text-xs py-[2px] absolute top-[-8px] border border-[#ddd] right-2 rounded-full bg-white px-2 leading-none">
              {formattedDate}
            </div>
            {!programme && item?.programme ? (
              <div className=" uppercase bg-[#ddd] w-max font-bold flex items-center rounded-sm  px-[8px] text-md">
                {item?.programme}
              </div>
            ) : null}
            {(programme === "admin") ? (
              <div className=" uppercase bg-[#ddd] w-max font-bold flex items-center rounded-sm  px-[8px] text-md">
                {item?.programme}
              </div>
            ) : null}
            <div className="w-full p-2">
              <div className="">{item?.name}</div>
              <div className="flex gap-2">
                <span className="flex flex-wrap gap-2 mt-1 text-sm w-max">
                  {item?.semester?.map((sem, index) => (
                    <div
                      key={index}
                      className={
                        textColors[index] +
                        " text-white mt-1 px-[8px] py-[1px] text-sm rounded-full"
                      }
                    >
                      {sem}
                    </div>
                  ))}
                </span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center"
                  >
                    <span className="bg-[#eee] mt-1 px-[8px] py-[1px] text-sm cursor-pointer rounded-full">
                      Details
                    </span>
                  </Link>
                ) : null}
              </div>
            </div>

            {isAdmin ? (
              <div className="flex items-center justify-center">
                <DeleteNoticeButton id={id} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default async function NoticeBoard({ programme }) {
  return (
    <div className="flex flex-col flex-wrap gap-2 w-ful ">
      <h2 className="mx-2 mt-2 text-3xl font-bold uppercase border-b-2 border-black ">
        {programme} Notice Board
      </h2>
      <Suspense fallback={<Skelton />}>
        <NoticeData programme={programme} />
      </Suspense>
    </div>
  );
}

function Skelton(){
  return (
    <div className="p-2 min-h-[450px] overflow-y-auto flex flex-col gap-3">
      <div className="h-[63px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[63px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[63px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[63px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[63px] w-full bg-gray-200 rounded-md animate-pulse "></div>
    </div>
  );
};
