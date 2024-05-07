"use client";

import React from "react";
import Link from "next/link";
import { MdContactSupport } from "react-icons/md";


const Navbar2 = () => {
  return (
    <>
      <div className="flex flex-col bg-[#ffff] w-full h-max-[200px] border-b px-2">
        <div className="sm:gap-4 gap-4 px-2 flex flex-row  sm:px-10 py-4">
          <Link
            href="/"
            className=" font-bold sm:p-2 text-[#57100d] hover:text-[#5488c4] my-auto text-xs sm:text-normal"
          >
            Beranda
          </Link>
          <Link
            href="/inflasi"
            className=" font-bold sm:p-2 text-[#57100d] hover:text-[#5488c4] my-auto text-xs sm:text-normal"
          >
            Inflasi
          </Link>
          <Link
            href="/tentang-kami"
            className=" font-bold sm:p-2 text-[#57100d] hover:text-[#5488c4] my-auto text-xs sm:text-normal"
          >
            Tentang Kami
          </Link>
          <Link
            href="/tentang-kami"
            className="text-[#5488c4] flex ml-auto shadow-md rounded-md p-1"
          >
            <MdContactSupport size={20} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
