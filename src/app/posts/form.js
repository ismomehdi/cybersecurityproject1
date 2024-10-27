"use client";

import { useRouter } from "next/navigation";
import { createPost } from "./actions";

export default function PostForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://127.0.0.1:8090/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: event.target.text.value,
      }),
    });

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center">
      <textarea
        name="text"
        className="border border-gray-300 p-2 rounded w-full"
        placeholder="What's on your mind?"
      />
      <button
        type="submit"
        className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded max-w-xs w-full"
      >
        Post
      </button>
    </form>
  );
}
