import Schedule from "@/model/schedule.model";
import { connectDB } from "@/utils/mongoose";

export async function GET(request) {
  await connectDB();
  const schedule = await Schedule.find();
 
  return Response.json({ schedule })
}

export async function POST(req, res){

}