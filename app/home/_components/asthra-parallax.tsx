"use client"
import { ParallaxText } from "~/components/madeup/text-parallax";

interface ParallaxTextProps {
    1: string
    2: string
    3: string
    4: string
}

export const AstraParallax:React.FC<ParallaxTextProps> =  (props) => {
    const sliderText =
        "text-transparent duration-1000 bg-gradient-to-tr cursor-default text-edge-outline whitespace-nowrap bg-clip-text";

    return (
        <div className="my-40 overflow-hidden">
            <ParallaxText baseVelocity={2}>
                <span className={`${sliderText} to-blue-600 from-teal-300`}>
                {props["1"]}
                </span>
                {props["2"]}
            </ParallaxText>
            <ParallaxText baseVelocity={-3}>
                <span className={`${sliderText} to-orange-600 from-yellow-400`}>
                {props["3"]}
                </span>
                {props["4"]}
            </ParallaxText>
        </div>
    )
}