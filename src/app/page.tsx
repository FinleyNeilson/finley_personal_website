import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-mono text-2xl font-bold tracking-wide text-fg0 uppercase">
        Finley John Neilson
      </h1>
      <div className="flex flex-col gap-4 leading-relaxed text-fg1">
        <p>I&apos;m a developer based in Auckland. Write your bio here.</p>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is
          there anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?
        </p>
        <p>
          Right now I&apos;m working on [thing]. Check out my{" "}
          <Link href="/projects">projects</Link> or{" "}
          <Link href="/blog">read my blog</Link>.
        </p>
      </div>
    </div>
  );
}
