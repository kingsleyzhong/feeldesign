import { MyContext } from "@/pages/_app";
import React, { useContext, useRef, useState } from "react";
import logo from "../../assets/images/onBoard/ion_arrow-up.svg";
import repeat from "../../assets/images/onBoard/repeat-02.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.svg";
import Image from "next/image";
import step from "../../assets/images/_Step icon base.png";
import leftarrow from "../../assets/images/arrow-left.png";
import axios from "axios";

function StepType() {
  const inputRef = useRef("input");
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState(onBoard?.type?.name);
  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };

  const nextStep = async () => {
    if (onBoard.type) {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };
  const types = [
    {
      name: "Living Room",
    },
    {
      name: "Bedroom",
    },
    {
      name: "Kitchen",
    },
    {
      name: "Bathroom",
    },
    {
      name: "Dining Room",
    },
    {
      name: "Home Office",
    },
    {
      name: "Nursery",
    },
    {
      name: "Library",
    },
    {
      name: "Studio",
    },
    {
      name: "Loft",
    },
    {
      name: "Foyer",
    },
    {
      name: "Mudroom",
    },
    {
      name: "Laundry Room",
    },
    {
      name: "Basement",
    },
    {
      name: "Home Theater",
    },
    {
      name: "Game Room",
    },
    {
      name: "Guest Room",
    },
    {
      name: "Walk-in Closet",
    },
    {
      name: "Conservatory",
    },
    {
      name: "Craft Room",
    },
    {
      name: "Workshop",
    },
    {
      name: "Playroom",
    },
    {
      name: "Gym",
    },
    {
      name: "Wine Cellar",
    },
    {
      name: "Garage",
    },
    {
      name: "Attic Room",
    },
    {
      name: "Balcony",
    },
    {
      name: "Rooftop Terrace",
    },
    {
      name: "Storage Room",
    },
    {
      name: "Pantry",
    },
  ];

  const handleInput = (i) => {
    setSelectedOption(types[i].name);
    let myOnBoard = onBoard;
    myOnBoard.type = types[i];
    setOnBoard(myOnBoard);
    inputRef.current.focus();
  };
  const handleInput2 = (value) => {
    setSelectedOption(value);
    let myOnBoard = onBoard;
    myOnBoard.type = {
      name: value,
    };
    setOnBoard(myOnBoard);
  };
  return (
    <div className="h-[90vh] md:h-[86vh]">
      <div className="w-full  md:h-auto   ">
        <div className="h-full  md:pt-[10%]">
          <h3 className="hidden md:block text-[#271703] text-[48px] text-center font-semibold noto-sans ">
            Select room type
          </h3>
          <p className="hidden md:block text-[18px] text-[#9D5C0D] text-center noto-sans mb-[30px]">
            Pick or type the room type you're envisioning
          </p>

          <div className="md:hidden mb-[16px] w-full px-1 flex gap-3 items-center py-[10px] bg-[#FEF7EF] justify-center">
            <Image className="" src={step} alt="" />
            <div className="">
              <h3 className=" text-[#271703] text-[16px] font-semibold noto-sans ">
                {" "}
                Select room type
              </h3>
              <p className="  text-[12px] text-[#9D5C0D] noto-sans ">
                Pick or type the room type you're envisioning
              </p>
            </div>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-5">

        {types.map((type, i) => {
          return (
            <div key={type.name + i} className="w-3/12">
              <input
                id={type.name.replaceAll(" ", "")}
                type="radio"
                checked={selectedOption == type.name}
                onChange={() => handleInput(i)}
              />
              <label htmlFor={type.name.replaceAll(" ", "")}>
                <img src={type.img} alt="" />
                <b>{type.name}</b>
              </label>
            </div>
          );
        })}
      </div> */}

          <div className="mt-3  rounded-[20px] flex flex-col items-center md:items-start px-2 md:px-4  pt-6 pb-[64px] mx-4 md:mx-7  bg-[#F7F8F9]">
            <p className="mb-[12px] text-[14px] text-center px-4 md:text-left md:text-[16px] font-semibold text-[#76450A] ">
              Pick a Room Type or Craft Your Own! Choose from options, or type
              in your unique space.
            </p>

            {/* .........  input field ........... */}

            <div className="mt-2 flex bg-white rounded-[10px] w-full md:w-[96%] space-x-[10px] md:space-x-[16px] px-3 py-2 mr-6 ml-7 md:ml-0 md:py-3 mx-3 border border-[#D0D5DD] mb-5 shadow-lg md:shadow">
              <Image
                width="50"
                className="p-[6px] rounded-[10px] bg-[#271703] w-[35px] h-[35px]"
                src={logo}
                alt="logo"
              />
              <input
                className="border-0 outline-none cursor-pointer w-full"
                type="text"
                placeholder="|E.g Open-concept living room."
                value={selectedOption}
                ref={inputRef}
                onChange={(e) => {
                  handleInput2(e.target.value);
                }}
              />
            </div>

            {/* .........  tab option type ........... */}

            <div className="flex justify-center px-2  md:justify-start gap-4 flex-wrap">
              {types.map((type, i) => {
                return (
                  <div
                    onClick={() => handleInput(i)}
                    key={type.name + i}
                    className={`px-4 py-[6px]  shadow rounded-md flex items-center cursor-pointer ${
                      selectedOption == type.name
                        ? "bg-[#271703] text-white"
                        : "text-[#271703] bg-white"
                    }`}
                  >
                    <h2 className=" m-0 py-1 text-[14px] cursor-pointer noto-sans font-semibold">
                      {type.name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>

          {/* .........  next prev button........... */}
        </div>
        <div className=" sticky bottom-0 bg-white w-full px-5 pt-3 sm:pb-3">
          <div className="hidden lg:flex w-full md:w-auto space-x-[18px] md:space-x-[40px] justify-center md:justify-end items-center">
            <div
              onClick={nextStep}
              className="myBtn bg-[#9D5C0D] text-white flex rounded-[8px] py-2 md:py-3 px-[28px] items-center justify-center w-full  md:w-[192px] cursor-pointer"
            >
              <p className=" text-[20px] font-semibold noto-sans whitespace-nowrap">
                Next
              </p>
              <Image className="" src={arrow} alt="" />
            </div>
          </div>

          {/* ........... for responsive......... */}
          <div className="lg:hidden flex w-full items-center justify-center md:justify-end space-x-[18px] ">
            <div className="myBtn" onClick={prevStep}>
              <Image
                className="border w-[55px] rounded-lg bg-gray-50 py-[12px] px-[14px]"
                src={leftarrow}
                alt=""
              />
            </div>
            <div
              onClick={nextStep}
              className="myBtn bg-[#9D5C0D] text-white flex rounded py-[12px] px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
            >
              <p className="text-[17px] md:text-[20px] font-semibold noto-sans">
                Next
              </p>
              <Image className="" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepType;
