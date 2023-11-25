export const revalidate = 60;

async function getData() {
  const res = await fetch("http://localhost:3000/api/users");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const userData = async () => {
  const data = await getData();
  return data;
};


async function getUsersData() {
  try {
    const data = await userData();
    return data;  // Return the data
  } catch (error) {
    console.error("Failed to get user data:", error);
  }
}

export default getUsersData;  // Export the function
