"use server";

import { redirect } from "next/navigation";
import PocketBase from "pocketbase";
import { cookies } from "next/headers";

export async function login(formData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const pb = new PocketBase("http://127.0.0.1:8090");

    const { token, record: model } = await pb
      .collection("users")
      .authWithPassword(username, password);

    const cookie = JSON.stringify({ token, model });
    const userCookies = await cookies();

    userCookies.set("pb_auth", cookie, {
      secure: true,
      path: "/",
      sameSite: "strict",
      httpOnly: true,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't log in");
  }

  redirect("/posts");
}

export async function logout() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  pb.authStore.clear();
  cookies().delete("pb_auth");
  redirect("/");
}
