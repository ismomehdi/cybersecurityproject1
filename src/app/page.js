"use client";

import { login } from "./actions";
import { useState } from "react";

export default function Home() {
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    try {
      // 4. Storing plain text passwords in localStorage is a bad idea.
      // Remove the following line of code to fix this issue.
      localStorage.setItem("password", formData.get("password"));

      await login(formData);
    } catch (error) {
      console.log(error);
      setError("Couldn't log in");
    }
  };

  return (
    <div className="flex w-full justify-center">
      <form className="flex flex-col gap-8" action={handleSubmit}>
        <h1>Sign In (only for employees)</h1>
        <input
          className="border border-gray-300 p-2 rounded"
          placeholder="Username"
          name="username"
          type="text"
        />
        <input
          className="border border-gray-300 p-2 rounded"
          placeholder="Password"
          name="password"
          type="password"
        />
        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded max-w-xs"
        >
          Login
        </button>
        <p className="text-red-500">{error}</p>
      </form>
    </div>
  );
}
