import Programme from "@/model/Programme";

export default async function ProgrammeData(){
  const data = await Programme.find();
  console.log(data);
  return data;
}