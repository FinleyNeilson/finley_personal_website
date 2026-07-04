import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
}

export interface Post extends PostMeta {
  content: string;
}

function readPostFile(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
}

export function getAllPosts(): PostMeta[] {
  const slugs = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  return slugs
    .map((slug) => {
      const { data } = readPostFile(slug);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const { data, content } = readPostFile(slug);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    content,
  };
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
