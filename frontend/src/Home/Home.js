

import UserInfosContextProvider from '../Services/user-profil';
import ActivityContextProvider from '../Services/user-activity';
import PerformanceContextProvider from '../Services/user-performance';
import Navbar from '../Components/Navbar/Navbar';
import Aside from '../Components/Aside/Aside.js';
import Hello from '../Components/Hello/Hello';
import Graphline from '../Components/Graphline/Graphline.js';
import RadarGraph from '../Components/Radar/Radar.js';
import Activity from '../Components/Activity/Activity';
import Circle from '../Components/Circle/Circle';

import './home.css';
import Menu from '../Components/MenuCard/Menu';



function Home() {

 
  return (
    <>
      <Navbar/>
        <main>
          <Aside/>
            <div>
              <UserInfosContextProvider>
                <Hello/>
              </UserInfosContextProvider>
              
              <section className='stats-container'>
                <section className='graphics-container'> 
                <ActivityContextProvider >               
                 <Activity/>                
                </ActivityContextProvider>
                  <div className='graph-container'>
                    <Graphline className='graphline'/>
                    <PerformanceContextProvider>
                      <RadarGraph />
                    </PerformanceContextProvider>
                   <UserInfosContextProvider>
                   <Circle />
                   </UserInfosContextProvider>
                    

                  </div>
                </section>
                <section className='numbers-container'>
                  <UserInfosContextProvider>
                  <Menu/>
                  </UserInfosContextProvider>
                </section>
              </section>
            </div>
          
        </main>
    </>
  )
}
export default Home