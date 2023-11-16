"use client"

import { ArrowCircleUp, XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"
const VideoPlayer = ({youtubeid}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
    width:"320",
    height:"180"
   }
   
   const Player = ()=> {
       return(
           <div className="fixed bottom-2 right-2">
               <button onClick={handleVideoPlayer}
               className="hover:text-owned-secondary text-owned-dark float-right p-1"><XCircle size={32}/></button>
               <YouTube className="rounded" videoId={youtubeid} 
               onReady={(event) => event.target.pauseVideo()}
               opts={option}/>
           </div>
       )
   }
   return isOpen ? <Player/> : <button onClick={handleVideoPlayer} className="fixed bottom-2 right-2 text-owned-dark float-right p-1 hover:text-owned-secondary"><ArrowCircleUp size={32}/></button>

}

export default VideoPlayer