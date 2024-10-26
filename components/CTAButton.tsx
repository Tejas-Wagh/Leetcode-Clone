"use client";
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'

const CTAButton = () => {
  return (
    <Button className="w-20 py-4" onClick={()=>signIn()}>Join now</Button>
  )
}

export default CTAButton