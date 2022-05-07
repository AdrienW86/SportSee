import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Aside from '../../Components/Aside/Aside.js';
import Hello from '../../Components/Hello/Hello';
import Graphline from '../../Components/Graphline/Graphline.js';
import RadarGraph from '../../Components/Radar/Radar.js';
import Activity from '../../Components/Activity/Activity';
import Circle from '../../Components/Circle/Circle';
import Menu from '../../Components/MenuCard/Menu';
import NotFound from '../NotFound/NotFound';
import { useParams } from 'react-router';
import { UseFetch } from '../../Services/useFetch';
import { getUser} from '../../Services/user';
import { userInfos } from '../../mocked-data';
import { mockedGetUser } from '../../Services/mocked-user'
import './dashboard.css';

function Dashboard() {
  let user
  const params = useParams()
  const id = parseInt(params.id)

  let currentUrl = `http://localhost:3001/user/${id}`
  let currentUrlMocked = `http://localhost:3001/user-mocked/${id}`
  let location = window.location.href 

  user = UseFetch(`http://localhost:3000/user/${id}`, getUser)
  
  if(user === undefined) {
    user = mockedGetUser(userInfos, id)
  }

  if(currentUrl === location || currentUrlMocked === location) {
    return (
      <>
        <Navbar/>
          <main>
            <Aside/>
              <div>             
                <Hello/>             
                  <section className='stats-container'>
                    <section className='graphics-container'>                          
                      <Activity/>                              
                        <div className='graph-container'>
                          <Graphline className='graphline'/>                
                          <RadarGraph />              
                          <Circle />
                        </div>
                    </section>
                    <section className='numbers-container'>                
                      <Menu/>                 
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