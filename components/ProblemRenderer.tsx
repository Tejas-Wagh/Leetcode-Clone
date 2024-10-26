import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { LuClock } from "react-icons/lu";
import Link from "next/link";


type Problem = {
  Name: string;
  Difficulty: string;
  Date: string;
  Submissions: string;
  slug:string
};

const status_types = [
  {
    status: "Solved",
    element: <IoMdCheckmarkCircleOutline />,
  },
  {
    status: "UnSolved",
    element: <IoIosRemoveCircleOutline />,
  },
  {
    status: "Pending",
    element: <LuClock />,
  },
  {
    status: "Failed",
    element: <IoMdCloseCircleOutline />,
  },
];

function ProblemRenderer({ Name, Difficulty, Date, Submissions,slug }: Problem) {
  // const problem = status_types.find((p) => p.status == Status);
  // const Element = problem?.element;

  return (
    <TableRow>
      <TableCell className="hover:underline cursor-pointer hover:text-cyan-600 text-md"><Link href={`/problems/${slug}`}>{Name}</Link></TableCell>
      <TableCell className="">{Difficulty.charAt(0).toUpperCase() + Difficulty.slice(1).toLowerCase()}</TableCell>
      <TableCell>{Date}</TableCell>
      <TableCell className="flex items-center justify-center">{Submissions}</TableCell>
    </TableRow>
  );
}

export default ProblemRenderer;
