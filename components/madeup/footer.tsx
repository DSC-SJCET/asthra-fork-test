import * as React from "react"

import { motion } from "framer-motion"

import Image from "next/image"
import Link from "next/link"
import { InstagramLogoIcon } from "@radix-ui/react-icons"


export function Footer(){
    return (
        <footer className="w-screen p-5 ">
            <div className="w-full flex flex-col md:flex-row gap-8 border-b-2 pb-6">
                <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
                    <Image src="/sjcet_logo.svg" width={636} height={218} alt="The logo of SJCET" className="w-full max-w-60"/>
                    <p className="text-xs text-center text-neutral-400">St.Joseph’s College of Engineering and Technology, Palai,<br/>Choondacherry P.O, Palai, Kottayam 686 579, Kerala,India.</p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
                    <Image src="/asthra_3.svg" width={636} height={218} alt="Astrha logo" className="w-full max-w-60"/>
                    <p className="text-xs text-center text-neutral-400">Envsioned to explore the possibiliteies of tommorow</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-center gap-4 w-full p-5">
                    <Link href="https://instagram.com">
                        <InstagramLogoIcon className="w-5 h-5"/>
                    </Link>
                    <Link href="https://instagram.com">
                        <InstagramLogoIcon className="w-5 h-5"/>
                    </Link>
                    <Link href="https://instagram.com">
                        <InstagramLogoIcon className="w-5 h-5"/>
                    </Link>
                </div>
                <p className="text-xs text-center">made with ❤️ by team asthra</p>
            </div>
        </footer>
    );
}