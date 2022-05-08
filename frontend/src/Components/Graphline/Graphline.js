import React from 'react';
import PropTypes from 'prop-types';
import { LineChart,  Tooltip, Line, XAxis, YAxis, ResponsiveContainer} from "recharts";
import './graphline.css';

/**Custom Tooltip
 * @type {function}
 * @param {object} payload hover an array with data is created
 * @returns {HTMLElement}
 */

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
    <div className='line-chart-container'>
      <h2 className='graphline-title'> Durée moyenne des sessions </h2>   
      <LineChart
        width= {260}
        height= {263}
        data={props.session}  
        
      >       
      <XAxis
        dataKey={"day"}
        stroke="rgba(255, 255, 255, 0.5)"   
      />
        <YAxis hide={true} domain={[0, "dataMax +30"]} />   
        <Tooltip
          cursor={{
            stroke: "rgba(0, 0, 0, 0.1)",
            strokeWidth: 80,
            strokeHeight: 270,
          }}
          padding = {{
            top: 50
          }}
          content={<CustomTooltip/>} 
        />         
        <Line 
        className='line'
         strokeWidth={2}
          dataKey={"sessionLength"}
          type={"monotone"}
          stroke="#fff"
          dot={false}
          activeDot={{
            stroke: "#fff",
            strokeWidth: 15,
            strokeHeight: 40,
            strokeOpacity: 0.2,
          }}  
            
        />       
      </LineChart> 
      
      </div>
    </>
  )
}
Graphline.propTypes = {
  id : PropTypes.number,
  location: PropTypes.string,
  data: PropTypes.array,
  currentUrl: PropTypes.string,
  currentUrlMocked: PropTypes.string,
  firstname: PropTypes.string,
  session: PropTypes.array,
  
}
export default Graphline