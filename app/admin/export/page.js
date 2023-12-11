import getUsersData from "@/utils/users"
import Export from "./Export";

export default async function App() {
  const data = await getUsersData();

  return (
    <div className=" min-h-screen" >
      <Export userData={data} />
    </div>
  )
}
