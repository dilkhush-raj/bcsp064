import ActiveLink from "./ActiveLink";
import getUserData from "@/utils/user";

export default async function AdminLink() {
  const data = await getUserData();
  if (data?.user?.role === "admin") {
    return <ActiveLink />;
  } else null;
}