"use client"
import { NavLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navigation = () => {
    const[isRouting,setisRouting]=useState(false)
    const path = usePathname()
    const[prevPath,setprevPath]= useState("/")
    useEffect(()=>{
        if(prevPath !== path){
            setisRouting(true)
        }

    },[path,prevPath])
    useEffect(()=>{
        if(isRouting){
            setprevPath(path);
            const timeout = setTimeout(()=>{
                setisRouting(false)
            },1200)
        return ()=>clearTimeout(timeout)
        }
    },[isRouting])
    return (
    <div style={{left: "20%"}} 
    className='absolute z-50 -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border border-white'>
        {NavLinks.map((nav)=>{
            return(<link
            key={nav.name}
            href={nav.link}
            className='mb-16 pl-4 min-w-[20%]'
        >
            
        </link>)
        })}
    </div>
  )
}

export default Navigation