import React from 'react'
import ProblemsList from '@/components/ProblemsList'
import { getProblems } from '@/actions/getProblems';

async function page() {
  const problems = await getProblems();
  return (
    <ProblemsList problems ={problems}/>
  );
}

export default page