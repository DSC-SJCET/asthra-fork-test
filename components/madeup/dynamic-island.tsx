import * as React from 'react';

import { cn } from '~/lib/utils';

const Island = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    shadow?: boolean;
  }
>(({ className, children, shadow = false, ...props }, ref) => (
  <div className="relative">
    <span className={cn('absolute top-0 bottom-0 left-0 right-0 rounded-full after:rounded-full', shadow ? 'island-background' : '')} />
    <div
      ref={ref}
      className={cn('text-card-foreground bg-black rounded-full relative py-2 shadow-sm flex justify-center', className)}
      {...props}
    >
      {children}
    </div>
  </div>
));
Island.displayName = 'Island';

export { Island };
