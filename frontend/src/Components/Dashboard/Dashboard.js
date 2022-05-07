import React from 'react';

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
import { UseFetch } from '../../Services/useFetch';

// Methods
import { getUser, getSession, getKeyDatas } from '../../Services/user';
import { userInfos, userActivity, userSessions } from '../../mocked-data';
import { mockedGetUser, mockedGetSession, mockedGetKeyDatas } from '../../Services/mocked-user';
import './dashboard.css';

function Dashboard() {
  // Props
  let user
  let infos
  let session
  let sessionActivity

  // Params
  const params = useParams()
  const id = parseInt(params.id)
  let location = window.location.href 

  // Frontend url
  let currentUrl = `http://localhost:3001/user/${id}`
  let currentUrlMocked = `http://localhost:3001/user-mocked/${id}`
  
  // Backend url
  user = UseFetch(`http://localhost:3000/user/${id}`, getUser)
  infos = UseFetch(`http://localhost:3000/user/${id}`,getKeyDatas )
  session = UseFetch (`http://localhost:3000/user/${id}/average-sessions`,getSession)
  sessionActivity = UseFetch(`http://localhost:3000/user/${id}/activity`,getSession)
  
  // If api data is not loaded, mocked data is loaded
  if(user === undefined) {
    user = mockedGetUser(userInfos, id)
  }
  if(session === undefined) {
    session = mockedGetSession(userSessions, id)
  }
  if(sessionActivity === undefined) {
    sessionActivity= mockedGetSession(userActivity, id)
  }
  if(infos === undefined) {
    infos = mockedGetKeyDatas(userInfos, id)
  }

  // If user change url, he's redirected to the page 404, else page is displayed
  if(currentUrl === location || currentUrlMocked === location) {
    return (
      <>
        <Navbar/>
          <main>
            <Aside/>
              <div>             
                <Hello 
                  firstname = {user.firstname}
                />             
                  <section className='stats-container'>
                    <section className='graphics-container'>                          
                      <Activity 
                        session = {sessionActivity}
                      />                              
                        <div className='graph-container'>
                          <Graphline 
                            session = {session}/>                
                          <RadarGraph />              
                          <Circle 
                            score = {user.score} 
                            todayScore = {user.todayScore}
                          />
                        </div>
                    </section>
                    <section className='numbers-container'>                
                      <Menu infos = {infos}/>                 
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
export default Dashboard