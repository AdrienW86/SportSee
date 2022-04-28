import React from 'react';
import FirstNameContextProvider from '../Services/user-profil';
import ActivityContextProvider from '../Services/user-activity';
import PerformanceContextProvider from '../Services/user-performance';
import Navbar from '../Components/Navbar/Navbar';
import Aside from '../Components/Aside/Aside.js';
import Hello from '../Components/Hello/Hello';
import Graphline from '../Components/Graphline/Graphline.js';
import RadarGraph from '../Components/Radar/Radar.js';
import Activity from '../Components/Activity/Activity';
import Circle from '../Components/Circle/Circle';
import Card from '../Components/Card/Card';
import Proteine from '../assets/protein-icon.svg'
import Calories from '../assets/calories-icon.svg'
import Glucides from '../assets/carbs-icon.svg'
import Lipides from '../assets/fat-icon.svg'
import './home.css';



function Home() {
  return (
    <>
      <Navbar/>
        <main>
          <Aside/>
            <div>
              <FirstNameContextProvider>
                <Hello/>
              </FirstNameContextProvider>
              
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
                   
                    <Circle />
                  </div>
                </section>
                <section className='numbers-container'>
                  <Card 
                    cover = {Calories}
                    number = {"1930kCal"}
                    unit = "Calories"
                     />
                  <Card 
                    cover = {Proteine}
                    number = {"155g"}
                    unit = "Proteines"
                  />
                  <Card 
                    cover = {Glucides}
                    number = {"290g"}
                    unit = "Glucides"
                  />
                  <Card 
                    cover = {Lipides}
                    number = {"50g"}
                    unit = "Lipides"
                  />
                </section>
              </section>
            </div>
          
        </main>
    </>
  )
}
export default Home