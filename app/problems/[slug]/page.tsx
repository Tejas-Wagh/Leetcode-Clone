
import React from 'react'
import Problem from '@/components/Problem'
import { getDefaultCodes, getProblem, getSubmission } from '@/actions/getProblems';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_CONFIG } from '@/lib/utils';

export type codeType = {
  id:string,
  createdAt:Date,
  mainCode:string,
  functionCode:string,
  language:number,
  problemId:string,
}[] | undefined

async function page({params}:{params:any}) {

  const param = await params;
  const slug = param.slug as string;
  const problem = await getProblem(slug);
  const submissions = await getSubmission(problem?.id as string)
  const codes:codeType = await getDefaultCodes(problem?.id);
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const email = session?.user?.email;
  const solved = submissions.some((submission) => submission.User.email === email);
  
  
 
  return (
    <Problem title={problem?.title as string} description={problem?.description as string} difficulty={problem?.difficulty as string}
    //@ts-ignore 
    status={solved} 
    codes={codes} slug={problem?.slug} problemID= {problem?.id as string} submissions={submissions}/>
  )
}

export default page