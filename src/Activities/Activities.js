import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Activities.css";
import Parameter from "../Parameters/parameter";
export default function Activities(step) {
  const [parameter, setParameterList] = useState();
  const onActivityClick = (j) => {
    setParameterList([...step.step[j].valueObj.parameters]);
  };
  useEffect(() => {}, [step]);
  useEffect(() => {}, [parameter]);
  return (
    <div>
      <div className="aa">
        {step &&
          step?.step?.map((processItem,processIndex) => {
            return (
              <>
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</h1>
                <>
                  <svg  
                    height="80"
                    onClick={(e) => onActivityClick(processIndex)}
                  >
                    <rect
                      x="0"
                      y="0"
                      height="80"
                      width={'100%'}
                      stroke="white"
                      stroke-width="8px"
                      className="activity-color"
                    />
                    <text
                      x="50%"
                      y="50%"
                      dominant-baseline="middle"
                      fill="black"
                      fontWeight="bold"
                      text-anchor="middle"
                      // font-size="10"
                    >
                      {processItem?.name}
                    </text>
                  </svg>
                </>{" "}
                <br></br>
              </>
            );
          })}
        {parameter && <Parameter ActivityList={parameter} />}
      </div>
    </div>
  );
}
