import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Programme from "@/model/Programme";

// To handle a GET request to /api
export async function GET(request, { params }) {
  await connectDB();
  const slug = params.programmeId; // It is slug not programmeId
  const programme = await Programme.findOne({ slug: slug });
  return NextResponse.json({ programme }, { status: 200 });
}

// To handle a DELETE request to /api/[programmeId]
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { programmeId } = params; // Extract the ID from the request query

    // Find the Programme by ID and delete it
    const deletedProgramme = await Programme.findByIdAndDelete(programmeId);

    if (deletedProgramme) {
      return NextResponse.json(
        { message: "Programme deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Programme not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete Programme" },
      { status: 500 }
    );
  }
}
