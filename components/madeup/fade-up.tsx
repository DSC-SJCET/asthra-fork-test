import { HTMLMotionProps, motion } from "framer-motion";

interface FramerMotionProps extends HTMLMotionProps<"div"> { }

const AnimateFadeUp: React.FC<FramerMotionProps> = ({ ...props }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        {...props}
    />
)
AnimateFadeUp.displayName = 'AnimateFadeUp';

export { AnimateFadeUp };