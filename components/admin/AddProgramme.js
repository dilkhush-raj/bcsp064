"use client";
import { useFormState, useFormStatus } from "react-dom";
import { createNotice } from "@/utils/action";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { PiBooksFill } from "react-icons/pi";

export default function AddProgramme() {
  const [state, formAction] = useFormState(createNotice, {
    message: "",
  });
  const { pending } = useFormStatus();
  const ref = useRef(null);
  useEffect(() => {
    if (state.message.indexOf("Added Notice") === 0) {
      document.getElementById("notice_modal").close();
      ref.current?.reset();
      toast(state.message);
    } else if (state.message) {
      toast(state.message);
    }
  }, [state.message]);

  return (
    <main className="">
      <button
        className=" shadow-sm hover:shadow-md flex items-center gap-4 text-xl font-semibold p-2 sm:p-4 rounded-md border border-[#ddd] "
        onClick={() => document.getElementById("notice_modal").showModal()}
      >
        <PiBooksFill />
        <div>Add Programme</div>
      </button>
      <dialog id="notice_modal" className="p-2 sm:p-4 rounded-md shadow-md max-w-xl">
        <div className="">
          <h2 className="text-2xl text-center font-bold border-b-4 border-black">
            Add Notice
          </h2>
          <form ref={ref} action={formAction} className="flex flex-col gap-4 p-2 ">
            <div className="">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="name">Programme</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="name">Semester</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                id="link"
                name="link"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex justify-between ">
              <button
                className="bg-[#465fc8] text-white font-bold py-1 px-2 rounded-sm"
                type="submit"
                disabled={pending}
              >
                Add
              </button>
              <button
                type="button"
                className="bg-white border border-black font-bold py-1 px-2 rounded-sm"
                onClick={() => document.getElementById("notice_modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </main>
  );
}
