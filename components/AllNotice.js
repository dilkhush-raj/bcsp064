import Link from "next/link";
export const revalidate = 60;

async function getData() {
  const res = await fetch(process.env.DOMAIN + "/api/notice");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function AllNotice() {
  const data = await getData();
  console.log(data);
  const semesterBgColors = [
    "bg-[#00aaff]", "bg-[#ffa939]", "bg-[#10ff90]", "bg-[#a069ff]"
  ]
  return (
    <div className="flex flex-col flex-wrap w-full bg-green-800 border-4 border-white shadow-md shadow-[#aaa]  rounded-md ">
      <h2 className="font-bold text-2xl text-center bg-green-900 text-white p-2  ">
       Student Notice Board
      </h2>
      <div className="p-2 h-[450px] overflow-y-auto flex flex-col gap-2 ">
        {data?.notice?.map((item, index) => {
          return (
            <div
              key={item._id}
              className="flex flex-col rounded-md bg-slate-200 w-full p-2 "
            >
              <div className=" font-medium text-lg ">{item?.name}</div>
              <div className="pl-2">{item?.description}</div>
              <span className=" text-sm flex flex-wrap gap-2 w-max  ml-2 mt-1">
                
              <span className="uppercase flex items-center px-2 py-1 rounded-md bg-red-500">{item?.programme}</span>
                {item?.semester?.map((notice, index) => (
                  <div
                    key={notice}
                    className={semesterBgColors[index] + " rounded-md py-1 px-2"}
                  >
                    {notice}
                  </div>
                ))}
              </span>
              {/* <Link
                href={item.link}
                className="ml-2 bg-gray-400 w-max text-sm rounded-md p-1"
              >
                <button>More Details</button>
              </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
