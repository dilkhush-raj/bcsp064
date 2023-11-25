"use client";

export default function DeleteProgramme({ id }) {
  const deleteBlog = async (id) => {
    console.log(id);
    const res = fetch(process.env.NEXTAUTH_URL + "/api/programme/" + id , {
      method: "DELETE",
    });
  };
  const handleDelete = async () => {
    await deleteBlog(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
}
