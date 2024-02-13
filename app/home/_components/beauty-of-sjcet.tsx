"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './styles.module.css';

export function BeautyOfSJCET() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: "/sjcet/1.jpeg",
            scale: scale4
        },
        {
            src: "/sjcet/2.jpeg",
            scale: scale5
        },
        {
            src: "/sjcet/3.jpg",
            scale: scale6
        },
        {
            src: "/sjcet/4.jpg",
            scale: scale5
        },
        {
            src: "/sjcet/5.jpg",
            scale: scale6
        },
        {
            src: "/sjcet/6.jpg",
            scale: scale8
        },
        {
            src: "/sjcet/7.jpeg",
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={"h-[300vh] relative"}>
            <div className={"sticky overflow-hidden top-0 h-[100vh]"}>
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div key={(index)} style={{ scale }} className={`w-full h-full top-0 absolute flex items-center justify-center ${styles.el}`}>
                            <div className={`relative ${styles.imageContainer}`}>
                                <Image
                                    src={src}
                                    className='object-cover'
                                    fill
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}