import type { ComponentType, SVGProps } from 'react';

import GithubSvg from './github.svg?react';
import LinkedinSvg from './linkedin.svg?react';

type IconProps = SVGProps<SVGSVGElement>;

const withProps = (Icon: ComponentType<IconProps>) => {
  const IconComponent = ({ className = '', ...props }: IconProps) => {
    return <Icon className={className} {...props} />;
  };

  return IconComponent;
};

export const Github = withProps(GithubSvg);
export const Linkedin = withProps(LinkedinSvg);
