"use server";

import prisma from "@/lib/db";

export async function getUser(email:string){
    const user = await prisma.user.findFirst({
        where:{
            email:email
        },
        select:{
            id:true,
        }
    })
    return user;
}