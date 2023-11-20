import Link from "next/link";
export const revalidate = 60;

async function getData() {
  const res = await fetch("http://localhost:3000/api/programme");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Account() {
  const data = await getData();
  return (
    <main className="min-h-screen">
    </main>
  );
}
