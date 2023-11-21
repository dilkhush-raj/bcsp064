import Link from "next/link";
export const revalidate = 60;

async function getData() {
  const res = await fetch(process.env.DOMAIN + "/api/programme");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function AllProgramme() {
  const data = await getData();
  return (
    <div className="grid grid-cols-4 p-2 md:p-4 gap-10">
      {data.allProgramme.map((programme) => (
        <Link
          href={"/programme/" + programme.slug}
          key={programme._id}
          className=" p-4 rounded-md shadow-sm bg-slate-400"
        >
          <div className="font-bold text-4xl">{programme.name}</div>
          {/* <DeleteProgramme id={programme._id} /> */}
        </Link>
      ))}
    </div>
  );
}
