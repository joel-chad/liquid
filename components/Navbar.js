import React from 'react'

import Link from "next/link";
// import { useRouter } from "next/router";
// import userData from "@constants/data";



function Navbar() {
    return ( 
          <nav className="p-4 mb-12 flex justify-between">
            <Link href='/'><h1 className="font-burtons sm:text-base hover:text-teal-200 text-xl">sitename</h1></Link>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li> */}
              <li>
                <Link
                  className=" px-2 py-2 border-none rounded-md hover:text-teal-200"
                  href="/about"
                >
                    About Us
                </Link>
              </li>
              <li>
                <Link
                  className=" px-4 py-2 border-none rounded-md hover:text-teal-200"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className=" py-2 border-none rounded-md ml-8 hover:text-teal-200"
                  href='/contact'
                >
                    Contact Us
                </Link>
              </li>
              <li>
                <Link className='bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:bg-gradient-to-l  px-4 py-2 border-none rounded-md ml-8' href="#"> 
                  Register
                </Link>
              </li>
            </ul>
          </nav>
          
     );
}

export default Navbar;