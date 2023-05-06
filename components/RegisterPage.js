'use client'
import LeftOverlayContent from "./RegisterPage/LeftOverlay";
import LeftUnderlay from "./RegisterPage/LeftUnderlay";
import RightOverlayContent from "./RegisterPage/RightOverlay";
import RightUnderlay from './RegisterPage/RightUnderlay'

import { useState } from "react";

function RegisterPage() {
    // const [agent, setAgent] = useState(false)
    const [client, setClient] = useState(true)
    
   if(client){
    return(
        <div className="flex flex-row w-full">
                <LeftOverlayContent client={client} setClient={setClient}/>
                <RightUnderlay />
        </div>
    )
   }
   if(client==false){
    return(
        <div className="flex flex-row w-full">
                <LeftUnderlay/>
                <RightOverlayContent client={client} setClient={setClient}/>
        </div>
    )
   }
}

export default RegisterPage;