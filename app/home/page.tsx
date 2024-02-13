"use client"

import { FC } from "react";
import { BeautyOfSJCET } from "./_components/beauty-of-sjcet";
import { AstraParallax } from "./_components/asthra-parallax";
import { Space40 } from "~/components/ui/separator";
import { AnimateFadeIn, TextDiv } from "~/components/madeup/text-fadeIn-animation";



const Home: FC = () => {
    return (<>

        <Space40/>

        <Space40/>
        <AstraParallax/>
        <Space40/>

        <Space40/>
        <TextDiv>
            <AnimateFadeIn type="h1">
                Beauty of SJCET 
            </AnimateFadeIn>
        </TextDiv>
        <Space40/>

        <Space40/>
        <BeautyOfSJCET />
        <Space40/>

        <Space40/>
        <Space40/>
        <Space40/>
    </>);
}

export default Home;