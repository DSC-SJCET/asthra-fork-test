'use client';

import * as React from 'react';

import { cn } from '~/lib/utils';

export const BorderBeam = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('relative', className)} {...props}>
      {children}
      <div className="absolute rounded-sm border-beam"></div>
    </div>
  ),
);
BorderBeam.displayName = 'BorderBeam';
