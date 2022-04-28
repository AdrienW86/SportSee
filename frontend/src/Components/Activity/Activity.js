import React , {useContext}from 'react';
import { ActivityContext } from '../../Services/user-activity';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './activity.css'


const CustomTooltip = ({payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="poids-tooltip">{`${payload[0].payload.kilogram}kg`}</p>        
        <p className="calories-tooltip">{`${payload[0].payload.calories}Kcal`}</p>
      </div>
    );
  }
  return null;
};
  
  
function Activity() {

  const{data} = useContext(ActivityContext)
  console.log(data)
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
            dataKey="day"
            tick={{ fill: '#9B9EAC' }}        
          />
          <YAxis  
            type="number" 
            domain={['dataMin - 1', 'dataMax + 1']}
            yAxisId="right"
            dataKey="kilogram"
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
            dataKey="kilogram" 
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
