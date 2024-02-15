// 'use server';

import React from 'react';
import Image from 'next/image';

import { CursorContainer } from '~/components/madeup/cursor';
import { Fog } from '~/components/madeup/grid-background';
import { IntroTag, IntroTagContainer } from '~/components/madeup/tag';
// import Use100vhScroll from '~/components/madeup/scroll-page-size';
// import ScrollVideo from '~/components/madeup/scroll-video';
import ThreeScene from '~/components/madeup/ThreeScene';

export default function Home() {
  return (
    <>
      {/* <Use100vhScroll> */}
      <>
        {/* <ScrollVideo src="/vedio.mp4" /> */}
        <ThreeScene />
        <Image
          className="object-contain fixed top-0 xl:top-10 left-5 xl:left-10 w-20 h-20"
          src="/logo.png"
          width={100}
          height={100}
          quality={100}
          loading="eager"
          alt=""
        />
        <div className="mx-auto py-20 h-screen w-screen relative flex flex-col flex-start justify-between xl:justify-normal overflow-hidden">
          <h1 className="mt-10 text-6xl  xl:text-xx text-center -z-10">ASTHRA 8.0</h1>
          <div className="items-center max-w-screen-lg xl:max-w-full xl:w-full mx-auto xl:p-20 flex-end">
            <IntroTagContainer className="flex flex-col">
              <IntroTag className="text-start stroke-1 stroke-black text-3xl">
                NATIONAL LEVEL <br /> TECHNICAL FEST 2024
              </IntroTag>
              <IntroTag className="text-end text-3xl">
                ST JOSEPHS COLLEGE <br /> OF ENGINEERING
              </IntroTag>
            </IntroTagContainer>
            {/* <p className="w-[300px]">NATIONAL LEVEL TECHNICAL FEST 2024</p>
            <p>ST JOSEPHS COLLEGE OF ENGINEERING</p> */}
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl py-20 h-screen flex">
          {/* <Image className="object-contain ml-[-100px]" src="/robot2.png" width="800" height="200" quality="100" loading="eager" alt="" /> */}
          <IntroTagContainer className="text-start">
            <IntroTag>
              envsioned to explore <br />
              the possibiliteies of <br /> tommorow
            </IntroTag>
          </IntroTagContainer>
        </div>
        <div className="mx-auto max-w-screen-xl py-20 h-screen relative flex">
          <IntroTagContainer className="text-end ms-auto">
            <IntroTag>
              One of the biggest tech fests <br /> in Kerala
            </IntroTag>
          </IntroTagContainer>
          {/* <Image
                className="mr-[-100px] object-contain ml-[-100px]"
                src="/robot3.png"
                width="800"
                height="200"
                quality="100"
                loading="eager"
                alt=""
              /> */}
        </div>
        <div className="mx-auto py-20 h-screen relative flex justify-center items-center align-middle">
          <CursorContainer varient="link" className="absolute bottom-20 group">
            <h1 className="text-5xl  xl:text-9xl text-white text-5xl group-hover:text-violet-500 font-light">REGISTER NOW </h1>
          </CursorContainer>
          {/* <Image className=" object-contain" src="/robot4.png" width="250" height="200" quality="100" loading="eager" alt="" /> */}
        </div>
      </>
      {/* </Use100vhScroll> */}
    </>
  );
}
