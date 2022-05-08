import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import './radar.css';

function RadarGraph(props) {
  return (
    <>     
      <RadarChart className='radar'
        cx={128}
        cy={140}
        outerRadius={78}     
        width={258}
        height={263}
        data= {props.performance}
      >
        <PolarGrid 
          polarRadius={[ 10, 20, 40, 60, 80 ]}
        />
        <PolarAngleAxis
          tick={{ fill: 'white' }} 
          tickSize= {14}
          dataKey={"title"}
        />                   
        <Radar
          name="radar"
          dataKey="value"
          fill="rgba(255, 1, 1)"
          fillOpacity={0.7}
        />       
      </RadarChart>        
  </>
  )
}
Radar.propTypes = {
  performance : PropTypes.array
}
export default RadarGraph