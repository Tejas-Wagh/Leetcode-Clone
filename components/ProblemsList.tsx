"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProblemRenderer from "./ProblemRenderer";
import { getProblems } from "../actions/getProblems";
import {animate, motion} from "framer-motion"

export default  function ProblemsList({problems}:{problems:any}) {

  return (
    <motion.div  initial={{
      opacity:0,
      y:100,
    }}
    animate={{
      opacity:1,
      y:0,
    }}
    transition={{
      duration:0.4
    }}
    className="py-14 px-32 flex flex-col gap-10">
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl">Problems</h2>
        <div className="text-gray-600">
          Sharpen Your Skills with Diverse Challenges
        </div>
      </div>

      <div className="">
        <Table>
          <TableCaption>List of Problems.</TableCaption>
          <TableHeader className="">
            <TableRow className="">
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead >Difficulty</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="flex items-center justify-center ">
                Submissions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems?.map((problem:any)=><ProblemRenderer
            key={problem.id}
              Name={problem.title}
              Difficulty={problem.difficulty}
              Date={problem.createdAt.toISOString().split('T')[0] as string}
              Submissions={problem.solved.toString()}
              slug={problem.slug}
            />)}
            
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
}
