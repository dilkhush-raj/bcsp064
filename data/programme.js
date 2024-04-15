import Programme from "@/model/Programme";

export default async function ProgrammeData(){
  const data = await Programme.find();
  return data;
}