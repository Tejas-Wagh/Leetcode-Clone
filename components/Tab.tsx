"use client";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import { useState } from "react";
type ProblemParams = {
  title: string;
  description: string;
  status: string;
  difficulty: string;
  submissions:any
};
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SubmissionsTable } from "./SubmissionsTable";

export default function Tab({
  title,
  description,
  status,
  difficulty,
  submissions
}: ProblemParams) {
  const [activeTab, setActiveTab] = useState<String>("Problem");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row w-ful space-x-4">
        <button
          onClick={() => {
            setActiveTab((t) => (t = "Problem"));
          }}
          className={`${activeTab == "Problem" ? "font-semi-bold text-black text-lg" : " text-gray-500"}`}
        >
          Problem
        </button>
        <button
          onClick={() => {
            setActiveTab((t) => (t = "Submissions"));
          }}
          className={`${activeTab == "Submissions" ? "font-semi-bold text-black text-lg" : " text-gray-500"}`}
        >
          Submissions
        </button>
      </div>
      <div className={`flex flex-row justify-between  w-full pr-12 ${activeTab == "Problem" ? 'visible':"hidden"}`}>
        <div className={`text-xl font-bold `}>{title}</div>
        <div className="flex flex-row gap-6">
          <div className="flex items-center justify-center">
            {status == "Solved" ? (
              <IoMdCheckmarkCircleOutline className="text-green-700" />
            ) : null}
          </div>
          <div className="text-green-700">{difficulty}</div>
        </div>
      </div>
      <div>
        <Markdown
          remarkPlugins={[remarkGfm]}
          className={`${activeTab == "Submissions" ? "hidden" : "visible"}`}
        >
          {/* {description} */}
          {description.trim()}
        </Markdown>
        <div className={`${activeTab == "Problem" ? "hidden" : "visible"} max-h-96 overflow-y-auto overflow-x-hidden`}>
          {submissions?.length > 0 ? 
          <SubmissionsTable submissions = {submissions}/> :
          <p className="text-center mt-20">No submissions yet.</p>
        }
          
        </div>
      </div>
    </div>
  );
}
