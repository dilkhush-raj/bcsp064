"use client"

import { useState } from 'react';
// import { useRouter } from 'next/router';
import { questionAction } from '@/utils/actions/question.action';

export default function AddQuestionForm() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

//   const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const questionData = {
      title,
      content,
      tags
    };

    const result = await questionAction(questionData);

    // if (result.success) {
    //   router.push(`/questions/${result.question._id}`);
    // }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />

      <input
        value={tags}
        onChange={(e) => setTags(e.target.value.split(','))}
        placeholder="Tags (comma separated)"
      />

      <button type="submit">Create Question</button>
    </form>
  );

}