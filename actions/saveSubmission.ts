"use server";

import prisma from "@/lib/db";
import { generateRandomId } from "@/lib/utils";

 export async function saveSubmission(userID:string, problemID:string,code:string,languageID:number,status:string){
  try{
    
    const res = await prisma.submission.create({
      data:{
        userId:userID,
        problemId:problemID,
        languageID:languageID,
        code:code,
        status:status,
        id:generateRandomId(12)
      }
    })

    await prisma.problem.update({
        where:{
            id:problemID
        },
        data:{
            solved:{
                increment:+1
            }
        }
    })

    
  }catch(error){
    console.log(error);
    
  }
 } 