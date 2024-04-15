import StudentTable from "@/components/StudentTable";
import User from "@/model/User";
const page = async () => {
  const studentsData = await User.find({ role: "student" });
  // const studentData = studentsData.map((student) => student.__dict__);

  return (
    <main className="min-h-screen p-2 ">
      <StudentTable students={studentsData} />
    </main>
  );
};

export default page;
