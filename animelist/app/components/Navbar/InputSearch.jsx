"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter ()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword) return

        if (event.key == "Enter" || event.type === "click"){
            event.preventDefault()
            router.push(`/search/${keyword}`)    
        }
    }

    return (
        <div className="relative">
            <input 
                placeholder="Search..." 
                className="w-full p-2 rounded-full"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-3" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch;