import { Breadcrumb } from "antd";
import Link from "next/link";

export default function Course(){
    const breadcrumb = [
        {
          title: <Link href="/">Home</Link>,
        },
        {
          title: <Link href="/programme">Programme</Link>,
        },
      ]
    return(
        <main className="min-h-screen"><Breadcrumb
        items={breadcrumb}
        className="p-2 md:px-4 bg-gray-300"
      />
            <h1>Under Construction</h1>
        </main>
    )
}