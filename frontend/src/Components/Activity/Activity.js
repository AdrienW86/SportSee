import React from "react";
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './activity.css'

const data = [
    {
      name: '1',
      poids: 60,
      calories: 140,      
    },
    {
      name: '2',
      poids: 61,
      calories: 139,     
    },
    {
      name: '3',
      poids: 62,
      calories: 200,     
    },
    {
      name: '4',
      poids: 62,
      calories: 290,     
    },
    {
      name: '5',
      poids: 61,
      calories: 280,    
    },
    {
      name: '6',
      poids: 62,
      calories: 280,     
    },
    {
      name: '7',
      poids: 61,
      calories: 220,     
    },
    {
      name: '8',
      poids: 60,
      calories: 250,       
    },
    {
      name: '9',
      poids: 61,
      calories: 240,       
    },
    {
      name: '10',
      poids: 62,
      calories: 210,       
    },
  ];

  const CustomTooltip = ({payload }) => {
    if (payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="poids-tooltip">{`${payload[0].payload.poids}kg`}</p>        
          <p className="calories-tooltip">{`${payload[0].payload.calories}Kcal`}</p>
        </div>
      );
    }
    return null;
  };
  
function Activity() {
  return (   
    <div className="activity">
      <h2> Activité quotidienne </h2>
        <BarChart           
            width={835}
            height={236}
            data={data}
            margin={{
            top: 5,
            right: -30,
            left: -30,
            bottom: 0,
          }}
        >        
          <CartesianGrid 
            vertical= {false} 
            strokeDasharray="3 3" 
          />
          <XAxis 
            strokeDasharray="3 3"
            dataKey="name"
            tick={{ fill: '#9B9EAC' }}        
          />
          <YAxis  
            type="number" 
            domain={['dataMin - 1', 'dataMax + 1']}
            yAxisId="right"
            dataKey="poids"
            orientation="right"
            tick={{ fill: '#9B9EAC' }}       
          />
          <YAxis
            type="number" 
            domain={['dataMin - 50', 'dataMax+10']}
            dataKey="calories"
            tick={{ fill: '#9B9EAC' }} 
            yAxisId="left"              
            display="none"
          />
          <Tooltip 
            content={<CustomTooltip />} 
          />                           
          <Bar 
            name={"Poids (kg)"}
            yAxisId="right"
            dataKey="poids" 
            barSize={7} 
            radius= {[50, 50, 0, 0]}
            fill="black"            
          />
          <Bar
            name={"Calories brûlées (kCal)"}
            yAxisId="left"
            dataKey="calories" 
            barSize={7}
            radius= {[50, 50, 0, 0]}
            fill="#E60000"          
          />
          <Legend 
            iconSize={8}
            stroke='red'
            formatter={(value) => <span className="text-color-class">{value}</span>}
            payload={ 
              [
                {id: 'name', value: 'Poids (kg)',  color: '#282D30'} ,
                {id: 'name', value: 'Calories brûlées (kCal)', color: '#E60000'}                       
              ]
            }
          />
        </BarChart>
    </div>
  )
}
export default Activity
