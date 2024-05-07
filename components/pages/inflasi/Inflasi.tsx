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
            <div className="flex relative rounded-full justify-center bg-[#3e6491] z-10 py-6 sm:w-[600px] mx-auto -mt-16 sm:-mt-10">
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
              <div className="mt-[75px] pb-4 container mx-auto">
                <div className="border-b-2 pb-4">
                  <h1 className="text-lg sm:text-4xl font-bold">
                    Apa itu Inflasi ?
                  </h1>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
                      <Image
                        src="/image/inflasi.png"
                        alt="article"
                        fill={true}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      <b>Gambar 1</b>{" "}
                      <span className="italic">
                        Inflasi
                      </span>
                    </p>
                  </div>
                  <div className="mt-4 mb-6 space-y-2">
                    <h3 className="text-xl sm:text-3xl font-bold">
                      Pengertian Inflasi
                    </h3>
                    <p className="text-gray-600 text-justify sm:text-2xl">
                      Inflasi adalah fenomena di mana harga barang dan jasa
                      secara umum naik secara signifikan dalam jangka waktu
                      tertentu. Hal ini mengakibatkan daya beli uang menurun,
                      sehingga uang kita tidak lagi memiliki nilai yang sama
                      seperti sebelumnya. Inflasi sering diukur dengan mengamati
                      perubahan indeks harga konsumen (CPI), yang mencatat
                      perubahan harga barang konsumsi yang sering dibeli oleh
                      masyarakat.
                    </p>
                  </div>
                  <div className="mt-4 mb-6 space-y-2">
                    <h3 className="text-xl sm:text-3xl font-bold">
                      Penyebab Inflasi
                    </h3>
                    <p className="text-gray-600 text-justify sm:text-2xl">
                      Ada beberapa faktor yang dapat menyebabkan inflasi. Salah
                      satunya adalah permintaan yang berlebihan, di mana
                      permintaan akan barang dan jasa melebihi penawaran yang
                      tersedia. Hal ini dapat terjadi misalnya ketika pemerintah
                      mencetak terlalu banyak uang atau ketika ekonomi sedang
                      booming. Selain itu, biaya produksi yang meningkat,
                      seperti harga bahan baku dan tenaga kerja, juga dapat
                      menyebabkan inflasi.
                    </p>
                  </div>
                  <div className="mt-4 mb-6 space-y-2">
                    <h3 className="text-xl sm:text-3xl font-bold">
                      Dampak Inflasi
                    </h3>
                    <p className="text-gray-600 text-justify sm:text-2xl">
                      Inflasi memiliki dampak yang kompleks terhadap berbagai
                      aspek kehidupan ekonomi. Salah satunya adalah mengurangi
                      daya beli uang, sehingga konsumen harus mengeluarkan lebih
                      banyak uang untuk membeli barang dan jasa yang sama. Ini
                      juga dapat menyebabkan ketidakstabilan ekonomi, karena
                      harga yang naik secara tiba-tiba dapat mengganggu
                      perencanaan bisnis dan investasi.
                    </p>
                  </div>
                  <div className="mt-4 mb-6 space-y-2">
                    <h3 className="text-xl sm:text-3xl font-bold">
                      Pengendalian Inflasi
                    </h3>
                    <p className="text-gray-600 text-justify sm:text-2xl">
                      Pemerintah dan bank sentral biasanya berusaha untuk
                      mengendalikan inflasi agar tetap stabil dan terkendali.
                      Salah satu cara yang sering digunakan adalah kebijakan
                      moneter, seperti menaikkan suku bunga untuk mengurangi
                      jumlah uang beredar atau mengatur jumlah uang yang beredar
                      melalui kebijakan pengendalian moneter.
                    </p>
                  </div>
                  <div className="mt-4 mb-6 space-y-2">
                    <h3 className="text-xl sm:text-3xl font-bold">
                      Inflasi Global
                    </h3>
                    <p className="text-gray-600 text-justify sm:text-2xl">
                      Inflasi tidak hanya terjadi di satu negara, tetapi dapat
                      mempengaruhi seluruh dunia. Kondisi ekonomi global,
                      seperti fluktuasi harga komoditas dan nilai tukar mata
                      uang, dapat berkontribusi terhadap inflasi global. Ini
                      membuat pentingnya kerjasama antarnegara dan kebijakan
                      koordinasi dalam mengelola inflasi di tingkat global.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="datasetinflasi">
              <div className="mt-[75px] pb-4 container mx-auto">
                <p className="text-center">
                Tabel dataset akan berada pada halaman ini, dan pengguna akan dapat mengunduh csv nya
                </p>
              </div>
            </TabsContent>
            <TabsContent value="prediksiinflasi">
              <div className="mt-[75px] pb-4 container mx-auto">
              <p className="text-center">
               Hasil Prediksi akan berada pada halaman ini
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Inflasi;
