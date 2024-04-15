import ScheduleComponent from "@/components/ScheduleComponent";

const page = async () => {
  return (
    <main className="min-h-screen p-2">
      <h1 className="mx-2 flex justify-between my-2 text-3xl font-bold border-b-2 border-black ">
        Schedule
      </h1>
      <ScheduleComponent />
    </main>
  );
};
export default page;
