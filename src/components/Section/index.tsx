import type { SectionProps } from './types';

export const Section = ({ children, id }: SectionProps) => (
  <section className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24" id={id}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);
