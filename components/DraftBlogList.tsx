// import { useLiveQuery } from "next-sanity/preview"
import { groq } from "next-sanity";
import BlogList from "./BlogList";
import { client } from "@/sanity/lib/client";

export const revalidate = 0; // revalidate the data after time out

export default async function DraftBlogList() {
  const query = groq`
*[_type =='post' && ((_id in path("drafts.**")) || !(_id in path("drafts.**")))]{
  ...,
  author->,
  categories[]->,

} | order(_createdAt desc)
`;
  // TODO: fix live draft
  
  const posts = await client.fetch(query, {}, { cache: "no-cache" });
  // console.log("draft Posts >>>>", posts);
  // console.log("draft", posts.length);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
