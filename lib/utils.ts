import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import CredentialsProvider from "next-auth/providers/credentials";
import {z} from "zod";
import { hashPassword, verifyPassword } from "@/lib/hashing";
import prisma from "@/lib/db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateRandomId(length: number = 10): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}


const CredentialsType = z.object({
  email:z.string().email(),
  password:z.string().min(6).max(20)
})


export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password", placeholder: "" },
      },
      //@ts-ignore
      async authorize(credentials: any) {
        
        const params = CredentialsType.safeParse(credentials);
        if(!params.success){
            return null;
        }

        try{
            const user = await prisma.user.findFirst({
                where:{
                    email:params.data.email
                }
            })
    
            if(!user){
                const hashedPass = await hashPassword(params.data.password);
                const newUser = await prisma.user.create({
                    data:{
                        id:generateRandomId(10),
                        email:params.data.email,
                        password:hashedPass
                    }
                })

                return newUser
            }else{
                const Matched = await verifyPassword(params.data.password,user.password);
                if(Matched){
                    return user
                }else{
                    return null;
                }
            }
    
        }catch(error){
            console.log(error);
        }
    }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }:any) {
      // Attach user id to the JWT token if user is logged in
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }:any) {
      // Attach the user id to the session object
      session.user.id = token.id;
      return session;
    }
  },
  database:process.env.DATABASE_URL
};