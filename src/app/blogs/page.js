"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl my-10">Blog Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            {index + 1}. <Link href={`/blogs/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}