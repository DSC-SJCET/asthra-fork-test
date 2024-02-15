'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

import { motion, Variants } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';

import { CursorController, CursorVarient } from '~/lib/cursor-control';

export const Cursor = () => {
  const { varient: cursorVariant, setVarient } = CursorController();
  const [mousePosition, setMousePosition] = useState({ x: -150, y: -150, visible: true });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        visible: true,
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseenter', mouseMove);
    // window.addEventListener('mousedown', () => setMousePosition({
    //   x: -150,
    //   y: -150,
    //   visible:false
    // }));
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: '32px',
      width: '32px',
    },
    node: {},
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      background: 'white',
      mixBlendMode: 'difference',
    },
    link: {
      height: 90,
      width: 90,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      background: 'white',
      color: 'black',
    },
  };

  return (
    <motion.div className="cursor"  variants={variants as Variants} animate={cursorVariant}>
      <MoveUpRight />
    </motion.div>
  );
};

const CursorContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { varient: CursorVarient }>(
  ({ varient, ...props }, ref) => {
    const { setDefault, setVarient } = CursorController();
    return <div ref={ref} onMouseEnter={() => setVarient(varient)} onMouseLeave={setDefault} {...props} />;
  },
);
CursorContainer.displayName = 'CursorContainer';

export { CursorContainer };
