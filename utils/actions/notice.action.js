"use server";
import { z } from "zod";
import Notice from "@/model/Notice";
import { connectDB } from "../mongoose";

// Define a schema for the user input using zod
const userInputSchema = z.object({
  id: z.string()
});

// Define a server action to handle the form submission
export async function deleteNoticeAction(formData) {
  // Parse and validate the user input
  const userInput = userInputSchema.parse({
    id: formData.get("id")
  });

  // Connect to the database
  await connectDB();

  try {
    const deleteNotice = await Notice.findByIdAndDelete(userInput.id);
    // Return a success message
    return { message: "Notice deleted successfully!" };
  } catch (error) {
    // Return an error message
    return { message: "Something went wrong. Please try again." };
  }
}