import Notice from "@/model/Notice";
import { connectDB } from "@/utils/mongoose";

export async function GET(request) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const programme = url.searchParams.get("programme");
  const role = url.searchParams.get("role");
  const page = url.searchParams.get("page");
  const limit = url.searchParams.get("limit");

  const skip = (page - 1) * limit;

  await connectDB();

  let data, totalRecords;

  if (!programme || role === "admin") {
    data = await Notice.find().sort({ createdOn: -1 }).skip(skip).limit(limit);
    totalRecords = await Notice.countDocuments();
  } else {
    data = await Notice.find({
      $or: [
        { programme: programme },
        { programme: "all" },
      ],
    })
      .sort({ createdOn: -1 })
      .skip(skip)
      .limit(limit);
    totalRecords = await Notice.countDocuments({
      $or: [
        { programme: programme },
        { programme: "all" },
      ],
    });
  }

  return Response.json({ data, totalRecords });
}

export async function DELETE(request) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const id = url.searchParams.get("id");
  await connectDB();
  const deleteNotice = await Notice.findByIdAndDelete(id);
  return Response.json("Notice has been deleted");
}
