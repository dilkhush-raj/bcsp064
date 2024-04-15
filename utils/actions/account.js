"use server";
import { z } from "zod";
import User from "@/model/User";
import { connectDB } from "../mongoose";

const userInputSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  enrolment: z.string().transform(Number),
  programme: z.string().min(1),
  mobile: z.string().transform(Number),
  email2: z.string().email().optional(),
  address: z.string().optional(),
});

export async function submitForm(formData) {
  const userInput = userInputSchema.parse({
    email: formData?.get("email"),
    name: formData?.get("name"),
    enrolment: formData?.get("enrolment"),
    programme: formData?.get("programme"),
    mobile: formData?.get("mobile"),
    email2: formData?.get("email2"),
    address: formData?.get("address"),
  });
  await connectDB();
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: userInput.email },
      userInput,
      { new: true } 
    );
    return { message: "User updated successfully!" };
  } catch (error) {
    return { message: "Something went wrong. Please try again." };
  }
}