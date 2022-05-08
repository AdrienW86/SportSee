import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie } from "recharts";
import './circle.css'

function Circle(props) { 
    let dataValue
  
    if(props.todayScore) {
        dataValue = props.todayScore * 100
    }else {
        dataValue = props.score * 100
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
                value="de votre"                
            >   
            <tspan  x="50%" dy="10"className='objectif-text'> de votre </tspan>
            <tspan x="50%" dy="26"className='objectif'> objectif </tspan>
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
Circle.propTypes = {
    todayScore : PropTypes.number,
    score: PropTypes.number,
    dataValue: PropTypes.number,
    secondValue: PropTypes.number
}
export default Circle