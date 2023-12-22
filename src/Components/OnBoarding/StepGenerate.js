import React, { useContext, useEffect, useState } from "react";
import ShowGeneratedImage from "../ShowGeneratedImage/ShowGeneratedImage";
import RenderImage from "../RenderImage/RenderImage";
import generateImage from "@/utils/generateImage";
import checkImage from "@/utils/checkImage";
import { generatePrompt } from "@/utils/generatePrompt";
import { MyContext } from "@/pages/_app";
import logo from "@/assets/images/onBoard/logo svg.png";
import userIcon from "@/assets/images/onBoard/user-01.png";
import downArrow from "@/assets/images/onBoard/Icon.png";
import StarImg from "@/assets/images/star.png";
import CheckImg from "@/assets/images/check.png";
import LogoBlackBgImg from "@/assets/images/logo_blackbg.png";
import LogoWhite from "@/assets/images/logo_white.svg";
import PlusIconImg from "@/assets/images/onBoard/plusicon.png";
import RepeatImg from "@/assets/images/onBoard/repeat-02.png";
import Image from "next/image";
import ProgressBar from "../ProgressBar/ProgressBar";
import ImageModal from "../ImageModal/ImageModal";
import Link from "next/link";
import Header from "../Header/Header";
import translate from "@/utils/translate";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
const RoomImg = "/public/images/room.png";

const designTips = [
  "Use materials with different textures to create a tactile spatial experience.",
  "Incorporate some unusual flooring materials into the space, such as recycled wood planks or collage-style floor tiles.",
  "Use green walls or green screens to achieve a natural environment indoors.",
  "Choose bright colors inside the cabinets to increase the sense of surprise when opening the cabinets.",
  "Use hidden door panels to make the door become part of the wall, enhancing the overall sense of consistency.",
  "Use wireless charging technology to integrate furniture and reduce the visual interference of wires.",
  "Create a multi-level design on the ceiling to add depth to the space.",
  "Choose lighting fixtures with unique shapes to become the focal point of the space.",
  "Break up the traditional rectangular shape with specially shaped windows or doors.",
  "Increase practicality in your living room with an adjustable-height coffee table.",
  "Choose wallpaper with light and shadow effects to create a sense of mystery.",
  "Choose special non-slip materials for the bathroom floor to take into account both safety and beauty.",
  "Use columns or beams in the space to create a simple yet modern design.",
  "Place a uniquely shaped key plate at the entrance to add a personal touch.",
  "Achieve versatility in your space with swiveling furniture.",
  "Choose glossy decorations to enhance the luxury of the overall space.",
  "Add dynamic lines to the ceiling to create a modern art style.",
  "Choose unusual shapes of pendant lights to create unique light and shadow effects.",
  "Place large plants in walkways or corners to create a green feel.",
  "Use the space at the door to install a unique shoe cabinet to enhance the overall impression.",
  "Add irregularly shaped rugs to the floor to create a dramatic visual effect.",
  "Use special materials to create textured kitchen cabinets.",
  "Use crystal tiles in the bathroom to create a unique effect of light and shadow.",
  "Choose fabric art to decorate the walls and add a cultural atmosphere.",
  "Use hidden cabinets to cleverly hide storage space.",
  "Create a relaxing nook by setting up a comfortable hammock in your loft or balcony area.",
  "Choose a specially shaped fireplace to become the artistic focal point of your living room.",
  "Hang decorations of different materials on the bedside wall to create a unique bedside wall design.",
  "Use curtains made of special materials to decorate windows and add uniqueness to the window area.",
  "Choose indoor pots with interesting shapes to add personality to your plants.",
];

