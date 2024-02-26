import AllProgramme from "@/components/Programmes";

export default async function Programme() {
  return (
    <main className="min-h-screen">
      <h1 className="mx-2 mt-2 mb-4 text-3xl font-bold uppercase border-b-2 border-black">All Programmes</h1>
      <AllProgramme />
    </main>
  );
}
