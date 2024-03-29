"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

export default function NoticeBoard({ programme, role }) {
  const [notices, setNotices] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [loading, setLoading] = useState(true);

  console.log("noticeboard", programme);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `/api/notice?programme=${programme}&role=${role}&page=${currentPage}&limit=${pageSize}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const ResponseData = await res.json();
      setNotices(ResponseData.data);
      setTotalRecords(ResponseData.totalRecords);
      setLoading(false)
    }

    getData();
  }, [programme, role, currentPage, pageSize]);

  const totalPages = Math.ceil(totalRecords / pageSize);

  function handlePreviousPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setLoading(true);
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    setLoading(true);
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      try {
        await fetch(`/api/notice?id=${id}`, {
          method: "DELETE",
        });
        let updatedNotices = notices.filter((item) => {
          return item._id != id;
        });
        setNotices(updatedNotices);
      } catch (error) {
        console.error("Error deleting notice:", error);
      }
    }
  };
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
    <div className="flex flex-col flex-wrap gap-2 w-ful ">
      <h2 className="mx-2 flex justify-between mt-2 text-3xl font-bold border-b-2 border-black ">
        <div>{(role === "admin" ? "Admin" : <span className="uppercase">{programme}</span>)} Notice Board</div> 
      </h2>
      <div className="flex justify-end items-center gap-4 px-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={
              currentPage === 1
                ? "bg-gray-300 text-gray-500 rounded-md px-2 py-1 text-xs flex gap-2 items-center"
                : " bg-blue-600 text-white rounded-md px-2 py-1 text-xs flex gap-2 items-center"
            }
          >
            <MdSkipPrevious />
          </button>
          <div>{currentPage} / { Math.ceil(totalRecords/pageSize)}</div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 rounded-md px-2 py-1 text-xs flex gap-2 items-center"
                : " bg-blue-600 text-white rounded-md px-2 py-1 text-xs flex gap-2 items-center"
            }
          >
          <MdSkipNext />
          </button>
        </div>
      {!loading ? (
        <div className="p-2 min-h-[450px] overflow-y-auto flex  flex-col gap-3 ">
          {notices?.map((item) => {
            const id = item._id.toString();
            function getDateFormatted(dateString) {
              const dateObject = new Date(dateString);
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
                <div className="absolute flex gap-2 top-[-8px] right-2">
                  {!programme || (role === "admin" && item?.programme) ? (
                    <div className="text-xs py-[2px] border border-[#ddd] uppercase rounded-full bg-white px-2 leading-none">
                      {item?.programme}
                    </div>
                  ) : null}
                  <div className="text-xs py-[2px]  border border-[#ddd] rounded-full bg-white px-2 leading-none">
                    {formattedDate}
                  </div>
                </div>

                {programme === "admin" ? (
                  <div className=" uppercase bg-[#ddd] w-max font-bold flex items-center rounded-sm  px-[8px] text-md">
                    {item?.programme}
                  </div>
                ) : null}
                <div className="w-full p-2">
                  <div className="">{item?.name}</div>
                  <div className="flex items-center mt-1 gap-2">
                    <span className="flex flex-wrap gap-1 text-sm w-max">
                      {item?.semester?.map((sem, index) => (
                        <div
                          key={index}
                          className={
                            textColors[index] +
                            " text-white mt-1 px-[8px] py-[1px] items-center text-xs rounded-full"
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
                        <span className="bg-[#eee] mt-1 px-[8px] py-[1px] text-xs cursor-pointer rounded-full">
                          Details
                        </span>
                      </Link>
                    ) : null}
                  </div>
                </div>

                {role === "admin" ? (
                  <div className="flex items-center justify-center">
                    <button
                      className="text-xl cursor-pointer mx-2"
                      onClick={() => handleDelete(item._id.toString())}
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <Skelton />
      )}
    </div>
  );
}

function Skelton() {
  return (
    <div className="p-2 min-h-[450px] overflow-y-auto flex flex-col gap-3">
      <div className="h-[58px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[58px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[58px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[58px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[58px] w-full bg-gray-200 rounded-md animate-pulse "></div>
      <div className="h-[58px] w-full bg-gray-200 rounded-md animate-pulse "></div>
    </div>
  );
}
