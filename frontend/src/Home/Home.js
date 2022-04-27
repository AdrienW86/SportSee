import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
  const [myData, setData] = useState(null)
  
  useEffect(() => {
    axios.get("http://localhost:3000/user/18")
      .then(res => {
     setData(res.data)
     })
 },[])
  console.log(myData)
  return (
    <>
      <Navbar/>
        <main>
          <Aside/>
            <div>
              <Hello 
                firstName = "Thomas"
                // {myData.data.userInfos.firstName}
              />
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