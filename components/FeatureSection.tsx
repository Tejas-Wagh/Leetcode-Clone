"use client";
import React, { useRef } from "react";
import Card from "./Card";
import { motion, useScroll, useTransform } from "framer-motion";

function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <motion.div  ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess,
    }}  className="py-6 space-y-2 dark:bg-gradient-to-r from-dark_2 to-dark_1 dark:text-white dark:py-28">
      <div className="text-4xl text-center text-cyan-700 font-bold">Platform <span className="text-black dark:text-white">Features</span></div>
      <div className="text-md text-center">
        Unlock the Full Potential of Competitive Programming with these key
        features
      </div>
      <div className="flex flex-col gap-8 justify-center items-center pt-4">
        <div className="flex flex-row gap-8">
          <Card
            heading="Vast Problem Library"
            description="Access diverse collection of coding problems across various topics and difficulty levels. Challenge yourself with beginner to expert level tak and enhance your coding skills"
          />
          <Card
            heading="Detailed Problem Description"
            description="Each problem comes with clear and comprehensive descriptions, including input/output examples. Understand the task at hand and approach each problem with confidence"
          />
        </div>
        <div className="flex flex-row gap-8">
        <Card
            heading="Seamless Coding"
            description="Code directly on platform with our interactive coding environment. Write, test and submit your solutions seamlessly without needing any external tools."/>
          <Card
            heading="Multilingual Support"
            description="Solve problems using your preffered programming language. Our platform supports multiple languages, allowing you to code comfortably in the language you excel at."
            />
        </div>
      </div>
    </motion.div>
  );
}

export default FeatureSection;
