import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkCodeTitles from "remark-code-titles";
import mdxPrism from "mdx-prism";
import readingTime from "reading-time";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    excerpt: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
    tweetIds: {
      type: "array",
      resolve: (post) => {
        const tweetMatches = post.body.raw.match(
          /<StaticTweet\sid="[0-9]+"\s\/>/g
        );
        return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);
      },
    },
    readTime: {
      type: "number",
      resolve: (post) => readingTime(post.body.raw).minutes,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkCodeTitles],
    rehypePlugins: [rehypeSlug, mdxPrism],
  },
});
