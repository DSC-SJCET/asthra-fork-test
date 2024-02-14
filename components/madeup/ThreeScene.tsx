/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mixer = useRef<THREE.AnimationMixer>();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xffffff, 0.1);
    light1.position.set(2.5, 5.5, 2.5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 0.1);
    light2.position.set(2.5, 2.5, -2.5);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 10);
    light3.position.set(-2.5, 10.5, 2);
    scene.add(light3);

    const gltfloader = new GLTFLoader();

    gltfloader.load(
      '/model3.glb',
      (gltf) => {
        gltf.scene.scale.set(5, 5, 5);
        scene.add(gltf.scene);

        camera.position.set(0, 4, 1);

        mixer.current = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          mixer.current.clipAction(clip).play();
        });
      },
      undefined,
      (error) => {
        console.error(error);
      },
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer.current) mixer.current.update(0.01);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (<div className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]" ref={containerRef}></div>);
};

export default ThreeScene;
