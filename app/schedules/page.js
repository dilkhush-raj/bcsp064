import Schedule from "@/model/schedule.model";
import { connectDB } from "@/utils/mongoose";

const page = async () => {
  await connectDB ();
  const data = await Schedule.find();
  console.log(data);

  return(
    <main>
      <h1>Schedules</h1>
    </main>
  )
}
export default page;