import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { type Project } from "~/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6 rounded-lg border border-bg2 bg-bg1/40 p-6 sm:w-[calc(100%+7rem)] sm:flex-row sm:items-start">
      {project.image && (
        <div className="relative aspect-[3/2] w-full flex-shrink-0 overflow-hidden rounded-md sm:w-72">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4">
        {project.deployedUrl ? (
          <a
            href={project.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-1 text-lg font-bold text-accent-bright no-underline"
          >
            {project.title}
            <FiArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : (
          <span className="text-lg font-bold text-accent-bright">
            {project.title}
          </span>
        )}

        <p className="text-fg4">
          {project.description}
          {project.projectPageSlug && (
            <>
              {" "}
              <Link
                href={`/blog/${project.projectPageSlug}`}
                className="whitespace-nowrap text-fg4 underline decoration-dotted underline-offset-4 hover:text-fg1"
              >
                Continue reading →
              </Link>
            </>
          )}
        </p>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="select-none whitespace-nowrap rounded-full bg-bg1 px-3 py-1 font-mono text-sm text-pink"
              >
                <span className="mr-1.5">◉</span>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
