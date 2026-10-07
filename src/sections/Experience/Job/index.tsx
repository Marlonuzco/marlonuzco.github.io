import type { JobProps } from '@/sections/Experience/types';

export const Job = ({ job }: JobProps) => (
  <li className="relative pb-10 pl-8 last:pb-0">
    <span className="bg-accent absolute top-2 left-0 size-2.5 -translate-x-1/2 rounded-full" />
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="text-xl font-semibold">{job.company}</h3>
      <p className="text-primary text-sm font-medium">{job.period}</p>
    </div>
    <p className="text-muted mt-1 text-sm">{job.role}</p>
    <p className="text-muted text-sm">{job.location}</p>
    <p className="mt-3 leading-7">{job.summary}</p>
    <ul className="text-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
      {job.highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  </li>
);
