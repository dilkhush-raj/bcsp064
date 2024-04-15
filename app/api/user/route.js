import User from "@/model/User";
import { connectDB } from "@/utils/mongoose";

export async function GET(request) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const email = url.searchParams.get("email");
  await connectDB();

  const data = await User.findOne({ email: email });

  return Response.json({ data });
}