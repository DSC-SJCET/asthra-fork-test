// 'use server';

import React from 'react';
import Image from 'next/image';

import { CursorContainer } from '~/components/madeup/cursor';
import { Fog } from '~/components/madeup/grid-background';
import Use100vhScroll from '~/components/madeup/scroll-page-size';
import ScrollVideo from '~/components/madeup/scroll-video';
import ThreeScene from '~/components/madeup/ThreeScene';

export default function Home() {
  return (
    <>
      {/* <Use100vhScroll> */}
      <>
        {/* <ScrollVideo src="/vedio.mp4" /> */}
        <ThreeScene/>
        <Image
          className="object-contain fixed top-0 xl:top-10 left-5 xl:left-10 w-20 h-20"
          src="/logo.png"
          width={100}
          height={100}
          quality={100}
          loading="eager"
          alt=""
        />
        <CursorContainer varient="text">
          <div className="mx-auto py-20 h-screen w-screen relative flex justify-center overflow-hidden">
            <Fog />
            <h1 className="mt-10 text-6xl  xl:text-xx text-center">ASTHRA 8.0</h1>
            <div className="flex flex-col xl:flex-row justify-between items-center max-w-screen-lg mx-auto absolute top-10">
              <p className="w-[300px]">NATIONAL LEVEL TECHNICAL FEST 2024</p>
              <p>ST JOSEPHS COLLEGE OF ENGINEERING</p>
            </div>
          </div>
        </CursorContainer>
        <div className="mx-auto max-w-screen-xl py-20 h-screen relative flex justify-start items-center align-middle">
          {/* <Image className="object-contain ml-[-100px]" src="/robot2.png" width="800" height="200" quality="100" loading="eager" alt="" /> */}
          <h3 className="text-white font-light">
            envsioned to explore <br />
            the possibiliteies of <br /> tommorow
          </h3>
        </div>
        <div className="mx-auto py-20 h-screen relative flex justify-end items-center align-middle">
          <Fog />
          <h3 className="text-white text-5xl font-light">
            One of the biggest tech fests <br /> in Kerala
          </h3>
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
          <Fog />
          <CursorContainer varient="link" className="absolute bottom-20 group">
            <h1 className="text-8xl  xl:text-9xl text-white text-5xl group-hover:text-violet-500 font-light">REGISTER NOW </h1>
          </CursorContainer>
          {/* <Image className=" object-contain" src="/robot4.png" width="250" height="200" quality="100" loading="eager" alt="" /> */}
        </div>
      </>
      {/* </Use100vhScroll> */}
    </>
  );
}

{
  /* <div className="mx-auto max-w-screen-xl py-20 h-screen relative flex justify-evenly items-center align-middle">
        <Image className="object-contain ml-[-100px]" src="/robot2.png" width="800" height="200" quality="100" loading="eager" alt="" />
        <h3 className="text-white font-light">
          envsioned to explore <br />
          the possibiliteies of <br /> tommorow
        </h3>
      </div>
      <div className="mx-auto  py-20 h-screen relative flex justify-evenly items-center align-middle">
        <Fog />
        <h3 className="text-white text-5xl font-light">
          One of the biggest tech fests <br /> in Kerala
        </h3>
        <Image
          className="mr-[-100px] object-contain ml-[-100px]"
          src="/robot3.png"
          width="800"
          height="200"
          quality="100"
          loading="eager"
          alt=""
        />
      </div>
      <div className="mx-auto py-20 h-screen relative flex justify-center items-center align-middle">
        <Fog />
        <CursorContainer varient="link" className="absolute bottom-20 group">
          <h1 className="text-8xl  xl:text-9xl text-white text-5xl group-hover:text-violet-500 font-light">REGISTER NOW </h1>
        </CursorContainer>
        <Image className=" object-contain" src="/robot4.png" width="250" height="200" quality="100" loading="eager" alt="" />
      </div> */
}
