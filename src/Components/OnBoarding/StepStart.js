import { MyContext } from "@/pages/_app";
import React, { useContext } from "react";
import Homepage from "../Homepage/Homepage";
import { useRouter } from "next/router";

function StepStart() {
  const router = useRouter();
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);

  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    localStorage.setItem("onBoardingStep", 0);
    setOnBoardingStep(0);

    // Clear onBoarding data and onBoardingStep
    localStorage.removeItem("onBoard");
    localStorage.removeItem("onBoardingStep");

    router.push("/ai");
  };

  return (
    <div>
      <Homepage nextStep={nextStep} />
      {/* <button onClick={nextStep}>Get Started</button> */}
    </div>
  );
}

export default StepStart;
