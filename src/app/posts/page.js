import { cookies as getCookies } from "next/headers";
import { logout } from "../actions";

// async function getPosts() {
//   // const res = await fetch("/api/posts", {
//   //   cache: "no-store",
//   // });

//   const res = await pb.collection("posts").getFullList({
//     sort: "-created",
//     cache: "no-store",
//   });
//   return res;
// }

export default async function Page() {
  const cookies = await getCookies();
  const cookie = cookies.get("pb_auth");
  // const posts = await getPosts();

  return (
    <div className="flex w-full justify-center">
      <div className="flex-shrink-0 flex-grow p-16 max-w-2xl">
        <h1 className="text-4xl text-center py-5">Add a post</h1>
        {/* <CreatePost /> */}
        <div>
          {/* {posts?.map((post) => {
            <p key={post.id}>{post.text}</p>;
            // return <Post key={post.id} post={post} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

const Post = ({ post }) => {
  return (
    <Link href={`./${post.id}`}>
      <div className="rounded-lg my-5">
        <p className="text-xs text-zinc-400">{post.created}</p>
        <p className="text-lg">{post.text}</p>
      </div>
    </Link>
  );
};
