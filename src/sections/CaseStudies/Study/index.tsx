import type { StudyProps } from '@/sections/CaseStudies/types';

export const Study = ({
  decisionsLabel,
  item,
  problemLabel,
  solutionLabel,
  technologiesLabel,
}: StudyProps) => (
  <article className="border-line bg-surface rounded-3xl border p-6 shadow-(--shadow) sm:p-8">
    <p className="text-accent text-sm font-semibold">{item.context}</p>
    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</h3>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div>
        <h4 className="text-sm font-semibold tracking-wide uppercase">{problemLabel}</h4>
        <p className="text-muted mt-2 leading-7">{item.problem}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold tracking-wide uppercase">{solutionLabel}</h4>
        <p className="text-muted mt-2 leading-7">{item.solution}</p>
      </div>
    </div>
    <h4 className="mt-6 text-sm font-semibold tracking-wide uppercase">{decisionsLabel}</h4>
    <ul className="text-muted mt-2 list-disc space-y-2 pl-5 text-sm leading-6">
      {item.decisions.map((decision) => (
        <li key={decision}>{decision}</li>
      ))}
    </ul>
    <h4 className="mt-6 text-sm font-semibold tracking-wide uppercase">{technologiesLabel}</h4>
    <ul className="mt-3 flex flex-wrap gap-2">
      {item.technologies.map((technology) => (
        <li
          className="border-line text-muted rounded-full border px-3 py-1 text-xs"
          key={technology}
        >
          {technology}
        </li>
      ))}
    </ul>
  </article>
);
