import NotFoundImage from "@/assets/not-found";

export default async function NotFound() {
  return (
    <main className="min-h-[calc(100vh-100px)] flex items-center justify-center">
        <NotFoundImage />
    </main>
  )
}