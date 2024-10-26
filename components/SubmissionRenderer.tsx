import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Tooltipx from "./Tooltip";
import { Editor } from "@monaco-editor/react";

const SubmissionRenderer = ({
  status,
  language,
  date,
  user,
  code,
}: {
  status: string;
  language: string;
  date: string;
  user: string;
  code: string;
}) => {
  return (
    <TableRow className="">
      <TableCell
        className={`text-md font-semibold text-left hover:opacity-90 hover:underline  ${status === "Accepted" ? "text-green-700" : "text-red-700"}`}
      >
        <Dialog>
          <DialogTrigger>
            <h3>{status === "Accepted" ? "Accepted" : "Failed"}</h3>
          </DialogTrigger>
          <DialogContent className="bg-gray-100 shadow-xl text-gray-900 w-[650px]  gap-3 ">
            <DialogHeader>
              <DialogTitle className="">Code</DialogTitle>
              <DialogDescription className="px-5 py-7 text-pretty text-black" asChild>
                <Editor
                  height="40vh"
                  width={480}
                  language={language}
                  value={code}
                  theme="vs-dark"
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TableCell>

      <TableCell className="text-left">
        {language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()}
      </TableCell>
      <TableCell className="text-left">{date}</TableCell>
      <TableCell className="flex items-center justify-center  w-[200px] text-[14px]">
        <div className="flex flex-row flex-1 gap-1">
          <Avatar className="shadow-xl flex items-center justify-center  text-white w-6 h-6">
            <AvatarFallback className="bg-gray-600">
              {user.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>{user}</div>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default SubmissionRenderer;
