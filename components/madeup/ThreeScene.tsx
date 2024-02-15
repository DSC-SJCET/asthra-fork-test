/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const composer = useRef<EffectComposer>();
  const renderPass = useRef<RenderPass>();
  const filmPass = useRef<FilmPass>();
  const bloomPass = useRef<UnrealBloomPass>();
  const outputPass = useRef<OutputPass>();
  const ambientLight = useRef<THREE.AmbientLight>();
  const light1 = useRef<THREE.PointLight>();
  const light2 = useRef<THREE.PointLight>();
  const light3 = useRef<THREE.DirectionalLight>();
  const scrollProgress = useRef<number>(0); // Store the scroll progress

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.2, 1000);
    renderer.current = new THREE.WebGLRenderer({ alpha: true });
    2;
    renderer.current.setClearColor(0x000000, 0);
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.current.domElement);

    composer.current = new EffectComposer(renderer.current);
    renderPass.current = new RenderPass(scene, camera.current);
    composer.current.addPass(renderPass.current);

    filmPass.current = new FilmPass();
    composer.current.addPass(filmPass.current);

    bloomPass.current = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.25, 0.1, 0.1);
    composer.current.addPass(bloomPass.current);

    outputPass.current = new OutputPass();
    composer.current.addPass(outputPass.current);

    ambientLight.current = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight.current);

    light1.current = new THREE.PointLight(0x853932, 0.1);
    light1.current.position.set(2.5, 5.5, 2.5);
    scene.add(light1.current);

    light2.current = new THREE.PointLight(0x853932, 0.1);
    light2.current.position.set(2.5, 2.5, -2.5);
    scene.add(light2.current);

    light3.current = new THREE.DirectionalLight(0x853932, 10);
    light3.current.position.set(-2.5, 10.5, 2);
    scene.add(light3.current);

    const gltfloader = new GLTFLoader();

    gltfloader.load(
      '/model4.glb',
      (gltf) => {
        gltf.scene.scale.set(10, 10, 2);
        scene.add(gltf.scene);

        camera.current?.position.set(0, 0, 0);

        mixer.current = new THREE.AnimationMixer(gltf.scene);
        const clips = gltf.animations;
        const totalFrames = 300; // Total frames in the animation
        const animationDuration = 1.0; // Duration of the animation in seconds
        const clipDuration = animationDuration / totalFrames;

        clips.forEach((clip) => {
          const action = mixer.current?.clipAction(clip);
          action?.setDuration(clipDuration); // Set the duration of each clip
          action?.play();
        });
      },
      undefined,
      (error) => {
        console.error(error);
      },
    );

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      scrollProgress.current = currentScroll / totalHeight;

      // Check if the mixer is initialized and sync the animation
      if (mixer.current) {
        const currentFrame = scrollProgress.current / 330; // Map scroll progress to animation frames
        mixer.current.setTime(currentFrame);
      }

      // Adjust camera position based on scroll progress
      // if (camera.current) {
      //   camera.current.position.z = 1 + scrollProgress.current * 7; // Zoom out gradually
      //   camera.current.position.y = 16.5 - scrollProgress.current * 5; // Move up gradually

      //   // camera.current.rotation.y = -Math.PI / 2 + scrollProgress * Math.PI / 4; // Rotate left gradually
      // }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer.current) mixer.current.update(0.01);
      if (composer.current && scene && camera.current) composer.current.render();
    };

    animate();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (renderer.current) containerRef.current?.removeChild(renderer.current.domElement);
    };
  }, []);

  return <div className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1] flex justify-center align-end" ref={containerRef}></div>;
};

export default ThreeScene;
