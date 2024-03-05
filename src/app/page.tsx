import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";

function homepage() {
  return (
    <div>
      <header
        className="w-dvw h-dvh flex gap-7 flex-col items-center justify-center"
      >
        <h1
          className="text-3xl"
        >Watch Movies</h1>
        <Link
          href="/movies"
          className={buttonVariants({variant:"secondary"})+" w-fit"}
        >
          Go to Home page
        </Link>
      </header>
      <footer
        className="p-3"
      >
        <h1
          className='text-2xl mb-5'
        >Watch Movies</h1>
        <p
          className='mb-5'
        >
          <b
            className='text-red-500'
          >Disclamer</b>
          <span> I do not hold the copy rights of the movies provided here. I just got the API and wanted to build one.</span>
        </p>
        <div
          className='flex justify-center'
        >
          <a
            href="https://github.com"
            className={buttonVariants({variant:"secondary"})}
          >View in Github <FaGithub className='ml-1'/></a>
        </div>
      </footer>
    </div>
  )
}

export default homepage