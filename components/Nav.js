import Navbar from "./Navbar";
import getUserData from "@/utils/user";

export default async function Nav(){
    const data = await getUserData();
    const isAdmin = data?.role === "admin" || false;
    return <Navbar isAdmin={isAdmin} />
}