import React from 'react';
import { useParams } from 'react-router';
import { UseFetch } from '../../Services/useFetch';
import { getUser } from '../../Services/user';
import { PieChart, Pie } from "recharts";
import { userInfos } from '../../mocked-data';
import { mockedGetUser } from '../../Services/mocked-user'
import './circle.css'

export default function Circle() {
    let user
    let dataValue
    const params = useParams()
    const id = parseInt(params.id)

    user = UseFetch(`http://localhost:3000/user/${id}`, getUser)
   
    if(user === undefined) {
        user = mockedGetUser(userInfos, id)
    }

    if(user.todayScore) {
        dataValue = user.todayScore * 100
    }else {
        dataValue = user.score * 100
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