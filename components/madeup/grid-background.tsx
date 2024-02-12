import * as React from 'react';

import { cn } from '~/lib/utils';

const GridContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('relative dark:bg-grid-white/[0.1] bg-grid-black/[0.1]', className)} {...props} />
));
GridContainer.displayName = 'GridContainer';

const Fog = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute pointer-events-none inset-0 w-full h-full flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]',
      className,
    )}
    {...props}
  />
));
Fog.displayName = 'Fog';

export { GridContainer, Fog };
