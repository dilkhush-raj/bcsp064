import getUsersData from "@/utils/users"
import Export from "./Export";

export default async function App() {
  const data = await getUsersData();
  console.log(data);

  return (
    <div className=" min-h-screen" >
      <Export userData={data} />
    </div>
  )
}
