import React , {useEffect }from 'react';
import useFetch from '../../Services/useFetch'
import {Radar,RadarChart,PolarGrid,PolarAngleAxis} from "recharts";
import './radar.css';

function RadarGraph() {

  const [{response, error, isLoading}, doFetch] = useFetch("http://localhost:3000/user/18/performance")

  useEffect(()=> {
    
    console.log(response, error, isLoading)
      doFetch()

      if(isLoading === true) {
        alert(error)
      }
  },[doFetch])

  let values = response.data.data.map(el => el.value)
  let titles = Object.values(response.data.kind)
  let array = []
  let i = 0;

      do {                                   
          array.push({title: titles[i], value: values[i]})
          i +=1  
      } while (i < titles.length)

  return (
    <>      
      <RadarChart className='radar'
        cx={130}
        cy={140}
        outerRadius={88}
        innerRadius={12}
        width={258}
        height={263}
        data={array}
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