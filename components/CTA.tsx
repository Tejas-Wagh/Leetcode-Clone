
import Image from "next/image";
import React from "react";
import CTAButton from "./CTAButton";

function CTA() {
  return (
    <div className="px-40 pt-32 pb-20 dark:bg-gradient-to-r from-dark_2 to-dark_1 dark:text-white dark:pb-32">
      <div className="flex flex-row space-x-9 border-gray-400 rounded-xl shadow-lg border p-8 hover:scale-105 duration-200">
        <div className="flex flex-col space-y-5">
          <h3 className="text-2xl font-semibold">Join the <span className="text-cyan-700">AlgoHub Community</span></h3>
          <div className="text-gray-700">
            Ready to elevate your coding skills? Whether you’re just starting
            out or looking to sharpen your expertise, AlgoHub is here for you!
            Dive into a world of challenging DSA problems, connect with fellow
            coders, and unlock your potential.
          </div>
          <CTAButton/>
        </div>
        <div>
            <Image src="/cs.jpg"
            height={400}
            width={400}
            alt="cs"
            priority
            />
        </div>
      </div>
    </div>
  );
}

export default CTA;
