import React, { useContext, useState } from "react";
import StepStart from "./StepStart";
import StepStyle from "./StepStyle";
import StepType from "./StepType";
import StepPlace from "./StepPlace";
import StepSize from "./StepSize";
import StepBudget from "./StepBudget";
import { MyContext } from "@/pages/_app";
import StepWho from "./StepWho";
import StepHaveSpace from "./StepHaveSpace";
import StepUpload from "./StepUpload";
import StepGenerate from "./StepGenerate";
import OnBoardLayout from "./OnBoardLayout";

function OnBoarding() {
  const { onBoardingStep } = useContext(MyContext);

  return (
    <div>
      {/* {onBoardingStep == 0 && <StepStart />} */}
      {onBoardingStep == 0 && (
        <OnBoardLayout>
          {/* <StepWho /> */}
          <StepStyle />
        </OnBoardLayout>
      )}
      {onBoardingStep == 1 && (
        <OnBoardLayout>
          <StepType />
        </OnBoardLayout>
      )}
      {onBoardingStep == 2 && (
        <OnBoardLayout>
          <StepHaveSpace />
        </OnBoardLayout>
      )}
      {onBoardingStep == 3 && (
        <OnBoardLayout>
          <StepUpload />
        </OnBoardLayout>
      )}
      {/* {onBoardingStep == 5 && (
        <OnBoardLayout>
          <StepPlace />
        </OnBoardLayout>
      )}
      {onBoardingStep == 6 && (
        <OnBoardLayout>
          <StepSize />
        </OnBoardLayout>
      )}
      {onBoardingStep == 7 && (
        <OnBoardLayout>
          <StepBudget />
        </OnBoardLayout>
      )}
      {onBoardingStep == 8 && <OnBoardLayout></OnBoardLayout>} */}
      {onBoardingStep == 4 && <StepGenerate />}
    </div>
  );
}

export default OnBoarding;
