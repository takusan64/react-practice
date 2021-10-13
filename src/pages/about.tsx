import type { NextPage } from 'next'
import Link from "next/link"

const About:NextPage = () =>{
  return(
    <>
      <p>About page</p>
      <Link href="/">
        <a> Go to Home </a>
      </Link>
    </>
  )
}

export default About