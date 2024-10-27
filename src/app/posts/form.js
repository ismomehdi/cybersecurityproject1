"use client";

import { useRouter } from "next/navigation";
import { createPost } from "./actions";

export default function PostForm() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    try {
      await createPost(formData);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-8 items-center">
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
