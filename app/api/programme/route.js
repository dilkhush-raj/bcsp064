import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Programme from "@/model/Programme";
export const revalidate = 60

// To handle a GET request to /api
export async function GET(request) {
  await connectDB();
  const allProgramme = await Programme.find();
  return NextResponse.json({ allProgramme }, { status: 200 });
}

export async function POST(req, res) {
  await connectDB();

  try {

    let ReadableStream = await req.body;
    let data = await new Response(ReadableStream).json();

    const programme = new Programme(data);
      await programme.save();

    return NextResponse.json(
      { message: "Programme added successfully" },
      { status: 201 }
    ); // 201 status code indicates successful resource creation
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create a new Programme" },
      { status: 500 }
    ); // 500 status code for internal server error
  }
}
