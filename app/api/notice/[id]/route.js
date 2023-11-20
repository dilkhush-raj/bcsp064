import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Notice from "@/model/Notice";

// To handle a GET request to /api
export async function GET(request, { params }) {
  await connectDB();
  const id = params.id; // It is slug not programmeId
  const notice = await Notice.find({ programme: id });
  return NextResponse.json({ notice }, { status: 200 });
}
