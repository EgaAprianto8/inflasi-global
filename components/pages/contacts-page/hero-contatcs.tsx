import React from "react"
import Link from "next/link"
import {SlArrowRight} from "react-icons/sl"

const HeroContacts = () => {
  return (
    <>
    <div className="relative flex justify-center bg-[#5488c4] items-center w-full sm:h-[47vh] h-[300px] mt-0 sm:mt-2 md:mt-0  mb-28 z-1">
      <div className="container flex sm:flex-col flex-col lg:flex-row justify-between sm:p-20 xl:32">
          <h1 className="sm:text-6xl text-4xl text-white font-black">
            Tentang Kami
          </h1>
          <div className="flex flex-row mt-2 items-center">
            <Link href="/">
              <h2 className="text-[#aeaacb] font-black text-sm hover:text-white">
                HOME
              </h2>
            </Link>
            <h2 className="text-[#43baff] text-xs mx-2"> 
              <SlArrowRight size={15}/>
            </h2>
            <h2 className="text-white font-black text-sm">
              TENTANG KAMI
            </h2>
          </div>
      </div>
    </div>
    </>
  )
}

export default HeroContacts
