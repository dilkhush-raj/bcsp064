"use client"
import Trix from "@/components/Trix";
import { useState } from "react";

export default function AskQuestions(){
    const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the content here
    // Send content to your database
};
console.log(content);
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl my-4 mx-2 border-b-2 border-black capitalize font-bold">
        Ask Questions
      </h1>
        <Trix  value={content} onChange={setContent} />
    </main>
  );
};
