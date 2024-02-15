import React from 'react';

import { cn } from '~/lib/utils';

const IntroTag = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('europa p-1 text-white font-light', className)} {...props} />
));
IntroTag.displayName = 'IntroTag';

const IntroTagContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));
IntroTagContainer.displayName = 'IntroTagContainer';

export { IntroTag, IntroTagContainer };
