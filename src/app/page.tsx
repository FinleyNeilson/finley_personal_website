import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 leading-relaxed text-fg1">
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <p>
          No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is
          there anyone who loves or pursues or desires to obtain pain of itself.
        </p>
        <p>
          Right now I&apos;m working on [thing]. Check out my{" "}
          <Link href="/projects">projects</Link> or{" "}
          <Link href="/blog">read my blog</Link>.
        </p>
      </div>
    </div >
  );
}
