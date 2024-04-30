"use client";
import React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Inflasi = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <Tabs defaultValue="inflasi" className="w-full">
            <div className="flex justify-center bg-white py-4 ">
              <TabsList>
                <TabsTrigger value="inflasi">Apa itu Inflasi ?</TabsTrigger>
                <TabsTrigger value="datasetinflasi">
                  Dataset Inflasi Global
                </TabsTrigger>
                <TabsTrigger value="prediksiinflasi">
                  Prediksi Inflasi Global
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="inflasi">
              <div className="flex flex-row flex-wrap mx-auto items-center bg-white justify-center w-full rounded-xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-20 mt-4">
                <div className="flex flex-wrap flex-row lg:gap-10 gap-4 justify-center">
                  <div className="container mx-auto mt-20 mb-16 sm:mb-24 md:mb-28">
                    <div className="flex flex-col xl:flex-nowrap flex-wrap sm:flex-row sm:items-start items-center justify-center">
                      <Image
                        src="/images/about-image-1.png"
                        width={650}
                        height={400}
                        alt="About-Inflation"
                        className="mt-4"
                      />
                      <div className="">
                        <p className="text-[#7141b1] md:text-sm sm:text-xs text-xs font-extrabold">
                          TENTANG INFLASI
                        </p>
                        <h1 className="md:text-4xl sm:text-3xl text-3xl mt-2 font-black w-full ">
                          `Informasi mengenai inflasi`
                        </h1>
                        <p className="text-[#6d6d6d] xl:w-[600px] lg:w-[880px] md:w-[670px] mt-6">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Reprehenderit enim vel, facere aperiam ullam ex
                          repudiandae aspernatur quasi necessitatibus, provident
                          dolores quas veritatis maxime accusantium vitae?
                          Eligendi officia voluptates fugiat. Lorem ipsum, dolor
                          sit amet consectetur adipisicing elit. Ducimus nulla
                          accusamus ipsum id voluptatum quo harum veniam. Sunt
                          iusto optio reiciendis saepe error numquam vero quod,
                          officia quo veniam unde! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Soluta nulla repellat
                          libero consequatur nisi itaque tenetur aliquid,
                          dolorem sapiente ipsam, cumque quidem. Tempora,
                          placeat? Dicta et perferendis sed quam nemo?
                        </p>
                        <p className=" xl:w-[600px] lg:w-[880px] md:w-[670px] italic font-bold mt-20 ">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur numquam repellat voluptatum dolore,
                          voluptatem harum ad mollitia sit omnis ullam ut optio
                          illo sapiente fuga facere quod, expedita impedit et?
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Praesentium nulla blanditiis neque autem soluta
                          atque tempora numquam tenetur laudantium culpa eius
                          inventore tempore quam dolorem itaque porro, vel, eum
                          odio!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="datasetinflasi">
              <div className="flex flex-row flex-wrap mx-auto items-center bg-white justify-center w-full rounded-xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-20 mt-4 py-8">
                <div className="flex flex-wrap flex-row lg:gap-10 gap-4 justify-center">
                  Ini akan berisikan dataset inflasi yang kami gunakan untuk memprediksi inflasi 2025
                </div>
              </div>
            </TabsContent>
            <TabsContent value="prediksiinflasi">
              <div className="flex flex-row flex-wrap mx-auto items-center bg-white justify-center w-full rounded-xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-20 mt-4 py-8">
                <div className="flex flex-wrap flex-row lg:gap-10 gap-4 justify-center">
                  Halaman ini akan berisikan Prediksi Inflasi
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Inflasi;
