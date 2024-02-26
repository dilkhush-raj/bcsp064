import AskQuestion from "@/components/admin/AskQuestion";

export default function AskQuestions() {
  return (
    <main className="min-h-screen p-2">
      <h1 className="mb-4 text-3xl font-bold capitalize border-b-2 border-black">
        Ask Questions
      </h1>
      <div className="flex items-center gap-2">
        <AskQuestion />
        <input
          type="search"
          className="px-4 py-2"
          placeholder="Search Questions"
        ></input>
      </div>
    </main>
  );
}
