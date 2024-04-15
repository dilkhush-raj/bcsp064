"use client";
import { Skeleton } from "antd";
import Link from "next/link";
import { Suspense } from "react";
import { PiLinkSimpleBold } from "react-icons/pi";
import AddImpLinks from "@/components/forms/AddImpLinks";
import { MdDeleteForever } from "react-icons/md";
import { useState, useEffect } from "react";

export default function QuickLinkAdminPage() {
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(`/api/quickLink`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const ResponseData = await res.json();
      setLinks(ResponseData.data);
      setLoading(false);
    }

    getData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this quick link?")) {
      try {
        await fetch(`/api/quickLink?id=${id}`, {
          method: "DELETE",
        });
        let updatedLink = links.filter((item) => {
          return item._id != id;
        });
        setLinks(updatedLink);
      } catch (error) {
        console.error("Error deleting Quick Link:", error);
      }
    }
  };

  return (
    <main className="min-h-screen">
      <div className="flex items-center flex-wrap gap-2">
        <h1 className=" capitalize flex gap-4 items-center text-4xl p-2 text-[#333] font-bold ">
          Quick Links
        </h1>
        <AddImpLinks />
      </div>

      <Suspense fallback={<Skeleton />}>
        <div className="flex flex-col gap-4 p-2">
          {links?.map((link) => (
            <div key={link._id} className="flex gap-4 items-center">
              <Link
                href={link.link}
                target="_blank"
                className="flex items-center gap-2  w-max"
              >
                <PiLinkSimpleBold />
                <span>{link.name}</span>
              </Link>
              <div
                className="hover:bg-[#7773] rounded-full p-2 text-lg cursor-pointer "
                onClick={() => handleDelete(link._id.toString())}
              >
                <MdDeleteForever />
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </main>
  );
};
