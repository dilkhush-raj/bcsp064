"use client"
import { useState  } from "react";

export default function Accounts() {

  const labelStyle = 'border-1 border-black';

  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    profileImage: "",
    semester: "",
    about: "",
    rc: "",
    github: "",
    linkedin: "",
    portfolio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };



  return (
    <main className="min-h-screen max-w-6xl mx-auto">
      <h1 className="text-center text-3xl font-bold p-2 mb-5 m-auto max-w-4xl">
        Update Your Account
      </h1>

      <form
        className=" grid grid-cols-[100px_1fr] max-w-2xl mx-auto border border-black p-4 gap-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <label className={labelStyle}>Name</label>
        <input
          type="text"
          name="name"
          value={formData?.name}
          onChange={handleChange}
        />
        <button type="submit" className=" col-span-2 bg-[#465fc8] text-white font-bold rounded-sm px-4 py-2">
          Submit
        </button>
      </form>
    </main>
  );
}