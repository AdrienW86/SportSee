import React from 'react';
import PropTypes from 'prop-types';
// Components
import Navbar from '../../Components/Navbar/Navbar';
import Aside from '../../Components/Aside/Aside.js';
import Hello from '../../Components/Hello/Hello';
import Graphline from '../../Components/Graphline/Graphline.js';
import RadarGraph from '../../Components/Radar/Radar.js';
import Activity from '../../Components/Activity/Activity';
import Circle from '../../Components/Circle/Circle';
import Menu from '../../Components/MenuCard/Menu';
import NotFound from '../NotFound/NotFound';

// Hooks
import { useParams } from 'react-router';
import { getAllDatas, getMockedDatas} from '../../Services/useFetch';
import './dashboard.css';

function Dashboard() {
  const params = useParams()
  const id = parseInt(params.id)
  const location = window.location.href 
  let data 
  data = getAllDatas(id)

  // If request api fail
  if(data === undefined) {
    data = getMockedDatas(id)
  }
  
  // If user change url, he's redirected to the page 404, else page is displayed
  if(data.currentUrl === location || data.currentUrlMocked === location) {
    return (
      <>
        <Navbar/>
          <main>
            <Aside/>
              <div className='container'>             
                <Hello 
                  firstname = {data.user.firstname}
                />             
                  <section className='stats-container'>
                    <section className='graphics-container'>                          
                      <Activity 
                        session = {data.sessionActivity}
                      />                              
                        <div className='graph-container'>
                          <Graphline 
                            session = {data.session}
                          />                
                          <RadarGraph 
                            performance = {data.performance.array}
                        />              
                          <Circle 
                            score = {data.user.score} 
                            todayScore = {data.user.todayScore}
                          />
                        </div>
                    </section>
                    <section className='numbers-container'>                
                      <Menu 
                        infos = {data.infos}
                      />                 
                    </section>
                  </section>
              </div>         
          </main>
      </>
    )
  }else{
    return(<NotFound/>)
  }  
}
Dashboard.propTypes = {
  firstname: PropTypes.string,
  session: PropTypes.array,
  sessionActivity: PropTypes.array,
  performance: PropTypes.array,
  todayScore: PropTypes.number,
  score: PropTypes.number,
  infos: PropTypes.array
}
export default Dashboard