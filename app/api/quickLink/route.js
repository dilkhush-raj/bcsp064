import ImpLink from "@/model/impLink.model";
import { connectDB } from "@/utils/mongoose";
export const revalidate = 60;

export async function GET(request) {
  await connectDB();
  const fetch = await ImpLink.find();
  const data = fetch.sort((a, b) => a.name.localeCompare(b.name));
  return Response.json({ data });
}

export async function DELETE(request) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const id = url.searchParams.get("id");
  await connectDB();
  const deleteNotice = await ImpLink.findByIdAndDelete(id);
  return Response.json("Link has been deleted");
}
