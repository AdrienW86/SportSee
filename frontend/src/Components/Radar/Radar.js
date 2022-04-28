import React , {useContext }from 'react';
import { PerformanceContext } from '../../Services/user-performance';
import {Radar,RadarChart,PolarGrid,PolarAngleAxis} from "recharts";
import './radar.css';



function RadarGraph() {

  const {data} = useContext(PerformanceContext) 

console.log(data)



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
         dataKey={"title"}
          margin={5}
        /> 
       
        
           
           <Radar
          width={180}
          height={180}
          name="Mike"
          dataKey="value"
          stroke="rgba(255, 1, 1)"
          fill="rgba(255, 1, 1)"
          fillOpacity={0.7}
        />
        
      </RadarChart>
      
  </>
  )
}
export default RadarGraph