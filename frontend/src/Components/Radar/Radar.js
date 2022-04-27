import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Radar,RadarChart,PolarGrid,PolarAngleAxis} from "recharts";
import './radar.css';

const data = [
    {
      subject: "Intensité",
      A: 120,
     
     
    },
    {
      subject: "Vitesse",
      A: 98,
     
    },
    {
      subject: "Force",
      A: 86,
      
    },
    {
      subject: "Endurance",
      A: 99,
      
    },
    {
      subject: "Energie",
      A: 85,
      
    },
    {
      subject: "Cardio",
      A: 65,
    }
  ];

function RadarGraph() {
  const [state, setState] = useState(null)

   useEffect(() => {
    axios.get("http://localhost:3000/user/18/performance")
     .then(res => {
        setState(res.data)
      })
  },[])
  console.log(state)    
      
  return (
    <>
      <RadarChart className='radar'
        cx={130}
        cy={140}
        outerRadius={88}
        innerRadius={12}
        width={258}
        height={263}
        data={data}
      >
        <PolarGrid />
        
        <PolarAngleAxis  
          tick={{ fill: 'white' }} 
          dataKey="subject" 
          margin={5}
        /> 
           
           <Radar
          width={180}
          height={180}
          name="Mike"
          dataKey="A"
          stroke="rgba(255, 1, 1)"
          fill="rgba(255, 1, 1)"
          fillOpacity={0.7}
        />
      </RadarChart>
  </>
  )
}
console.log(<PolarGrid/>)
export default RadarGraph