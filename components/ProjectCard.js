'use client'

import Image from "next/image"
import car from '../public/porsche.png'

export default function ProjectCard() {
    return (
      <div className=" w-64 p-2 h-64 bg-white flex flex-col shadow-md rounded-tl-md rounded-br-md">
        <div className="h-1/2 w-full">
        <Image height={"100%"} width={'100%'} src={car}/>
        </div>
        <hr />
        <h2 className="font-semibold">Car Project</h2>
        <p className=" text-sm p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis tenetur cupiditate nesciunt repellendus!</p>
        <span className="text-xs">Read More...</span>
      </div>
    )
  }