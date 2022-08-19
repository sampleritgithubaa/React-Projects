import React, { useState } from 'react'
import response1 from '../response1.json';
import 'bootstrap/dist/css/bootstrap.css';
import Step1 from "../step/step1";
import './recipe.css';
export default function Recipe1() {
  const [selectedKey, setSelectedKey] = useState("");
  const selectDropDown = (e) => {
    setSelectedKey('step1');
  };
  return (

    <div className='p'>
      {/* {response?.data?.recipe?.values[0]?.values[1]?.valueObj?.activities.map((i) => { */}
      {/* return ( */}
      {/* <div> */}
      {/* <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8595;</h1> */}
       <div className="a">
      <svg width="200" height="120" onClick={(e) => selectDropDown(e)}>
        <rect
          x="0"
          y="0"
          width="330"
          height="200"
          stroke="#00FFFF"
          stroke-width="4px"
          fill="grey"
        />
        <text x="50%" y="30%" dominant-baseline="middle" fill="white" text-anchor="middle">Type:{response1.data.recipe.name}</text>
      </svg>
      
      </div>
      <br></br>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8595;</h1>
      {selectedKey === "step1" && <Step1 />}
      {/* <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8595;</h1> */}
    </div>
  )
}