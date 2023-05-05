'use client'
import PersonalDetails from "@/components/PersonalDetails"
import OtherDetails from "@/components/OtherDetails"
import { useState } from "react"
import PopupWidget from "@/components/PopupWidget"
import Notification from "@/components/Notification"

export default function SignUp() {
  const [step, setStep] = useState(1)
  switch(step){
    case 1:
    return (
      <main className="flex pt-12 pb-8 flex-col items-center justify-center">
        {
          <>
          <PersonalDetails/> 
          <div className="flex p-2 lg:w-4/5 flex-row items-stretch justify-end">
            <button className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-green-600 hover:border-green-600" onClick={()=>setStep(2)}>Next</button>
          </div>
          <PopupWidget/>
          </>
        }
      </main>
    )
    case 2:
      return (
        <main className="flex pt-16 pb-8 flex-col items-center justify-center">
        <>
        <OtherDetails/> 
        <div className="flex p-2 w-full lg:w-4/5 flex-row items-stretch justify-between">
          <button className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-green-600 hover:border-green-600"onClick={()=>setStep(1)}>Back</button>
          <button className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-green-600 hover:border-green-600" onClick={()=>setStep(2)}>Next</button>
        </div>
        </>
        <PopupWidget/>
        <Notification/>
        </main>
      )
      default:
  }
  }
