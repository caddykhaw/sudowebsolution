import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import BlogPost from "@/components/BlogPost";
import { getAllMdx, getSerializedMdx } from "@/lib/mdx";

interface BlogPostProps {
  post: {
    frontMatter: {
      title: string;
      description?: string;
      publishedDate?: string;
      coverImage?: string;
      coverImageUrl?: string;
    };
    mdxSource: any;
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function Post({ post }: BlogPostProps) {
  return <BlogPost post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllMdx();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug as string,
      },
    })),
    fallback: "blocking", // or false if you only want pre-rendered paths
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps, Params> = async ({
  params,
}) => {
  try {
    if (!params?.slug) {
      return { notFound: true };
    }

    const post = await getSerializedMdx(params.slug);

    return {
      props: {
        post,
      },
      revalidate: 60, // Incremental Static Regeneration every 60 seconds
    };
  } catch (error) {
    console.error(`Error getting post for slug ${params?.slug}:`, error);
    return {
      notFound: true,
    };
  }
};
