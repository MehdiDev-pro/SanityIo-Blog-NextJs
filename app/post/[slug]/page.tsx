import Article from "@/components/Article";
import ButtonReturn from "@/components/Buttons";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type Props = {
  params: {
    slug: string;
  };
};

const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
      ...,
      author->,
      categories[]->,
    
    }`;

export const revalidate = 30; // revalidate the data after time out

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await client.fetch(query, { slug });
  if (!post.title) {
    return {
      metaTitle: "Post Not Found",
    };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

// SSG
export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']{
      slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoute = slugs.map((slug) => slug.slug.current);
  return slugRoute.map((slug) => ({
    slug: slug,
  }));
}

export default async function Post({ params: { slug } }: Props) {
  const post = await client.fetch(query, { slug });
  return (
    <>
      <div className="relative bottom-5 left-10">
        <ButtonReturn to="/" title="Return Home" />
      </div>
      <Article post={post} />
    </>
  );
}
