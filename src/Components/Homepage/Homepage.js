import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.webp";
import LogoWhite from "@/assets/images/logo_white.svg";
import Image from "next/image";
import styles from "./homepage.module.css";
import RoomImg from "@/assets/images/room/room.png";
import RoomImg1 from "@/assets/images/room/room1.jpg";
import RoomImg2 from "@/assets/images/room/room2.jpg";
import RoomImg3 from "@/assets/images/room/room3.jpg";
import FbImg from "@/assets/images/fb.png";
import InstaImg from "@/assets/images/insta.png";
import YtImg from "@/assets/images/yt.png";
import TiktokImg from "@/assets/images/tiktok.png";
import WhiteStarImg from "@/assets/images/whitestar.svg";
import StarImg from "@/assets/images/star.svg";
import { Noto_Sans } from "@next/font/google";
import styleImages from "@/data/styleImages";

const Homepage = ({ nextStep }) => {
  const [images, setImages] = useState([]);

  // const images = [
  //   RoomImg,
  //   RoomImg,
  //   RoomImg3,
  //   RoomImg2,
  //   RoomImg3,
  //   RoomImg1,
  //   RoomImg2,
  //   RoomImg3,
  //   RoomImg2,
  //   RoomImg1,
  //   RoomImg1,
  //   RoomImg2,
  //   RoomImg,
  //   RoomImg,
  //   RoomImg3,
  //   RoomImg2,
  // ];

  const myImages = styleImages.slice(0, 20);

  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <div className="w-full h-20 sm:h-24 px-2 sm:px-8 py-4 bg-white border border-slate-100 justify-between items-center inline-flex">
          <div className="justify-start items-center  flex">
            <Image src={Logo} className=" w-[50px] sm:w-16 sm:h-16" />
            <div className="hidden sm:block  text-stone-900 text-lg font-medium noto-sans">
              Create exclusive AI interior design in 30 seconds
            </div>
          </div>
          <div
            onClick={nextStep}
            className="cursor-pointer w-48 justify-end mr-2 items-center gap-6 flex"
          >
            <div className="sm:w-48 h-12 px-5 py-2 bg-[#030303] rounded justify-center items-center gap-1.5 flex">
              <div className=" flex items-center gap-3 text-center text-slate-50 text-sm font-semibold noto-sans leading-none">
                <div>Generate</div>
                <Image width={20} height={20} src={WhiteStarImg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Video  */}
      <div className="relative ">
        <video
          autoPlay
          loop
          muted
          className="h-[305px] sm:h-[506px] w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 h-[305px] sm:h-[506px] flex items-center justify-center">
          <div className={`w-full h-full flex justify-center  bg-[#4D453Eee] `}>
            <div className=" py-10  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch  grow shrink basis-0 px-8 py-2.5  flex-col justify-center items-center gap-8 flex">
                <div
                  className={
                    "herobg self-stretch text-center leading-[2] sm:leading-[4] noto-sans"
                  }
                >
                  <span className="text-orange-50 text-2xl sm:text-5xl noto-sans ">
                    Design Your Space With{" "}
                    <span className="font-bold italic">Feeling</span>
                  </span>
                  <br />

                  <span className="text-orange-50 text-2xl sm:text-5xl noto-sans ">
                    <span className="font-[Gilroy-Bold]">AI </span> Interior
                    Design{" "}
                  </span>
                </div>
                <div
                  onClick={nextStep}
                  className="cursor-pointer px-10 sm:px-16 py-3.5 sm:py-5 bg-orange-50 rounded-lg shadow justify-center items-center gap-3 flex md:w-[418px]"
                >
                  <Image width={35} height={35} src={StarImg} />
                  <div className="text-black font-semibold text-lg  noto-sans leading-[21.6px] ">
                    Generate Designs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Old Version Show Images  */}
      {/* <div className="">
        <div className="w-full mt-7 px-5 bg-white justify-center items-start gap-2.5 inline-flex flex-wrap">
          {images.map((image, key) => {
            return (
              <Image
                key={"image" + key}
                className="w-80 h-80  grow shrink basis-0"
                src={image}
              />
            );
          })}
        </div>
        <div className=" h-20 relative bottom-20 bg-gradient-to-t from-slate-100 to-transparent "></div>
      </div> */}

      {/* New Version Show Images  */}
      <div className="mt-0 ">
        {/* <div className=" h-8 relative top-8 bg-gray-50"></div> */}

        <div className="flex flex-wrap gap-4 justify-center mt-4 max-w-[1695px] m-auto ">
          {myImages.map((image, key) => {
            if (key == 3) {
              return (
                <div className="hidden xl:flex justify-center items-start h-80 w-80 bg-gray-50 ">
                  <div className="py-10 px-4 shadow-inner bg-white rounded-lg mt-2  w-full xl:w-[90%]">
                    <h3 className="noto-sans text-2xl ">Ready to design?</h3>
                    <p className=" text-black font-semibold noto-sans mt-3 text-[16px]">
                      Start your own unique <br />
                      AI-generated design journey now!
                    </p>
                    <button
                      onClick={nextStep}
                      className=" bg-[#030303] noto-sans font-bold text-white  py-4 rounded-md w-full mt-3"
                    >
                      Generate Designs
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <img
                  key={"images1" + key}
                  className="w-80 h-80 rounded-lg"
                  src={image.img}
                />
              );
            }
          })}
        </div>

        <div className=" h-20 relative bottom-20 bg-gradient-to-t from-slate-100 to-transparent "></div>
      </div>

      {/* Design Like this  */}
      <div className="flex justify-center px-5 pb-10 -mt-10">
        <div className="flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-6 flex">
            <div className="flex-col justify-start items-center gap-3 flex">
              <div className="text-center text-stone-900 text-3xl font-bold noto-sans  leading-loose">
                Design Like This?
              </div>
              <div className="text-center text-[#64748B] text-base font-normal noto-sans leading-tight">
                Empower your creativity with our AI. <br />
                Create images just as stunning or even surpass what you've seen!
              </div>
            </div>
            <div
              onClick={nextStep}
              className="h-20 justify-start items-start inline-flex cursor-pointer"
            >
              <div className="px-7 sm:px-20 py-[28px] bg-black rounded-lg shadow justify-center items-center gap-3 flex md:w-[512px] ">
                <Image width={20} height={20} src={WhiteStarImg} />
                <div className="  text-white text-lg noto-sans font-bold  leading-7">
                  Generate Designs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="w-full pt-5 bg-[#4D453E] flex-col justify-between items-start inline-flex">
        <div className="self-stretch px-3 sm:px-8 justify-between sm:justify-start items-start gap-5 inline-flex flex-wrap">
          <div className=" flex gap-5 items-center">
            <div className=" flex items-center gap-2 text-orange-50 text-xl font-bold font-['Plus Jakarta Sans']">
              <Image src={LogoWhite} className="w-[50px] h-[50px]" />
            </div>
            <div className=" text-orange-50 text-sm font-normal noto-sans leading-7">
              <div className="sm:hidden text-right sm:text-left">
                每個角落都反映出未來的生活
              </div>
              <div className="hidden sm:block text-right sm:text-left noto-sans">
                Where Each Corner Reflects the <br /> Feeling of Yours
              </div>
            </div>
          </div>
          <div className="grow   pl-6 flex-col justify-start items-end gap-2 inline-flex mt-10 sm:mt-0 mb-3 pr-2 sm:pr-0">
            <div className="text-orange-50 text-lg font-semibold noto-sans leading-snug">
              Connect with us
            </div>
            <div className="flex gap-3">
              <Image className="cursor-pointer" src={FbImg} />
              <Image className="cursor-pointer" src={InstaImg} />
              <Image className="cursor-pointer" src={YtImg} />
              <Image className="cursor-pointer" src={TiktokImg} />
            </div>
          </div>
        </div>
        <div className="mb-0 sm:mt-20  px-8 bg-[#4D453E] justify-start items-center gap-5 block w-full sm:inline-flex h-[70px]">
          <div className="py-2 text-orange-50 text-sm noto-sans leading-none">
            Copyright 2023 - <span className="noto-sans">Ufoliving</span>
          </div>
          <a
            href="#"
            className="py-2 cursor-pointer text-orange-50 text-sm noto-sans leading-none"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="py-2 cursor-pointer text-orange-50 text-sm noto-sans leading-none"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