function StepGenerate() {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [progressImage, setProgressImage] = useState("");

  const [progress, setProgress] = useState(0);
  const [messageSent, setMessageSent] = useState(false);
  const { onBoardingStep, setOnBoardingStep, user } = useContext(MyContext);
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};

  const demoImages = [
    "https://i.ibb.co/316mc1W/room.png",
    "https://i.ibb.co/q5S5HyQ/room1.jpg",
    "https://i.ibb.co/316mc1W/room.png",
    "https://i.ibb.co/q5S5HyQ/room1.jpg",
  ];
  useEffect(() => {
    handleGenerate();
  }, []);

  useEffect(() => {
    console.log(messageSent, "messageSent after update");
  }, [messageSent]);

  const sendImageMsg = (images) => {
    const myuid = JSON.parse(localStorage.getItem("user")).uid;
    fetch("/api/send-line-message", {
      method: "POST",
      body: JSON.stringify({
        uid: myuid,
        messages: [
          {
            type: "image",
            originalContentUrl: images[0],
            previewImageUrl: images[0],
          },
          {
            type: "image",
            originalContentUrl: images[1],
            previewImageUrl: images[1],
          },
          {
            type: "image",
            originalContentUrl: images[2],
            previewImageUrl: images[2],
          },
          {
            type: "image",
            originalContentUrl: images[3],
            previewImageUrl: images[3],
          },
        ],
      }),
    });
  };
  const sendTextMsg = () => {
    if (messageSent) return;
    setMessageSent(true);

    fetch("/api/send-line-message", {
      method: "POST",
      body: JSON.stringify({
        uid: user.uid,
        messages: [
          {
            type: "text",
            text: "請留下您的縣市，將會盡快匹配設計師",
          },
        ],
      }),
    });
  };

  const PairDesignerPrompt = () => {
    return (
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>

          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              Please check your LINE messages!
            </p>
          </div>

          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                <span className="sr-only">Dismiss</span>

                <XMarkIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                  onClick={() => setMessageSent(false)}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleGenerate = async () => {
    setProgress(0);
    setProgressImage("");
    setGeneratedImages([]);
    const onBoard = JSON.parse(localStorage.getItem("onBoard"));
    console.log(onBoard, "onBoard");
    const { image, type, style, place, size, budget } = onBoard;
    // const translated = await translate(type.name);
    const translated = type.name;

    const translatedType = translated?.trans;
    const prompt = generatePrompt({ image, type: translatedType, style });
    console.log(prompt, "prompt");

    // DEBUGGING - skip AI
    // setProgress(100);
    // setGeneratedImages(demoImages);
    // return;

    setProgress(5);
    setTimeout(() => {
      setProgress(10);
    }, 2000);
    setTimeout(() => {
      setProgress(15);
    }, 4000);
    generateImage({ prompt })
      .then((msgId) => {
        setTimeout(() => {
          setProgress(20);
          let myInterval = setInterval(() => {
            checkImage(msgId, onBoard, user).then((checkRes) => {
              if (checkRes.progress > 20) {
                setProgress(checkRes.progress);
              }
              if (checkRes.progress == 100) {
                clearInterval(myInterval);
              }
              if (checkRes.images) {
                setGeneratedImages(checkRes.images);
                sendImageMsg(checkRes.images, user.uid);
              }
              if (checkRes.progressImage) {
                setProgressImage(checkRes.progressImage);
              }
            });
          }, 500);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const prevStep = () => {
    if (onBoardingStep > 0) {
      if (onBoard.haveSpace == "yes") {
        localStorage.setItem("onBoardingStep", onBoardingStep - 1);
        setOnBoardingStep(onBoardingStep - 1);
      } else {
        localStorage.setItem("onBoardingStep", onBoardingStep - 2);
        setOnBoardingStep(onBoardingStep - 2);
      }
    }
  };
  const redirectStep = (step) => {
    localStorage.setItem("onBoardingStep", 2);
    setOnBoardingStep(2);
  };
  return (
    <div>
      {/* <button onClick={prevStep}>Prev Step</button>  */}

      <Header />

      {/* Progress and Loading  */}
      <div className="lg:bg-[#E3E9EE] min-h-[93vh] lg:p-8">
        <div className="bg-white rounded-md p-8 ">
          <div className="lg:border-2 lg:border-[#FBE8D0] md:py-8 min-h-[82vh]">
            <div className="text-center  pb-8">
              <h2 className="text-[#271703] font-semibold noto-sans text-3xl md:text-4xl">
                Generate My Space
              </h2>
              <p className="text-[#9D5C0D] text-md md:text-xl mt-3 noto-sans">
                Let AI craft a space that's uniquely yours
              </p>
            </div>
            <div className="hidden md:block w-2/3 border-b-2 m-auto"></div>

            <div className="w-3/4 md:w-1/2 m-auto">
              {progress > 0 && progress != 100 && (
                <div className="mb-3 ">
                  <ProgressBar progress={progress} />
                </div>
              )}
              {progress >= 10 && progress != 100 && (
                <div className="mt-2 flex items-center  gap-3 animate-pulse">
                  <Image src={CheckImg} />
                  <p className="noto-sans">
                    Scanning the data <span className="animate-ping">..</span>
                  </p>
                </div>
              )}
              {progress >= 20 && progress != 100 && (
                <div className="mt-3 flex items-center  gap-3 animate-pulse">
                  <Image src={StarImg} />
                  <p className="noto-sans">
                    Generating interior design images just for you...
                  </p>
                </div>
              )}
            </div>

            {/* TIPS */}
            {progress <= 100 && (
              <>
                <div className="lg:w-2/5 relative lg:-left-10 m-auto">
                  <div className="mt-3 md:mt-5 flex items-center  gap-3">
                    <Image className="h-8 w-8" src={LogoBlackBgImg} />
                    <p className="noto-sans">
                      Your interior design images are ready to impress!
                    </p>
                  </div>
                </div>
                <div className="lg:w-2/5 m-auto bg-[#F2F1EF] mt-3 rounded-md px-3 md:px-5 py-3">
                  <div className="flex  gap-3">
                    <p className="font-semibold noto-sans text-md md:text-xl">
                      {
                        designTips[
                          Math.floor(Math.random() * designTips.length)
                        ]
                      }
                    </p>
                  </div>
                </div>
              </>
            )}

            {progress < 100 && (
              <div
                className={`mt-5 flex justify-center  m-auto ${
                  progressImage && "md:w-1/3"
                }`}
              >
                <RenderImage src={progressImage} />
              </div>
            )}
            {/* After Generateing Images  */}
            {progress == 100 && (
              <div className="w-full  lg:w-2/3 m-auto flex justify-center gap-3">
                <div className="gap-3 bg-[#F2F1EF] p-5 sm:p-0 rounded-xl sm:bg-white flex justify-center items-center flex-wrap mt-10 ">
                  {generatedImages.map((img, i) => {
                    return (
                      <ImageModal key={img + i} img={img}>
                        <div className="cursor-pointer  ">
                          <RenderImage src={img} />
                        </div>
                      </ImageModal>
                    );
                  })}
                </div>
              </div>
            )}

            {messageSent && <PairDesignerPrompt />}
            <div className="flex flex-wrap gap-3 md:gap-10 justify-end sm:justify-center mt-5">
              <div
                onClick={handleGenerate}
                className="flex justify-center w-full sm:w-auto gap-3 cursor-pointer px-8 py-3 rounded-md items-center border-2 border-[#D0D5DD]"
              >
                <Image src={RepeatImg} />
                <p className="font-semibold noto-sans">Regenerate</p>
              </div>
              <div
                onClick={() => redirectStep(0)}
                className="flex justify-center w-full sm:w-auto gap-3 cursor-pointer px-8 py-3 rounded-md items-center border-2 border-[#D0D5DD]"
              >
                <Image src={PlusIconImg} />
                <p className="font-semibold noto-sans">Select a new style</p>
              </div>
              {progress == 100 && (
                <div
                  onClick={sendTextMsg}
                  className="flex  justify-center w-full sm:w-auto gap-3 cursor-pointer pl-3 pr-7 rounded-md items-center bg-[#9D5C0D] text-white"
                >
                  <Image className="h-12" src={LogoWhite} />
                  <p className="font-semibold noto-sans py-2 sm:py-0">
                    Get a local designer to work on your project
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepGenerate;
