import React, {useEffect} from 'react';
import useFetch from '../../Services/useFetch'
import { PieChart, Pie } from "recharts";
import './circle.css'

export default function Circle() {
    
    const [{response, error, isLoading}, doFetch] = useFetch("http://localhost:3000/user/18")
    useEffect(()=> {
    
        console.log(response, error, isLoading)
          doFetch()
            console.log(response.data.score)
          if(isLoading === true) {
            alert(error)
          }
      },[doFetch])

    let dataValue

    if(!response.data.score) {
        dataValue = response.data.todayScore * 100
    }else {
        dataValue = response.data.score * 100
    }
    
    let secondValue = 100 - dataValue;
    
    const data = 
        [
            { name: "1", value: dataValue, fill:"#E60000", borderRadius:"60px", border:"0px solid transparent"}, 
            { name: "2", value: secondValue, fill:"none", border: "0px solid transparent" }
        ]   
    
  return (
    <PieChart 
        className ="circle"
        width={258} 
        height={263}>
            <text 
                x={49}
                y={35}
                textAnchor='middle' 
                dominantBaseline= 'middle' 
            >   Score
            </text>
            <text
                className='percentage' 
                x={135}
                y={130}
                textAnchor='middle' 
                dominantBaseline= 'middle' 
            >
                {dataValue} % 
            </text>
            <text
                className='text-percentage'
                x={125}
                y={150}
                width={2000}
                textAnchor='middle'
                dominantBaseline='middle'
                fill='#74798C'
            >   
                de votre objectif
            </text>     
        <Pie
            className='test-circle'
            data={data}
            dataKey={"value"}
            cx={-145}
            cy={120}
            innerRadius={60}
            outerRadius={70} 
            cornerRadius={20}
        />
    </PieChart>
  )
}