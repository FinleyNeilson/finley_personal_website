import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 leading-relaxed text-fg1">
        <p>
          I&#39;m a software developer and honours student at the University of
          Auckland. I love problem solving, especially when the solution can
          be useful for other people. My honours dissertation is on{" "}
          <Link href="/projects">GeoScratch</Link>, and I&#39;m currently expanding its
          functionality and preparing a user study for it. Outside of that, I&#39;m working on the{" "}
          <a
            href="https://github.com/UoaWDCC/lug"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linux User Group WDCC project
          </a>{" "}
          and trying to improve on my 8.7/9 GPA for my ordinary coursework.
        </p>
        <p>
          Outside of work, I&#39;m usually running or lifting weights, watching{" "}
          <a
            href="https://letterboxd.com/finleyiscool/"
            target="_blank"
            rel="noopener noreferrer"
          >
            movies
          </a>
          , or{" "}
          <a
            href="https://www.goodreads.com/user/show/106020046-finley-neilson"
            target="_blank"
            rel="noopener noreferrer"
          >
            reading
          </a>
          . I worked as a chef before pursuing computer science and software
          development and still love cooking at home. I also play piano and
          listen to a lot of music.
        </p>
        <p>
          Check out my{" "}
          <Link href="/projects">projects</Link>,{" "}
          <Link href="/blog">read my blog</Link>, or take a look at my{" "}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>.
        </p>
      </div>
    </div >
  );
}
