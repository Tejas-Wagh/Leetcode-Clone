import React from "react";
import { Separator } from "@/components/ui/separator";
import { TfiLayoutCtaRight } from "react-icons/tfi";

function Card({
  heading,
  description,
}: {
  heading: String;
  description: String;
}) {
  return (
    <div className="flex flex-col dark:border dark:border-gray-500 w-96 gap-4 p-8 dark:shadow-xl rounded-xl hover:scale-105 duration-200">
      <div className="flex flex-row gap-3">
        <div className="flex items-center justify-center">
        <TfiLayoutCtaRight />
        </div>
        <h2 className="text-xl font-semibold">{heading}</h2>
      </div>
      <Separator orientation="horizontal" className="bg-slate-600 w-full font-thin text-sm" />
      <div className="text-cyan-700">{description}</div>
    </div>
  );
}

export default Card;
