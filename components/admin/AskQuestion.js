"use client";
import { useFormState, useFormStatus } from "react-dom";
import { createLink } from "@/utils/action";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { BsPatchQuestionFill } from "react-icons/bs";

export default function AskQuestion() {
  const [state, formAction] = useFormState(createLink, {
    message: "",
  });
  const { pending } = useFormStatus();
  const ref = useRef(null);
  useEffect(() => {
    if (state.message.indexOf("Added Question") === 0) {
      document.getElementById("question_modal").close();
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
        onClick={() => document.getElementById("question_modal").showModal()}
      >
        <BsPatchQuestionFill />
        <div>Ask Question</div>
      </button>
      <dialog
        id="question_modal"
        className="p-2 sm:p-4 rounded-md shadow-md max-w-xl"
      >
        <h2 className="text-2xl text-center font-bold border-b-4 border-black">
          Ask Question
        </h2>
        <form
          ref={ref}
          action={formAction}
          className="flex flex-col gap-4 py-2 w-3xl "
        >
          <div className=" flex flex-col ">
            <label htmlFor="name">Question</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className=" flex flex-col ">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="input input-bordered w-full"
              rows={10}
              required
            ></textarea>
          </div>
          <div className="flex justify-between ">
            <button
              className="bg-[#465fc8] text-white font-bold py-1 px-2 rounded-sm"
              type="submit"
              disabled={pending}
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-white border border-black font-bold py-1 px-2 rounded-sm"
              onClick={() => document.getElementById("question_modal").close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </main>
  );
}
