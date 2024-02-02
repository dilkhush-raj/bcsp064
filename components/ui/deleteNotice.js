"use client";
import { deleteNoticeAction } from "@/utils/actions/notice.action";
import { MdDeleteForever } from "react-icons/md";

export default function DeleteNoticeButton({ id }) {
    
  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      document.getElementById(`delete-form-${id}`).requestSubmit();
    }
  };
  return (
    <div>
      <button
        className="text-xl cursor-pointer mx-2"
        onClick={() => confirmDelete(id)}
      >
        <MdDeleteForever />
      </button>
      <form
        action={deleteNoticeAction}
        id={`delete-form-${id}`}
        style={{ display: "none" }}
      >
        <input type="hidden" name="id" value={id} />
      </form>
    </div>
  );
}
