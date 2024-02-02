"use server";
import { revalidatePath } from "next/cache";
import Notice from "@/model/Notice";
import ImpLink from "@/model/impLink.model";
import { connectDB } from "./mongoose";
import { z } from "zod"

export async function createNotice(prevState, formData) {
  const schema = z.object({
    name: z.string().min(3),
    programme: z.string(),
    semester: z.array(z.string()).min(1),
    link: z.string(),
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
    programme: formData.get("programme"),
    semester: formData.getAll("cycle"),
    link: formData.get("link"),
  });
  if (!parse.success) {
    console.log(parse.error);
    return { message: "Form data is not valid" };
  }
  const data = parse.data;
  try {
    await connectDB();
    const notice = new Notice(data);
    await notice.save();
    revalidatePath("/");
    return { message: `Added Notice ${data.name}` };
  } catch (e) {
    return { message: "Failed to add notice" };
  }
}

export async function createLink(prevState, formData) {
  const schema = z.object({
    name: z.string().min(3),
    link: z.string().min(3),
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
    link: formData.get("link"),
  });
  if (!parse.success) {
    console.log(parse.error);
    return { message: "Form data is not valid" };
  }
  const data = parse.data;
  try {
    await connectDB();
    const notice = new ImpLink(data);
    await notice.save();
    revalidatePath("/");
    return { message: `Added Link ${data.name}` };
  } catch (e) {
    return { message: "Failed to add Link" };
  }
}
