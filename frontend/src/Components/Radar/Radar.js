import React from 'react';
import { useParams } from 'react-router';
import { UseFetch} from '../../Services/useFetch';
import { getPerformance} from '../../Services/user';
import { userPerformance } from '../../mocked-data'
import { mockedPerformance } from '../../Services/mocked-user';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import './radar.css';

function RadarGraph() {
  const params = useParams()
  let id = parseInt(params.id)
  let performance

  performance = UseFetch(`http://localhost:3000/user/${id}/performance`, getPerformance)
  
  if(performance === undefined) {
    performance = mockedPerformance( userPerformance, id)
  }

  return (
    <>     
      <RadarChart className='radar'
        cx={128}
        cy={140}
        outerRadius={78}     
        width={258}
        height={263}
        data= {performance.array}
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
export default RadarGraph