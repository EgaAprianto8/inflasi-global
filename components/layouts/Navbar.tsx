"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col bg-[#ffff] w-full h-max-[200px] py-2">
        <div className="p-2 flex flex-row border-b gap-4 lg:px-10">
          <Link href="/" className="my-auto flex-row flex gap-4">
            <div className="relative  w-[50px] h-[50px]">
              <Image
              src="/image/logo/logoInflasi.png"
              alt="logo"
              fill={true}
              className="object-cover w-[50px] h-[50px]"
              />  
            </div>
            <div className="lg:flex flex-col hidden">
              <h1 className="font-black text-xl text-[#57100d]">
              Inflasi Global
              </h1>
              <h3 className="">
                Data Statistik Inflasi Global
              </h3>
            </div>
          </Link>
          <div className="flex mx-auto my-auto">
            <div className="flex flex-row border-0 rounded-md bg-[#f5f5f5]">
              <div className="my-auto border-r border-[#a8a8a8]-2">
                <Select>
                  <SelectTrigger className="sm:w-[150px] w-full">
                    <div className="sm:flex hidden">
                    <SelectValue placeholder="Kategori" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kategori1">Kategori 1</SelectItem>
                    <SelectItem value="kategori2">Kategori 2</SelectItem>
                    <SelectItem value="kategori3">Kategori 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                type="search"
                placeholder="Search"
                className="border-0 bg-[#f5f5f5] flex w-full"
              />
              <button title="search" className="my-auto px-2">
                <IoSearchOutline size={20} />
              </button>
            </div>
          </div>
          {/* <div className="flex flex-row gap-4">
              <div className="my-auto ml-auto">
                <Link
                  href="/"
                  title="Cek"
                  className="py-4 px-8 text-center bg-[#54c47b] text-white w-full rounded-md font-bold hover:bg-[#3e915a] ease-in-out duration-300"
                >
                  Cek Prediksi
                </Link>
              </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Navbar;