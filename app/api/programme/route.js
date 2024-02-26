import Programme from "@/model/Programme";
import { connectDB } from "@/utils/mongoose";

export async function GET(request) {
  await connectDB();
  const res = await Programme.find();
  const programme = res.map(program => {
    return {
      _id: program._id,
      name: program.name,
      slug: program.slug
    }
  });
 
  return Response.json({ programme })
}