import AskQuestion from "@/components/admin/AskQuestion";
// import PomodoroTimer from "@/components/Promodo";

export default function AskQuestions(){
  return (
    <main className="min-h-screen p-2">
      <h1 className="text-3xl mb-4 border-b-2 border-black capitalize font-bold">
        Ask Questions
      </h1>
      <input
      type="search"
      className="px-4 py-2 mb-4 "
      placeholder="Search Questions"
      ></input>
      <AskQuestion />
      {/* <PomodoroTimer /> */}
    </main>
  );
};