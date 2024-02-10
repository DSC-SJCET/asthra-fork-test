import * as React from "react"

import { cn } from "~/lib/utils"

const AnimateBorder = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        animate?: boolean
    }
>(({ className, children, animate, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative",
            className
        )}
        {...props}
    >
        <div className="">
            {children}
        </div>
    </div>
))
AnimateBorder.displayName = "AnimateBorder"

export { AnimateBorder }