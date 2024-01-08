// actions.ts
"use server";
import { z } from "zod";
import User from "@/model/User";
import { connectDB } from "../mongoose";

// Define a schema for the user input using zod
const userInputSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  enrolment: z.string().transform(Number),
  programme: z.string().min(3),
  mobile: z.string().transform(Number),
  email2: z.string().email().optional(),
  address: z.string().min(10).optional(),
});

// Define a server action to handle the form submission
export async function submitForm(formData) {
  // Parse and validate the user input
  const userInput = userInputSchema.parse({
    email: formData.get("email"),
    name: formData.get("name"),
    enrolment: formData.get("enrolment"),
    programme: formData.get("programme"),
    mobile: formData.get("mobile"),
    email2: formData.get("email2"),
    address: formData.get("address"),
  });

  // Connect to the database
  await connectDB();

  // Find and update the user document by email with the input data
  // Use the option { new: true } to return the updated document
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: userInput.email }, // filter by email
      userInput, // update with the input data
      { new: true } // return the updated document
    );
    // Return a success message
    return { message: "User updated successfully!" };
  } catch (error) {
    // Return an error message
    return { message: "Something went wrong. Please try again." };
  }
}