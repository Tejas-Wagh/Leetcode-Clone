"use server";
import prisma from "@/lib/db";

export async function getProblems() {
  try {
    const problems = await prisma.problem.findMany();
    return problems;
  } catch (error) {
    console.log(error);
  }
}

export async function getProblem(slug: string) {
  try {
    const problem = await prisma.problem.findFirst({
      where: {
        slug: slug,
      },
      select: {
        description: true,
        createdAt: true,
        difficulty: true,
        id: true,
        slug: true,
        title: true,
      },
    });
    return problem;
  } catch (error) {
    console.log(error);
  }
}

export async function getDefaultCodes(id: string | undefined) {

  try {
    const defaultCodes = await prisma.defaultCode.findMany({
      where: {
        problemId: id,
      },
    });
    return defaultCodes;
  } catch (error) {
    console.log(error);
  }
}

export async function getSubmission(problemID:string){
    const res = await prisma.submission.findMany({
        where:{
            problemId:problemID
        },
        select:{
            code:true,
            createdAt:true,
            languageID:true,
            id:true,
            problemId:true,
            status:true,
            User:{
                select:{
                    email:true
                }
            }
        }
    })

    return res;
}