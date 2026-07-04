import Link from "next/link";

import { formatPostDate, getAllPosts } from "~/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return <p className="text-fg4">Posts coming soon.</p>;
  }

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex items-baseline justify-between gap-4 border-b border-bg2 py-2 no-underline first:pt-0 sm:w-[calc(100%+7rem)]"
        >
          <span className="font-bold text-fg0 transition-colors group-hover:text-fg4">
            {post.title}
          </span>
          <span className="flex-shrink-0 text-sm text-fg4">
            {formatPostDate(post.date)}
          </span>
        </Link>
      ))}
    </div>
  );
}
