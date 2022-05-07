import React from 'react';
import { useParams } from 'react-router';
import { UseFetch } from '../../Services/useFetch';
import { getSession } from '../../Services/user';
import { mockedGetSession } from '../../Services/mocked-user';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './activity.css'
import { userActivity } from '../../mocked-data';

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
  let session
  const params = useParams()
  let id = parseInt(params.id)

  session = UseFetch(`http://localhost:3000/user/${id}/activity`,getSession)

  if(session === undefined) {
    session = mockedGetSession(userActivity, id)
  }
 
  return (   
    <div className="activity">
      <h2 className='activity-title'> Activité quotidienne </h2>
        <BarChart           
            width={835}
            height={236}
            data={session}
            margin={{
            top: 5,
            right: -30,
            left: -30,
            bottom: 0,
          }}         
        >        
          <CartesianGrid 
            vertical= {true}             
          />
          <XAxis             
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
