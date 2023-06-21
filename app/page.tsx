import { allPosts } from "../.contentlayer/generated";
import { BlogDate } from "@/components/BlogDate";
import Link from "next/link";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        {allPosts
          .sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
              return -1;
            }

            return 1;
          })
          .map((post) => (
            <article key={post._id}>
              <h2 className="text-xxl mt-10 mb-2 font-bold font-serif">
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-ctp-green dark:text-ctp-green"
                >
                  {post.title}
                </Link>
              </h2>
              <BlogDate date={post.date} minutes={post.readTime} />
              <p className="mb-7 mt-2 text-base text-gray-700 dark:text-gray-400">
                {post.excerpt}
              </p>
            </article>
          ))}
      </main>
    </>
  );
}
