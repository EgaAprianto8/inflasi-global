import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { GrGooglePlus } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" sm:px-8 md:px-22 xl:px-10 relative overflow-hidden justify-center items-center flex flex-col w-full h-[500px] bg-hero-news py-10 bg-[#5488c4]">
      <div className="absolute container flex flex-col sm:py-12 py-4 md:px-0 xl:container lg:px-20">
        <h3 className="text-white text-xs sm:text-sm font-semibold">
          Prediksi
        </h3>
        <h1 className="text-white text-4xl sm:text-5xl font-bold">
          Inflasi Global
        </h1>
        <p className="text-white sm:text-base text-xs sm:w-[450px]">
          &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Aliquid nesciunt, corrupti excepturi eos facilis fugiat iusto
          voluptate facere quod expedita ab mollitia, sed aut eaque, deleniti
          autem. Ab, veritatis ullam.&quot;
        </p>
        {/* <div className="flex text-white flex-col sm:flex-row gap-4 sm:gap-12 xl:w-full sm:w-[500px] lg:w-[1000px] lg:gap-16 xl:gap-32 sm:mt-24 mt-8  ">
          <div className="flex flex-col gap-1 sm:gap-3 ">
            <h1 className="text-sm sm:text-2xl font-bold">Hubungi Kami</h1>
            <div className="flex flex-row gap-3 justify-start">
              <FaLocationPin size={17} />
              <p className="text-xs sm:text-base font-light w-[180px] ">
                XXXXXXXX, Jl. XXXXX, Blk No.XX, XXXX, Kec.
                XXXX, Kab. XXXXXXX, Jawa Barat 4XXX1
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <FaPhoneAlt size={12} />
              <p className="text-xs sm:text-base font-light">(0XX) 3XXX</p>
            </div>
            <div className="flex flex-row gap-3">
              <GrMail size={17} />
              <p className="text-xs sm:text-base font-light">
                xxxxx@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:w-[179px] gap-2 ">
            <h1 className="text-sm sm:text-2xl font-bold">Akses Cepat</h1>
            <div className="flex flex-col font-light gap-1 sm:gap-2">
              <a href="/" className="text-xs sm:text-base font-light">
                Home
              </a>
              <a
                href="/"
                className="text-xs sm:text-base font-light"
              >
                Inflasi
              </a>
              <a
                href="/tentang-kami"
                className="text-xs sm:text-base font-light"
              >
                Tentang Kami
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:w-[179px] gap-2 ">
            <h1 className="text-sm sm:text-2xl font-bold">Quick Links</h1>
            <div className="flex flex-col font-light gap-2">
              <a href="" className="text-xs sm:text-base">
                Namaz Timings
              </a>
              <a href="" className="text-xs sm:text-base">
                FAQ
              </a>
            </div>
          </div>
        </div> */}
        <div className="border-t-2 border-white sm:mt-4 mt-2 xl:mt-14"></div>
        <div className="text-center items-center justify-center flex flex-col mt-2 sm:mt-8">
          {/* <h1 className=" text-white font-bold text-md sm:text-xl">
            Aturan & Kebijakan Penggunaan
          </h1> */}
          <p className="xl:w-[804px] sm:w-[600px] text-xs sm:text-sm xl:text-base text-white font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt animi soluta ratione cupiditate aperiam quibusdam cumque modi hic doloremque eaque placeat laboriosam earum, perferendis porro. Ex est veritatis voluptate incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
