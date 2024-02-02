import { submitForm } from "@/utils/actions/account";
import getUserData from "@/utils/user";
import Link from "next/link";

export default async function UpdateAccounts() {
  const data = await getUserData();
  // TODO: Add validations
  return (
    <main className="min-h-screen p-2 md:p-4">
      <h1 className="text-center text-3xl font-bold p-2 mb-5 m-auto max-w-4xl">
        Edit Account
      </h1>

      <form
        action={submitForm}
        className="flex flex-col gap-4 drop-shadow-md p-5 bg-[#fff] row-span-2 rounded-md m-auto max-w-2xl"
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
          <input
            type="text"
            name="programme"
            defaultValue={data?.programme || ""}
          />
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
          <input type="email" name="email2" defaultValue={data?.email2 || ""} />
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
          <button type="submit" className="">
            Submit
          </button>
          <Link href={"/account"}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
