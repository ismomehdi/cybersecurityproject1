import PocketBase from "pocketbase";
import { cookies as getCookies } from "next/headers";

async function getPosts() {
  const pb = new PocketBase("http://127.0.0.1:8090");

  // 1. Uncomment the following block of code to secure the /posts route.
  // API rules should also be set to allow only authenticated users to read posts.
  // See https://pocketbase.io/docs/api-rules-and-filters/
  //
  // const cookies = await getCookies();
  // const authCookie = cookies.get("pb_auth");

  // if (!authCookie) {
  //   return [];
  // }

  // // See https://github.com/pocketbase/js-sdk?tab=readme-ov-file#ssr-integration
  // pb.authStore.loadFromCookie(`pb_auth=${authCookie.value}`);

  const res = await pb.collection("posts").getFullList({
    sort: "-created",
    cache: "no-store",
  });
  return res;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="flex w-full justify-center">
      <div className="flex-shrink-0 flex-grow p-16 max-w-2xl">
        <h1 className="text-4xl text-center py-5">Add a post</h1>
        <div>
          <CreatePost />
          {posts?.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Post = ({ post }) => {
  return (
    <div className="rounded-lg my-5">
      <p className="text-xs text-zinc-400">{post.created}</p>
      <p className="text-lg">{post.text}</p>
    </div>
  );
};

const CreatePost = () => {
  return (
    <form className="flex flex-col gap-8 items-center">
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
};
