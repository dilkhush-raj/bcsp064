import AllProgramme from "@/components/Programmes";

export default async function Programme() {
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl mt-2 mb-4 mx-2 border-b-2 border-black uppercase font-bold">All Programmes</h1>
      <AllProgramme />
    </main>
  );
}
