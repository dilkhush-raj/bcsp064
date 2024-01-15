import { connectDB } from "@/utils/mongoose";
import Notice from "@/model/Notice";
import Heading, { H2 } from "./ui/Headings";
export const revalidate = 60;

export default async function NoticeBoard({ programme }) {
  await connectDB();
  let notices;
  if (programme) {
    notices = await Notice.find({ programme: programme });
  } else {
    notices = await Notice.find();
  }
  const textColors = [
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
      <div className="p-2 min-h-[450px] overflow-y-auto flex mb-2 flex-col gap-2 ">
        {notices?.map((item) => {
          return (
            <div
              key={item._id}
              className="flex flex-col bg-white rounded-md leading-none relative border border-[#ddd] shadow-sm hover:shadow-md cursor-pointer w-full p-2 "
            >
              <div className=" ">{item?.name}</div>
              <span className=" text-sm flex flex-wrap gap-2 w-max  ml-2 mt-1">
                {!programme ? (
                  <div className=" uppercase  w-max  rounded-sm text-white bg-[#333]  px-[8px] py-[1px] text-sm mt-1">
                    {item?.programme}
                  </div>
                ) : null}
                {item?.semester?.map((sem, index) => (
                  <div
                    key={index}
                    className={textColors[index] + " text-white mt-1 px-[8px] py-[1px] text-sm rounded-full"}
                  >
                    {sem}
                  </div>
                ))}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
