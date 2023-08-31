import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import DraftBlogList from "@/components/DraftBlogList";
import DraftSuspense from "@/components/DraftSuspense";
import BlogList from "@/components/BlogList";

export const revalidate = 3600; // revalidate the data after time out


const query = groq`
*[_type =='post']{
  ...,
  author->,
  categories[]->,

} | order(_createdAt desc)
`;

export default async function Home() {
  const { isEnabled } = draftMode();

  // if draft is enabled
  if (isEnabled) {
    return (
      <DraftSuspense>
        <DraftBlogList />
      </DraftSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    <main>
      <BlogList posts={posts} />
    </main>
  );
}
