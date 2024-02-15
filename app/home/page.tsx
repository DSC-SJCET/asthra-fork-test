
import { BeautyOfSJCET } from "./_components/beauty-of-sjcet";
import { AstraParallax } from "./_components/asthra-parallax";
import { Space40 } from "~/components/ui/separator";
import { AnimateFadeIn, TextDiv } from "~/components/madeup/text-fadeIn-animation";
import { Hero } from "./_components/hero";



const Home = async () => {
    return (<>

        <Space40/>
        <Space40/>
        <Hero/>
        <Space40/>
        <Space40/>

        <Space40/>
        <AstraParallax {...{
            "1": "ASTHRA",
            "2": "24",
            "3": "SJCET",
            "4": "PALAI",
        }}/>
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