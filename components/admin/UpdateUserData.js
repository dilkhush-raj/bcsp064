"use client";
import { submitForm } from "@/utils/actions/account";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaLink } from "react-icons/fa";

export default function UpdateUserData({ data }) {
  const [state, formAction] = useFormState(submitForm, {
    message: "",
  });
  const { pending } = useFormStatus();
  const ref = useRef(null);
  useEffect(() => {
    // console.log(state);
    if (state.message.indexOf("Updated User") === 0) {
      document.getElementById("user_update_modal").close();
      ref.current?.reset();
      // toast(state.message);
    } else if (state.message) {
      // toast(state.message);
    }
  }, [state.message]);

  return (
    <main className="">
      <button
        className="  shadow-sm hover:shadow-md flex items-center gap-4 text-xl font-semibold p-2 sm:p-4 rounded-md border border-[#ddd] "
        onClick={() => document.getElementById("user_update_modal").showModal()}
      >
        <FaLink />
        <div>Update</div>
      </button>
      <dialog
        id="user_update_modal"
        className="max-w-xl p-2 rounded-md shadow-md sm:p-4"
      >
        <h2 className="text-2xl font-bold text-center border-b-4 border-black">
          Update Account
        </h2>
        <form
          ref={ref}
          action={formAction}
          className="flex flex-col gap-4 drop-shadow-md p-5 bg-[#fff] row-span-2 rounded-md m-auto max-w-2xl"
        >
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={data?.email || ""}
              className="text-[#aaa] focus:outline-none"
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              defaultValue={data?.name || ""}
              required
            />
          </div>
          <div>
            <label>Enrolment</label>
            <input
              type="number"
              name="enrolment"
              defaultValue={data?.enrolment || ""}
              required
            />
          </div>

          <div>
            <label>Programme</label>
            <input
              type="text"
              name="programme"
              defaultValue={data?.programme || ""}
              required
            />
          </div>
          <div>
            <label>Mobile</label>
            <input
              type="number"
              name="mobile"
              defaultValue={data?.mobile || ""}
              required
            />
          </div>
          <div>
            <label>Alternate Email</label>
            <input
              type="email"
              name="email2"
              defaultValue={data?.email2 || ""}
              required
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              defaultValue={data?.address || ""}
              required
            />
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
              className="px-2 py-1 font-bold bg-white border border-black rounded-sm"
              onClick={() =>
                document.getElementById("user_update_modal").close()
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </main>
  );
}
