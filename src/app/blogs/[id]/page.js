"use client";

import { useEffect, useState } from "react";

export default function Blog({ params }) {
  const { id } = params; 
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-serif my-9">{post.title}</h1>
      
      <p>{post.body}</p>
    </div>
  );
}
