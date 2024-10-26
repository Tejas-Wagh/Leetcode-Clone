"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";
import { IoIosLogOut } from "react-icons/io";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
function AppBar() {
  const session = useSession();
  const router = useRouter();

  const handleClick = () => {
    router.push("/problems"); // Replace with your desired path
  };

  return (
    <div className=" flex justify-between py-6 px-10 border-b border-black border-opacity-30 dark:bg-black dark:border-gray-800 shadow-xl">
      <div className="text-2xl font-bold dark:text-white">
        <Link href={"/"}>AlgoHub</Link>
      </div>
      <div className="flex flex-row  text-lg  ">
        <Button variant={"link"} onClick={handleClick} className="-pr-1">
          Explore Problems
        </Button>
        <a
          href="https://algo-hub-online-ide.vercel.app/"
          target="_blank"
          className="pr-2"
        >
          <Button variant={"link"}>Explore IDE</Button>
        </a>

        {session.data?.user?.email ? (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Avatar className="shadow-xl flex items-center justify-center  text-white">
                <AvatarFallback className="bg-gray-600">
                  {session.data.user.email[0]?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-72 border border-gray-400 mr-8">
              <div className="flex flex-row space-x-4">
                <div className="flex flex-row gap-4 ">
                  <div className="flex items-center justify-center">
                    <Avatar>
                      <AvatarFallback className="bg-gray-600 text-white">
                        {session.data.user.email[0]?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <Separator
                      orientation="vertical"
                      className="bg-gray-400 h-full"
                    />
                  </div>
                </div>

                <div className="">
                  <h4 className="text-sm font-semibold">
                    {session.data.user.email}
                  </h4>
                  <div className="pt-3">
                    <Separator
                      orientation="horizontal"
                      className="bg-gray-400 w-full"
                    />
                  </div>
                  <div className="flex items-end justify-end">
                    <Button
                      variant={"link"}
                      className="font-semibold"
                      onClick={() => signOut()}
                    >
                      Log out{" "}
                      <div className="flex items-center justify-center pl-2 font-semibold">
                        <IoIosLogOut />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ) : (
          <Button onClick={() => signIn()} className="">
            Login
          </Button>
        )}
      </div>
    </div>
  );
}

export default AppBar;
