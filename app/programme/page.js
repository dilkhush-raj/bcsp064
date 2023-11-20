import Link from "next/link";
import { Breadcrumb } from "antd";
import AllProgramme from "@/components/AllProgramme";

export default async function Programme() {
  const breadcrumb = [
    {
      title: <Link href="/">Home</Link>,
    },
    {
      title: "Programme",
    },
  ]
  return (
    <main className="min-h-screen">
      <Breadcrumb
        items={breadcrumb}
        className="p-2 md:px-4 bg-gray-300"
      />
      <AllProgramme />
    </main>
  );
}
