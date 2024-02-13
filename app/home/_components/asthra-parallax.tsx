"use client"
import { ParallaxText } from "~/components/madeup/text-parallax";
import { Space40 } from "~/components/ui/separator";

export function AstraParallax() {
    const sliderText =
        "text-transparent duration-1000 bg-gradient-to-tr cursor-default text-edge-outline whitespace-nowrap bg-clip-text";

    return (
        <div className="my-40 overflow-hidden">
            <ParallaxText baseVelocity={2}>
                <span className={`${sliderText} to-blue-600 from-teal-300`}>
                    ASTHRA
                </span>
                24
            </ParallaxText>
            <ParallaxText baseVelocity={-3}>
                <span className={`${sliderText} to-orange-600 from-yellow-400`}>
                    SJCET
                </span>
                PALAI
            </ParallaxText>
            <Space40/>
            <ParallaxText baseVelocity={2}>
                <span className={`${sliderText} to-blue-600 from-teal-300`}>
                    ASTHRA
                </span>
                24
            </ParallaxText>
            <ParallaxText baseVelocity={-3}>
                <span className={`${sliderText} to-orange-600 from-yellow-400`}>
                    SJCET
                </span>
                PALAI
            </ParallaxText>
        </div>
    )
}