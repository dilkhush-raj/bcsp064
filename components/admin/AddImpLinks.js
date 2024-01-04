"use client";
import { useFormState, useFormStatus } from "react-dom";
import { createLink } from "@/utils/action";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";

export default function AddImpLinks() {
  const [state, formAction] = useFormState(createLink, {
    message: "",
  });
  const { pending } = useFormStatus();
  const ref = useRef(null);
  useEffect(() => {
    if (state.message.indexOf("Added Link") === 0) {
      document.getElementById("link_modal").close();
      ref.current?.reset();
      toast(state.message);
    } else if (state.message) {
      toast(state.message);
    }
  }, [state.message]);

  return (
    <main className="">
      <button
        className="  shadow-sm hover:shadow-md flex items-center gap-4 text-xl font-semibold p-2 sm:p-4 rounded-md border border-[#ddd] "
        onClick={() => document.getElementById("link_modal").showModal()}
      >
        <FaLink />
        <div>Add Important Link</div>
      </button>
      <dialog id="link_modal" className="p-2 sm:p-4 rounded-md shadow-md max-w-xl">
        <h2 className="text-2xl text-center font-bold border-b-4 border-black">
          Add Link
        </h2>
        <form
          ref={ref}
          action={formAction}
          className="flex flex-col gap-4 py-2 w-3xl "
        >
          <div className=" flex flex-col ">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className=" flex flex-col ">
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
              onClick={() => document.getElementById("link_modal").close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </main>
  );
}
