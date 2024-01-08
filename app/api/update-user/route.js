import { connectDB } from "@/utils/mongoose";
import User from "@/model/User";

export async function POST(request) {
    console.log(request);
//   await connectDB();
//   try {
//     for (let i = 0; i < req.body.length; i++) {
//       const user = await User.findOneAndUpdate(
//         { email: req.body[i].email },
//         req.body[i],
//         { new: true }
//       );
//     }
//     res.status(200).json({ message: "User updated successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }

  return NextResponse.json( { status: 200 });
}
