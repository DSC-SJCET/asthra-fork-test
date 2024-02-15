import * as React from 'react';

import { cn } from '~/lib/utils';

const GridContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('fixed -z-20 dark:bg-grid-lg-white/[0.1] bg-grid-lg-black/[0.1]', className)} {...props} />
));
GridContainer.displayName = 'GridContainer';

const Fog = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute -z-10 pointer-events-none inset-0 w-full h-full flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]',
      className,
    )}
    {...props}
  />
));
Fog.displayName = 'Fog';

const FogContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute -z-10 pointer-events-none inset-0 w-full h-full flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]',
      className,
    )}
    {...props}
  />
));
FogContainer.displayName = 'FogContainer';

export { GridContainer, Fog, FogContainer};
