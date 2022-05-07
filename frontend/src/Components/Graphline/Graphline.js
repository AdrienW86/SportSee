import React from 'react';
import { AreaChart, Tooltip, Area, XAxis, YAxis} from "recharts";
import './graphline.css';

const CustomTooltip = ({payload }) => {
  if (payload && payload.length) {
    return (
      <div className="tooltip-graphline">
        <p className="graphline-tooltip">{`${payload[0].payload.sessionLength}min`}</p>            
      </div>
    );
  }
  return null;
};

function Graphline(props) {
  return (
    <>
    <h2 className='graphline-title'> Durée moyenne des sessions </h2>
      <AreaChart
        width={258}
        height={263}
        data={props.session}       
        className='graph-line' 
        margin={{
          top: 100,
          right: 0,
          left: 0,
          bottom: 10,
        }}
      >       
        <XAxis        
        interval="preserveStartEnd"
        domain={[0,7]}
          tickSize = {14}
          stroke="white"
          dataKey="day" 
          opacity={0.3}
          width= {200}          
        />  
          <YAxis hide={true} domain={[0, "dataMax + 30"]} />    
        <Tooltip
          cursor ={false}
          content={<CustomTooltip/>} 
        />         
        <Area 
          type="monotone" 
          dataKey="sessionLength" 
          stroke="white"
          fill= "none"         
        />       
      </AreaChart>  
    </>
  )
}
export default Graphline