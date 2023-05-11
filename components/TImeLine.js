'use client'
import React, { useEffect, useState } from 'react'

function TimeLine(props) {
    const [benefits, setBenefits] = useState([])
    useEffect(()=>{
        setBenefits(props.benefits)
        console.log(props.benefits)
    }, [])
    return ( 
        <section className="items-center py-24 font-poppins dark:bg-gray-800">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="max-w-xl mx-auto">
                <div className="text-center ">
                    <div className="relative flex flex-col items-center">
                        <h1 className="text-6xl font-bold leading-tight dark:text-gray-300"> Steps
                        </h1>
                        <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-[#00A651]">
                            </div>
                            <div className="flex-1 h-2 bg-[#92D050]">
                            </div>
                            <div className="flex-1 h-2 bg-[#FF9000]">
                            </div>
                        </div>
                    </div>
                    <p className="mb-16 text-base text-center text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque?
                        Pariatur
                        numquam, odio quod nobis ipsum ex cupiditate?
                    </p>
                </div>
            </div>
            <div className="w-full mx-auto lg:max-w-3xl"> 
               { 
               benefits.map(benefit=>{
                return(
                <div key={benefit.id} className="relative flex justify-between">
                    <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                        <div>
                            <div
                                className="flex items-center justify-center w-8 h-8 bg-[#92D050] rounded-full dark:bg-gray-600">
                                <div className="w-4 h-4 bg-[#00A651] rounded-full dark:bg-teal-400"></div>
                            </div>
                        </div>
                        <div className="w-px h-full bg-teal-300 dark:bg-gray-600"></div>
                    </div>
                    <div>
                        <h2
                            className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-[#00A651] to-[#92D050] dark:from-teal-400 dark:to-teal-500 rounded-3xl dark:text-gray-100">
                            Step {benefit.id}</h2>
                        <div
                            className="relative flex-1 mb-10 bg-white border-b-4 border-[#92D050] shadow dark:border-[#92D050] rounded-3xl dark:bg-gray-900">
                            <div className="relative z-20 p-6">
                                {/* <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">Website Launched</p> */}
                                <p className="text-gray-700 dark:text-gray-500">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>)
               })}
                {/* <div className="relative flex justify-between">
                    <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                        <div>
                            <div
                                className="flex items-center justify-center w-8 h-8 bg-teal-200 rounded-full dark:bg-gray-600">
                                <div className="w-4 h-4 bg-teal-600 rounded-full dark:bg-teal-400"></div>
                            </div>
                        </div>
                        <div className="w-px h-full bg-teal-300 dark:bg-gray-600"></div>
                    </div>
                    <div>
                        <h2
                            className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-teal-500 to-teal-900 dark:from-teal-400 dark:to-teal-500 rounded-3xl dark:text-gray-100">
                            March 2016</h2>
                        <div
                            className="relative flex-1 mb-10 bg-white border-b-4 border-teal-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                            <div className="relative z-20 p-6">
                                <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400"> Made 100+ Themes</p>
                                <p className="text-gray-700 dark:text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus
                                    reprehenderit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-between">
                    <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                        <div>
                            <div
                                className="flex items-center justify-center w-8 h-8 bg-teal-200 rounded-full dark:bg-gray-600">
                                <div className="w-4 h-4 bg-teal-600 rounded-full dark:bg-teal-400"></div>
                            </div>
                        </div>
                        <div className="w-px h-full bg-teal-300 dark:bg-gray-600"></div>
                    </div>
                    <div>
                        <h2
                            className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-teal-500 to-teal-900 dark:from-teal-400 dark:to-teal-500 rounded-3xl dark:text-gray-100">
                            April 2021</h2>
                        <div
                            className="relative flex-1 mb-10 bg-white border-b-4 border-teal-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                            <div className="relative z-20 p-6">
                                <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                                    Launch Project
                                </p>
                                <p className="text-gray-700 dark:text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus
                                    reprehenderit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
     );
}

export default TimeLine;