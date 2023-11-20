import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import User from "@/model/User";

// To handle a GET request to /api
export async function GET(request) {
  await connectDB();
  const allUser = await User.find();
  return NextResponse.json({ allUser }, { status: 200 });
}