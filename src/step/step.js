import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./step.css";
import Activities from '../Activities/Activities';
export default function Step({ recipeData }) {
  const [activityList, setActivityList] = useState();
  
  const onStepClick = (i, j) => {
    setActivityList([...recipeData.values[i].values[j].valueObj.activities]);
    console.log(activityList);
  };
  useEffect(() => {
  }, [recipeData])
  useEffect(()=>{
  },[activityList])
  
  return (
    <div>
      <div className="left">
        {recipeData &&
          recipeData.values.map((processItem, processIndex) => {
            return (
              <>
                {processItem.values.map((stepItem, stepIndex) => {
                  return (
                    
                    <>
                    <h1>&#8594;</h1>
                    <div>
                      <svg
                        
                        height="80"
                        onClick={(e) => onStepClick(processIndex, stepIndex)}
                      >
                      
                        <rect
                          x="10"
                          y="0"
                          height="80"
                          width={"100%"}
                          className="step-color"
                        />
                        <text
                          x="50%"
                          y="50%"
                          dominant-Baseline="middle"
                          fill="black"
                          fontWeight="bold"
                          text-anchor="middle"
                          // font-size="8"
                          
                        >
                          {stepItem?.name}
                        </text>
                         </svg>
                         </div>
                      </>
                      
                     );
                })}
              </>
              
            );
          })}
         
      </div>
      {activityList && <Activities step={activityList} />}
    </div>
  );
}