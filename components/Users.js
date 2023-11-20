export const revalidate = 60;

async function getData() {
  const res = await fetch("http://localhost:3000/api/users");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function User() {
  const data = await getData();
  return (
    <div>
      <h2 className="text-3xl font-bold py-2">User List</h2>
      <div>
        {data?.allUser?.map((i) => (
          <div key={i._id} className="flex gap-5 flex-wrap ">
            <div>{i.name}</div>
            <div>{i.email}</div>
            <div>{i.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
