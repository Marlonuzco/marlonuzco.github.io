import type { GroupProps } from '@/sections/Technologies/types';

export const Group = ({ group }: GroupProps) => (
  <article className="border-line bg-surface rounded-3xl border p-6">
    <h3 className="text-lg font-semibold">{group.title}</h3>
    <ul className="text-muted mt-4 space-y-2 text-sm leading-6">
      {group.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>
);
