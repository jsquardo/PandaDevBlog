import { BlogDate } from "../../../components/BlogDate";

import { getTweets } from "lib/twitter";
import { allPosts } from "../../../.contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "../../../components/mdx-components";
import { Pagination } from "../../../components/Pagination";

export default async function Post({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const tweets = await getTweets(post.tweetIds);

  const canonicalUrl = `https://pandadev.dev/posts/${post.slug}`;
  const GITHUB_USERNAME = "jsquardo";
  const GITHUB_REPO = "pandadev.dev";
  const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}/edit/master/content/posts/${post.slug}.mdx`;
  const TWITTER_URL = `https://twitter.com/search?q=${encodeURIComponent(
    canonicalUrl
  )}`;

  return (
    <>
      <main className="dark:text-white">
        <h1 className="mb-7 mt-10 sm:text-4xl text-3xl text-black font-bold font-gil dark:text-white">
          {post.title}
        </h1>
        <p className="leading-7 mb-7 -mt-6 dark:text-white">
          <BlogDate date={post.date} minutes={post.readTime} />
        </p>
        <article className="prose dark:prose-invert w-full dark:text-white font-helv">
          <Mdx post={post} tweets={tweets} />
        </article>
        <footer className="mb-8 mt-6"></footer>
      </main>
      <Pagination page={post.slug} />
    </>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
}

export async function generateMetadata({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  const ogImage = `https://pandadev.dev/api/og?title=${post?.title}`;

  return {
    title: `${post?.title} - Johnny Squardo`,
    description: post?.excerpt,
    openGraph: {
      title: post?.title,
      type: "website",
      siteName: "Johnny Squardo",
      description: post?.excerpt,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pandadevv",
      title: post?.title,
      description: post?.excerpt,
      images: [ogImage],
    },
  };
}
