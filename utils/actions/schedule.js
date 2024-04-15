"use server";
import { z } from "zod";
import Schedule from "@/model/schedule.model";

// Define a schema for the user input using zod
const userInputSchema = z.object({
  title: z.string(),
  programme: z.string(),
  course: z.string(),
  group: z.string(),
  start: z.date(),
  end: z.date(),
  students: z.array(z.object({ enrolment: z.string(), name: z.string() })),
});

export async function createSchedule(previousState, formData) {
  // console.log(previousState, formData);
  const data = Object.fromEntries(formData.entries());
// const students = formData.
  const title = formData.get("title");
  console.log(studentData);
}

