import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import User from "@/model/User";

// To handle a GET request to /api
export async function GET(request, { params }) {
  await connectDB();
  const id = params.id; // It is slug not programmeId
  const user = await User.findOne({ email: id });
  return NextResponse.json({ user }, { status: 200 });
}
