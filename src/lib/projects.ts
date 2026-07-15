import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { getPostBySlug } from "~/lib/posts";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  deployedUrl?: string;
  projectPageSlug?: string;
  image?: string;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\[\^[^\]]*\]/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getExcerpt(markdown: string): string {
  const firstParagraph =
    markdown.split(/\n\s*\n/).find((p) => p.trim().length > 0) ?? "";
  return stripMarkdown(firstParagraph);
}

export function getAllProjects(): Project[] {
  const slugs = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  return slugs.map((slug) => {
    const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    const projectPageSlug = data.projectPageSlug as string | undefined;

    let description = getExcerpt(content);
    if (projectPageSlug) {
      try {
        description = getExcerpt(getPostBySlug(projectPageSlug).content);
      } catch {
        // fall back to the project's own description
      }
    }

    return {
      slug,
      title: data.title as string,
      description,
      tags: (data.tags as string[] | undefined) ?? [],
      deployedUrl: data.deployedUrl as string | undefined,
      projectPageSlug,
      image: data.image as string | undefined,
    };
  });
}
