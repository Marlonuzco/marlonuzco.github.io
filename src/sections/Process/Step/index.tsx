import type { StepProps } from '@/sections/Process/types';

export const Step = ({ index, step }: StepProps) => (
  <li className="relative pb-8 pl-8 last:pb-0">
    <span className="border-line bg-surface text-accent absolute top-0 left-0 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border text-xs font-semibold">
      {String(index + 1).padStart(2, '0')}
    </span>
    <h3 className="text-lg font-semibold">{step.title}</h3>
    <p className="text-muted mt-2 text-sm leading-6">{step.description}</p>
  </li>
);
