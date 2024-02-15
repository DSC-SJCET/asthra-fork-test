/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const ambientLight = useRef<THREE.AmbientLight>();
  const light1 = useRef<THREE.PointLight>();
  const light2 = useRef<THREE.PointLight>();
  const light3 = useRef<THREE.DirectionalLight>();
  const scrollProgress = useRef<number>(0); // Store the scroll progress
  const previousScroll = useRef<number>(0); // Store the previous scroll position2

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer.current = new THREE.WebGLRenderer({ alpha: true });
    renderer.current.setClearColor(0x000000, 0);
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.current.domElement);

    ambientLight.current = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight.current);

    light1.current = new THREE.PointLight(0xffffff, 0.1);
    light1.current.position.set(2.5, 5.5, 2.5);
    scene.add(light1.current);

    light2.current = new THREE.PointLight(0xffffff, 0.1);
    light2.current.position.set(2.5, 2.5, -2.5);
    scene.add(light2.current);

    light3.current = new THREE.DirectionalLight(0xffffff, 10);
    light3.current.position.set(-2.5, 10.5, 2);
    scene.add(light3.current);

    const gltfloader = new GLTFLoader();

    gltfloader.load(
      '/model3.glb',
      (gltf) => {
        gltf.scene.scale.set(10, 10, 2);
        scene.add(gltf.scene);

        camera.current.position.set(0, 16.5, 1);

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
      if (camera.current) {
        camera.current.position.z = 1 + scrollProgress.current * 7; // Zoom out gradually
        camera.current.position.y = 16.5 - scrollProgress.current * 5; // Move up gradually
        // camera.current.rotation.y = -Math.PI / 2 + scrollProgress * Math.PI / 4; // Rotate left gradually
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer.current) mixer.current.update(0.01);
      if (renderer.current && scene && camera.current) renderer.current.render(scene, camera.current);
    };

    animate();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      containerRef.current?.removeChild(renderer.current.domElement);
    };
  }, []);

  return <div className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1] flex justify-center align-end" ref={containerRef}></div>;
};

export default ThreeScene;
