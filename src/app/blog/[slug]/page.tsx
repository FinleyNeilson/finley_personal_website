import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { formatPostDate, getAllPosts, getPostBySlug } from "~/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-baseline justify-between gap-4 sm:w-[calc(100%+7rem)]">
        <h1 className="font-bold text-fg0">{post.title}</h1>
        <span className="flex-shrink-0 text-sm text-fg4">
          {formatPostDate(post.date)}
        </span>
      </div>
      <div className="blog-content flex flex-col gap-4 leading-relaxed text-fg1">
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </div>
  );
}
