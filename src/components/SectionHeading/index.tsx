import type { SectionHeadingProps } from './types';

export const SectionHeading = ({ intro, title }: SectionHeadingProps) => (
  <div className="max-w-2xl">
    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    <p className="text-muted mt-4 text-base leading-7">{intro}</p>
  </div>
);
