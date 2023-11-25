import getUsersData from "@/utils/users"
import Export from "./Export";

export default async function App() {
  const data = await getUsersData();
  console.log(data);

  return (
    <div >
      <Export userData={data} />
    </div>
  )
}
