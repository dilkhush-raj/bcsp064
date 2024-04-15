"use client";
import { createNotice } from "@/utils/action";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

export default function AddNotice() {
  const [programmes, setProgrammes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProgramme, setSelectedProgramme] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/programme");
        const data = await response.json();

        setProgrammes(data.programme);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const [state, formAction] = useFormState(createNotice, {
    message: "",
  });
  const { pending } = useFormStatus();
  const ref = useRef(null);
  useEffect(() => {
    if (state.message.indexOf("Added Notice") === 0) {
      document.getElementById("notice_modal").close();
      ref.current?.reset();
      console.log(state.message);
      toast(state.message)
    } else if (state.message) {
      toast(state.message);
    }
  }, [state.message]);

  
  const handleChange = (event) => {
    setSelectedProgramme(event.target.value);
  };

  if(isLoading){
    return <div>Loading ...</div>
  }
  const cycle = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Year 1",
    "Year 2",
    "Year 3",
    "All"
  ];

  return (
    <main className="">
    <Toaster />
      <button
        className=" shadow-sm hover:shadow-md flex items-center gap-4 text-xl font-semibold p-2 sm:p-4 rounded-md border border-[#ddd] "
        onClick={() => document.getElementById("notice_modal").showModal()}
      >
        <FaEnvelopeOpenText />
        <div>Add Notice</div>
      </button>
      <dialog
        id="notice_modal"
        className="max-w-xl p-2 rounded-md shadow-md sm:p-4"
      >
        <div className="">
          <h2 className="text-2xl font-bold text-center border-b-4 border-black">
            Add Notice
          </h2>
          <form
            ref={ref}
            action={formAction}
            className="flex flex-col gap-4 p-2 "
          >
            <div className="">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full input input-bordered"
                required
              />
            </div>
            <div className="w-full form-control">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                id="link"
                name="link"
                className="w-full input input-bordered"
              />
            </div>
            <div className="w-full form-control">
              <select
                id="programme"
                name="programme"
                value={selectedProgramme}
                onChange={handleChange}
                className="w-full text-black input input-bordered"
                required
              >
                <option value="">-- Select --</option>
                {programmes.map((programme) => (
                  <option key={programme._id} value={programme.slug}>
                    {programme.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full form-control">
              <label htmlFor="cycle">Semester</label>
              <div className="flex flex-wrap items-center gap-2">
                {cycle.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 w-[140px] bg-[#eee] rounded-md "
                  >
                    <input
                      type="checkbox"
                      id={`cycle-${index}`}
                      name="cycle" // Same name for all checkboxes
                      value={item}
                      className="w-max"
                    />
                    <label htmlFor={`cycle-${index}`} className="pl-2">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
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
                className="px-2 py-1 font-bold bg-white border border-black rounded-sm"
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
