import React from "react";
import Card from "./Card";

function Insider() {
  return (
    <div className="pt-20 space-y-2 dark:bg-black  dark:text-white dark:py-28">
      <div className="text-4xl text-center text-cyan-700 font-bold">
        How it <span className="text-black dark:text-white">Works</span>
      </div>
      <div className="text-md text-center">
        Follow this Steps to get started with AlgoHub!
      </div>
      <div className="flex flex-col gap-8 justify-center items-center pt-4">
        <div className="flex flex-row gap-8">
          <Card
            heading="Sign Up or Log In"
            description="Create your account by signing up with your email. If you're already a member, simply log in to access your profile and start coding right away."
          />
          <Card
            heading="Choose a Problem"
            description=" Dive into a vast collection of Data Structures and Algorithms (DSA) challenges designed to test your skills, enhance your problem-solving abilities, and prepare you for real-world coding interviews"
          />
        </div>
        <div className="flex flex-row gap-8 ">
          <Card
            heading="Start Coding"
            description="Use our interactive coding environment to write, test, and submit your solutions directly on the platform. Receive instant feedback to refine your approach."
          />
          <Card
            heading="Track your Progress"
            description="AlgoHub also provides a dashboard which allows you to track your progress with ease."
          />
        </div>
      </div>
    </div>
  );
}

export default Insider;
