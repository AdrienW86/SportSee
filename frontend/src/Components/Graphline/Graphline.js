import React from 'react';
import { useParams } from 'react-router';
import { UseFetch } from '../../Services/useFetch';
import { getSession } from '../../Services/user';
import { AreaChart, Tooltip, Area, XAxis, YAxis} from "recharts";
import { userSessions } from '../../mocked-data';
import { mockedGetSession } from '../../Services/mocked-user';
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

function Graphline() {
  let session
  const params = useParams()
  const id = parseInt(params.id)

 session = UseFetch (`http://localhost:3000/user/${id}/average-sessions`,getSession)

 if(session === undefined) {
  session = mockedGetSession(userSessions, id)
}

  return (
    <>
    <h2 className='graphline-title'> Durée moyenne des sessions </h2>
      <AreaChart
        width={258}
        height={263}
        data={session}       
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