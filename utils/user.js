import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export const revalidate = 60;

async function getData({ email }) {
  const res = await fetch(process.env.DOMAIN + "/api/users/" + email);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const userData = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return false;
  const email = session?.user?.email;
  const data = await getData({ email });
  return data;
};


async function getUserData() {
  try {
    const data = await userData();
    return data;  // Return the data
  } catch (error) {
    console.error("Failed to get user data:", error);
  }
}

export default getUserData;  // Export the function


// export default userData;
