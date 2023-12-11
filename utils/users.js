import { connectDB } from "@/utils/mongoose";
import User from "@/model/User";
export const revalidate = 60;

async function getUsersData() {
  try {
    await connectDB();
    const data = await User.find();
    return data; // Return the data
  } catch (error) {
    console.error("Failed to get user data:", error);
  }
}

export default getUsersData; // Export the function
