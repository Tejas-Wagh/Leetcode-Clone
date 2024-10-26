import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import FeatureSection from "./FeatureSection";
import Insider from "./Insider";
import CTA from "./CTA";
import FooterSection from "./Footer";
import Link from "next/link";

function Landing() {
  return (
    <div>
      <div className="w-full flex flex-col px-14 pt-12 pb-20 items-center justify-center gap-4 dark:bg-black">
        <div className="py-4 space-y-4">
          <h2 className="text-5xl font-bold font-sans dark:text-white">
            Unlock your Coding potential
          </h2>
          <div className="text-5xl text-center font-bold dark:text-white">
            with{" "}
            <span className=" text-cyan-700 dark:text-white font-extrabold">
              AlgoHub
            </span>
          </div>
        </div>
        <Link href={"/problems"}><Button size={"lg"}>Let's Get Coding!</Button></Link>
        <div>
          <Image
            className=" dark:text-slate-300 rounded-3xl"
            src="/cs.jpg"
            width={500}
            height={400}
            alt="CS"
            priority
          />
         
        </div>
      </div>
      <FeatureSection />
      <Insider />
      <CTA />
      <FooterSection />
    </div>
  );
}

export default Landing;