import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="container mx-auto mt-20 mb-16 sm:mb-24 md:mb-28">
      <div className="flex flex-col xl:flex-nowrap gap-10 flex-wrap sm:flex-row sm:items-start items-center justify-center">
        <div>
          <Image
            src="/image/Discussion-amico.png"
            width={500}
            height={250}
            alt="About-Inflation"
            className="mt-4"
          />
        </div>
        <div className="">
          <h1 className="md:text-5xl sm:text-3xl text-3xl mt-2 font-black w-full ">
            Selamat datang di situs prediksi inflasi global kami!
          </h1>
          <p className="text-black text-2xl font-semibold xl:w-[800px] lg:w-[880px] md:w-[670px] mt-6 text-justify">
            Di sini, kami menyediakan informasi terbaru tentang tren inflasi
            global dan prediksi untuk 2025. Inflasi global adalah kenaikan umum
            dalam harga barang dan jasa di seluruh dunia selama periode waktu
            tertentu. Memahami inflasi sangat penting karena memiliki dampak
            yang signifikan pada perekonomian global.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col xl:flex-nowrap gap-10 flex-wrap sm:flex-row-reverse sm:items-start items-center justify-center border-2">
          <div>
            <Image
              src="/image/curve-amico.png"
              width={400}
              height={150}
              alt="About-Inflation"
              className="mt-4"
            />
          </div>
          <div className="">
            <p className="text-black text-2xl font-semibold xl:w-[600px] lg:w-[880px] md:w-[670px] mt-6 text-justify">
              <p className=" font-semibold mt-20 text-2xl text-justify">
                Saat ini, tren inflasi global menunjukkan kecenderungan naik
                yang diakibatkan oleh berbagai faktor, termasuk pertumbuhan
                ekonomi yang kuat di beberapa negara, kebijakan moneter dari
                bank sentral, dan fluktuasi harga komoditas. Meskipun ada
                variasi antar negara, pemahaman tentang tren ini penting untuk
                membuat keputusan yang tepat dalam investasi dan kebijakan
                ekonomi.
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-nowrap gap-10 flex-wrap sm:flex-row sm:items-start items-center justify-center border-2">
          <div>
            <Image
              src="/image/Data-amico.png"
              width={400}
              height={150}
              alt="About-Inflation"
              className="mt-4"
            />
          </div>
          <div className="">
            <p className="text-black text-2xl font-semibold xl:w-[600px] lg:w-[880px] md:w-[670px] mt-6 text-justify">
              <p className=" font-semibold mt-20 text-2xl text-justify">
                Memahami inflasi merupakan langkah penting bagi individu dan
                organisasi. Inflasi dapat mempengaruhi daya beli konsumen, nilai
                aset finansial, dan kebijakan moneter suatu negara. Dengan
                pemahaman yang baik tentang inflasi, orang dapat mengelola
                risiko finansial dengan lebih baik dan membuat keputusan yang
                lebih tepat dalam perencanaan keuangan.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
