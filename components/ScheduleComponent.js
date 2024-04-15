"use client";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

export default function ScheduleComponent() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const res = await fetch(`/api/schedule`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const ResponseData = await res.json();
      setData(ResponseData);
    }

    getData();
  }, []);
  return (
    <>
      {data?.schedule?.map((item) => (
          <div key={item._id} className=" m-2 p-2 bg-[#fff] rounded-md max-w-2xl border border-[#ddd] shadow-sm hover:shadow-md ">
            <ScheduleCard data={item} />
            <button
              className=" shadow-sm hover:shadow-md flex items-center gap-4 text-xl font-semibold p-2 py-1 rounded-md border border-[#ddd] "
              onClick={() =>
                document.getElementById(item._id).showModal()
              }
            >
              <div>Details</div>
            </button>
            <ScheduleDetails data={item} />
          </div>
      ))}
    </>
  );
}

const ScheduleCard = ({data}) => {
  function convertToIST(dateString) {
    const utcDate = new Date(dateString);
  
    // Convert to milliseconds and adjust for IST offset (5 hours 30 minutes ahead of UTC)
    const istTimeInMs = utcDate.getTime() + (5.5 * 60 * 60 * 1000);
  
    return new Date(istTimeInMs);
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
  
    // Options for formatting
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, // Use 12-hour format
    };
  
    // Format the date according to locale
    return new Intl.DateTimeFormat([], options).format(date);
  }
  const dateString = data?.date;
  const istDate = convertToIST(dateString);
  const formattedDate = formatDate(istDate);
  return (
     <div className="p-2"> <h2 className="font-bold text-lg">{data?.title}</h2>
     <div className="grid grid-cols-[110px_1fr] ">
       <div className="font-bold">Programme : </div><div className="uppercase"> {data?.programme} </div>
       <div className="font-bold">Course : </div><div className="uppercase">{data?.course} </div>
       <div className="font-bold">Group :</div><div> {data?.group} </div>
       <div className="font-bold">Duration :</div><div>{data?.duration}</div>
       <div className="font-bold">Date & Time :</div><div>{formattedDate}</div>
     </div></div>
  );
};
const ScheduleDetails = ({data}) => {
  return (
    <dialog
      id={data._id}
      className="relative max-w-3xl h-[80vh] rounded-md p-4"
    >
      <ScheduleCard data={data} />
      <div className="border border-[#ddd]">
      <div className="px-2 py-1 font-bold text-center ">Students List</div>
      <div className="flex flex-col ">
        <div className="grid grid-cols-[80px_150px_1fr] bg-[#eee] font-bold px-2 py-1 ">
          <div>S. No.</div><div>Enrolment</div><div>Name</div>
        </div>
        {data?.students?.map((student, index) => (
          <div key={student._id} className={(index%2===0) ? "grid grid-cols-[80px_150px_1fr] px-2 py-1 " : "grid grid-cols-[80px_150px_1fr] px-2 py-1 bg-[#eee]"}>
            <div>{index+1}</div>
            <div>{student?.enrolment}</div>
            <div>{student?.name}</div>
          </div>
        ))}
      </div>
      </div>
      <button
        className=" shadow-sm hover:shadow-md absolute text-2xl rounded-bl-md p-1 bg-red-500 text-white right-0 top-0"
        onClick={() => document.getElementById(data._id).close()}
      >
        <MdClose />
      </button>
    </dialog>
  );
};
