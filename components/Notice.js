import { connectDB } from "@/utils/mongoose";
import Notice from "@/model/Notice";
import getUserData from "@/utils/user";
import DeleteNoticeButton from "./ui/deleteNotice";
import Link from "next/link";
export const revalidate = 60;

export default async function NoticeBoard({ programme }) {
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
    notices = await Notice.find({ programme: programme })
    .sort({ createdOn: -1 })
    .skip(skip)
    .limit(5);
  } else {
    notices = await Notice.find().sort({ createdAt: -1 }).skip(skip).limit(5);
    // notices = await Notice.find().sort({ createdOn: -1 }).limit(limit);
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
    <div className="flex flex-col gap-2 flex-wrap w-ful ">
      <h2 className=" text-3xl mt-2 mx-2 border-b-2 border-black uppercase font-bold">
        {programme} Notice Board
      </h2>
      {/* <Heading text={} /> */}
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
            const formattedDate = dateObject.toLocaleDateString(
              "en-IN",
              options
            );

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
              <div className="p-2 w-full">
                <div className=" ">{item?.name}</div>
                <div className="flex gap-2">
                  <span className=" text-sm flex flex-wrap gap-2 w-max mt-1">
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
                    <Link href={item.link} target="_blank" className="flex items-center">
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
    </div>
  );
}
