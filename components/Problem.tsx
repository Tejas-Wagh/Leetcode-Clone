"use client";
import Editor from "@monaco-editor/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Tab from "./Tab";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { LANGUAGES, LANGUAGES_VERSIONS, testCases } from "@/lib/problems";
import { codeType } from "../app/problems/[slug]/page";
import { createSubmission } from "@/actions/createSubmission";
import { useSession } from "next-auth/react";
import { saveSubmission } from "@/actions/saveSubmission";
import { getUser } from "../actions/getUser";
import { getSubmission } from "@/actions/getProblems";
import {motion} from "framer-motion";

function Problem({
  title,
  description,
  difficulty,
  status,
  codes,
  slug,
  problemID,
  submissions,
}: {
  title: string;
  description: string;
  difficulty: string;
  status: boolean;
  codes: codeType;
  slug: string | undefined;
  problemID: string;
  submissions: any;
}) {
  const [language, setLanguage] = useState<string>("java");
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [updatedSubmissions, setUpdatedSubmissions] = useState(null);
  const [result, setResult] = useState("");
  const editorRef = useRef(null);
  const session = useSession();

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
    //@ts-ignore
    editorRef.current.focus();
  }

  async function handleSubmission() {
    if (!session.data?.user) {
      toast.error("Please login to continue.");
      return;
    }
    setIsSubmitting(true);
    const toastID = toast.loading("Running...");

    //@ts-ignore
    const cases = testCases[slug];
    //@ts-ignore
    const mainCode =codes[0]?.language === LANGUAGES_VERSIONS[language] ? codes[0]?.mainCode : codes[1]?.mainCode;
    const fullCode = mainCode?.replace("####", code);
    console.log(fullCode);

    const result: any = await createSubmission(
      fullCode as string,
      LANGUAGES_VERSIONS[language] as number,
      cases.testcase1,
      cases.output1,
      cases.testcase2,
      cases.output2,
      cases.testcase3,
      cases.output3
    );
    toast.dismiss(toastID);

    if (result?.status == "Accepted") {
      setResult("Accepted");
      toast.success("Code ran Successfully");
    } else {
      setResult("Failed");
      toast.error("An Error Occured");
    }
    setIsSubmitting(false);

    const email = session.data.user.email as string;
    const user = await getUser(email);
    const submission = await saveSubmission(
      user?.id as string,
      problemID,
      code,
      LANGUAGES_VERSIONS[language] as number,
      result.status
    );

    const allsubmissions = (await getSubmission(problemID));
    //@ts-ignore
    setUpdatedSubmissions(allsubmissions);
  }

  useEffect(() => {
    setTimeout(() => {
      setResult("");
    }, 2000);
  }, [result]);

  useEffect(() => {
    //@ts-ignore
    const value =codes[0]?.language === LANGUAGES_VERSIONS[language] ? codes[0]?.functionCode : codes[1]?.functionCode;
    setCode(value as string);
    setUpdatedSubmissions(submissions);
  }, [language]);

  return (
    <motion.div initial={
      {
        opacity:0,
        x:-100
      }
    }
    animate={
      {
        opacity:1,
        x:0
      }
    }
    transition={{
      duration:0.5
    }}
    className="grid grid-cols-2 py-14 px-28 gap-10">
      <Tab
        title={title}
        description={description}
        difficulty={
          difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase()
        }
        status={`${status == true ? "Solved" : null}`}
        submissions={updatedSubmissions}
      />
      <div className="flex flex-col gap-4 ">
        <div className="w-24">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger
              className="w-[180px] bg-neutral-300"
              value={language}
            >
              <SelectValue placeholder={language} className="font-semibold" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-300">
              {LANGUAGES.map((k: string) => (
                <SelectItem value={k} key={k}>
                  {k.charAt(0).toUpperCase() + k.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Editor
          height="60vh"
          width={625}
          language={language}
          //@ts-ignore
          onChange={(value: string) => setCode(value)}
          value={code}
          theme="vs-dark"
          onMount={handleEditorDidMount}
        />

        <div className="flex flex-row justify-between pt-1 px-1">
          <div className="flex flex-row gap-2 text-md">
            <h3
              className={`font-semibold  ${
                result === "Accepted" ? `text-green-700` : `text-red-600`
              }`}
            >
              {result}
            </h3>
          </div>
          <Button onClick={handleSubmission} disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default Problem;
