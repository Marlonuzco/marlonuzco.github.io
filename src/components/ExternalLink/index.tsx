import type { ExternalLinkProps } from './types';

export const ExternalLink = ({ children, className, href }: ExternalLinkProps) => (
  <a className={className} href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);
