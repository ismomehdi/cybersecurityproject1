"use server";

import PocketBase from "pocketbase";
import { cookies as getCookies } from "next/headers";

export async function createPost(formData) {
  try {
    console.log("hereeee!");
    const text = formData.get("text");
    const pb = new PocketBase("http://127.0.0.1:8090");

    const cookies = await getCookies();
    const authCookie = cookies.get("pb_auth");

    if (!authCookie) {
      throw new Error("Not authenticated");
    }

    pb.authStore.loadFromCookie(`pb_auth=${authCookie.value}`);
    await pb.collection("posts").create({ text });
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't create post");
  }
}
