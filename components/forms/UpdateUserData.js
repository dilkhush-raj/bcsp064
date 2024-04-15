"use client";
import { submitForm } from "@/utils/actions/account";
import { useState, useEffect } from "react";

export default function UpdateAccounts({ data }) {
  const [programmes, setProgrammes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProgramme, setSelectedProgramme] = useState(
    data?.programme || ""
  );

  const handleSubmit = () => {
    document.getElementById("update_user_modal").close();
  };

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

  const handleChange = (event) => {
    setSelectedProgramme(event.target.value);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <main className="min-h-screen ">
      <button
        className=" bg-blue-600 hover:bg-blue-500 text-white rounded-md px-2 py-1 text-base flex gap-2 items-center "
        onClick={() => document.getElementById("update_user_modal").showModal()}
      >
        <div>Update</div>
      </button>
      <dialog
        id="update_user_modal"
        className="p-2 sm:p-4 rounded-md shadow-md max-w-3xl "
      >
        <h1 className="text-center text-3xl font-bold p-2  m-auto max-w-4xl">
          Update Account
        </h1>

        <form
          action={submitForm}
          className="flex flex-col gap-4 drop-shadow-md p-5 row-span-2 rounded-md"
        >
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={data?.email || ""}
              className="text-[#333] focus:outline-none"
            />
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="name" defaultValue={data?.name || ""} />
          </div>
          <div>
            <label>Enrolment</label>
            <input
              type="number"
              name="enrolment"
              defaultValue={data?.enrolment || ""}
            />
          </div>
          <div>
            <label>Programme</label>
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
          <div>
            <label>Mobile</label>
            <input
              type="number"
              name="mobile"
              defaultValue={data?.mobile || ""}
            />
          </div>
          <div>
            <label>Alternate Email</label>
            <input
              type="email"
              name="email2"
              defaultValue={data?.email2 || ""}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              defaultValue={data?.address || ""}
            />
          </div>
          <div className="flex justify-end gap-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" bg-blue-600 hover:bg-blue-500 text-white rounded-md px-2 py-1 text-base flex gap-2 items-center"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("update_user_modal").close()
              }
              className="bg-red-600 hover:bg-red-500 text-white rounded-md px-2 py-1 text-base flex gap-2 items-center"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </main>
  );
}
