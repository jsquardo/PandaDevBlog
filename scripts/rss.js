const { promises: fs } = require("fs");
const { join } = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

const postDirectory = join(process.cwd(), "../content/posts");

async function getPostSlugs() {
  return await fs.readdir(postDirectory);
}

async function generate() {
  const feed = new RSS({
    title: "Panda Dev (Johnny Squardo)",
    site_url: "https://pandadev.dev",
    feed_url: "https://pandadev.dev/feed.xml",
  });

  const slugs = await getPostSlugs();

  await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = join(postDirectory, slug);
      const fileContents = await fs.readFile(fullPath, "utf8");

      const { data } = matter(fileContents);

      feed.item({
        title: data.title,
        url: "https://pandadev.dev/posts/" + slug.replace(/\.mdx?/, ""),
        date: data.date,
        description: data.excerpt,
      });
    })
  );

  return await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
