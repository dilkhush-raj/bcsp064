import Link from "next/link";
import ProgrammeImage from "./common/programme";
export const revalidate = 60;

async function getData() {
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/programme");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function AllProgramme() {
  const data = await getData();
  return (
    <div className="flex gap-5 p-4 flex-wrap ">
      {data.allProgramme.map((programme) => (
        <Link
          href={"/programme/" + programme.slug}
          key={programme._id}
          className="  "
        >
          {/* <div className="font-bold text-4xl">{programme.name}</div> */}
          {/* <DeleteProgramme id={programme._id} /> */}
          <ProgrammeImage title={programme.name} />
        </Link>
      ))}
    </div>
  );
}
