import { submitForm } from "@/utils/actions/account";
import getUserData from "@/utils/user";
export default async function UpdateAccounts() {
  const data = await getUserData();
  return (
    <>
      <h1 className="text-center text-3xl font-bold p-2 mb-5 m-auto max-w-4xl">
        Edit Account
      </h1>

      <form
        action={submitForm}
        className="flex flex-col drop-shadow-md p-5 bg-[#fff] row-span-2 rounded-md m-auto max-w-2xl"
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          readOnly
          defaultValue={data?.email || ""}
        />
        <label>Name</label>
        <input type="text" name="name" defaultValue={data?.name || ""} />
        <label>Enrolment</label>
        <input
          type="number"
          name="enrolment"
          defaultValue={data?.enrolment || ""}
        />

        <label>Programme</label>
        <input
          type="text"
          name="programme"
          defaultValue={data?.programme || ""}
        />
        <label>Mobile</label>
        <input type="number" name="mobile" defaultValue={data?.mobile || ""} />
        <label>Alternate Email</label>
        <input type="email" name="email2" defaultValue={data?.email2 || ""} />
        <label>Address</label>
        <input type="text" name="address" defaultValue={data?.address || ""} />
        <button type="submit" className="w-5">
          Submit
        </button>
      </form>
    </>
  );
}
