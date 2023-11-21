"use client";

export default function DeleteProgramme({ id }) {
  const deleteBlog = async (id) => {
    console.log(id);
    const res = fetch(process.env.DOMAIN + "/api/programme/" + id , {
      method: "DELETE",
      // //@ts-ignore
    });
  };
  const handleDelete = async () => {
    await deleteBlog(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
}
