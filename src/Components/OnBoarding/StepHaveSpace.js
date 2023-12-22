import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import leftarrow from "../../assets/images/arrow-left.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.svg";
import logo from "../../assets/images/onBoard/logo_withbg.svg";
import step from "../../assets/images/_Step icon base.png";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

import { getLineAuth, lineAuth } from "../../data/lineAuth";
import { useRouter } from "next/router";

// This is not getting run
// todo: what am I doing wrong?
// export async function getServerSideProps(context) {
//   console.log("context");
//   const { req } = context;
//   const protocol = req.headers["x-forwarded-proto"] || "http";
//   const host = req.headers.host; // Contains the hostname and port
//   const fullUrl = `${protocol}://${host}`;

//   return {
//     props: { fullUrl }, // Pass fullUrl as a prop to your component
//   };
// }

function StepHaveSpace(props) {
  const { data, status } = useSession();
  const router = useRouter();
  const { setOnBoardingStep, onBoardingStep, user } = useContext(MyContext);
  console.log(user, "usr");
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const [selectedOption, setSelectedOption] = useState(onBoard.haveSpace);

  const [invalidPlan, setInvalidPlan] = useState(false);

  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if (onBoard.haveSpace) {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };

  const handleInput = (selected) => {
    let invalid = false;

    setSelectedOption(selected);
    let myOnBoard = onBoard;
    myOnBoard.haveSpace = selected;
    setOnBoard(myOnBoard);
    if (status === "authenticated") {
      // Check generation limit
      fetch("/api/check-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: user.email }),
      })
        .then((res) => res.json())
        .then((res) => {
          let planValid = res;
          console.log(planValid, "check plan");
          if (planValid === false) {
            setInvalidPlan(true);
          } else {
            if (selected == "yes") {
              nextStep();
            }
            if (selected == "no") {
              localStorage.setItem("onBoardingStep", onBoardingStep + 2);
              setOnBoardingStep(onBoardingStep + 2);
            }
          }
        });
    } else {
      // const hostname = window.location.origin;
      // // console.log(getLineAuth(hostname));
      // // console.log("temp: " + hostname);
      // // console.log("next :" + window.location.origin);
      // // console.log("props " + props);
      // window.open(getLineAuth(hostname), "_self");
      signIn("google");
    }
  };

  const ExceededLimit = () => {
    return (
      <div className="bg-gray-50 sm:rounded-lg mx-3 my-4">
        <div className="px-4 py-4 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Generation limit reached: Need to generate more?
          </h3>

          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Send us a LINE message!</p>
          </div>

          <div className="mt-4">
            <a href="https://lin.ee/ZlksA8L">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Contact us
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const Selection = () => {
    return (
      <>
        <h3 className=" text-[#271703] text-[25px] md:text-[48px] text-center font-semibold noto-sans ">
          Do you have a space image?
        </h3>
        <div className="flex items-center px-4 md:px-6 py-6 space-x-[16px] bg-[#F7F8F9] mx-4 md:mx-[35px] rounded-3xl my-[30px]">
          <Image
            className=" w-[40px] h-[40px] bg-[#9D5C0D] rounded-xl border-4  border-[#f1c28e]"
            src={logo}
            alt=""
          />
          <h2 className=" text-[12px] md:text-[14px] font-semibold noto-sans text-[#271703]">
            <Link href="/" className="text-[#667412]">
              {" "}
              It doesn't matter if you don't have photos! 🌟
            </Link>{" "}
            Our AI will produce different spaces of similar styles based on the
            style you selected above, allowing your space to fully display your
            individual style and echo your tastes and preferences!
          </h2>
        </div>
        <div className=" mx-auto flex justify-center">
          <div className=" mx-auto text-center">
            <div className=" gap-4 items-center flex  justify-center bg-[#F7F8F9] border border-[#B8C0CC] rounded-[12px] px-3 py-2">
              <button
                onClick={() => handleInput("yes")}
                className="px-10 sm:px-0 sm:w-[147px] h-[44px] border border-[#9D5C0D] text-[14px] text-center md:text-[16px] font-semibold noto-sans text-[#9D5C0D] rounded-lg "
              >
                Yes
              </button>
              <button
                onClick={() => handleInput("no")}
                className="px-10 sm:px-0 sm:w-[147px] h-[44px] border border-[#9D5C0D] text-[14px] text-center md:text-[16px] font-semibold noto-sans text-[#9D5C0D] rounded-lg "
              >
                No
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="h-[90vh] md:h-[86vh] flex items-center">
      <div className="w-full h-full  md:h-auto ">
        <div className="h-full  w-full   ">
          {invalidPlan ? <ExceededLimit /> : <Selection />}

          {/* .......  next prev btn.......... */}
          {/* <div className="sticky bottom-0 bg-white w-full px-5 md:mt-4">
        <div className="flex w-full gap-3  items-center justify-center md:justify-end ">
          <div className="myBtn md:hidden" onClick={prevStep}>
            <Image
              className="border w-[55px] rounded-lg bg-gray-50 py-[13px] px-[14px]"
              src={leftarrow}
              alt=""
            />
          </div>
          <div
            onClick={nextStep}
            className="myBtn bg-[#9D5C0D] text-white flex rounded py-[12px]  md:py-3 px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
          >
            <p className="text-[17px] md:text-[20px] font-[Gilroy-SemiBold]">
              Next
            </p>
           <Image className="" src={arrow} alt="" />
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default StepHaveSpace;
