import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Aside from '../Components/Aside/Aside.js';
//import Hello from '../Components/Hello/Hello';
import Graphline from '../Components/Graphline/Graphline.js';
import Graph from '../Components/Graph/Graph.js';
import './home.css';

function Home() {
  const [myData, setData] = useState(null)
  
  useEffect(() => {
  //  axios.get("http://localhost:3000/user/18")
  //    .then(res => {
  //    setData(res.data)
  //    })
 },[])
  console.log(myData)
  return (
    <>
      <Navbar/>
        <main>
          <Aside/>
            <div>
           
              <section className='stats-container'>
                <section className='graphics-container'>
                  <div className='activity-graphic'>
                  
                  </div>
                  <div className='graph-container'>
                  <Graphline className='graphline'/>
                  <Graph />
                  </div>
              </section>
              <section className='numbers-container'>

              </section>
            </section>
          </div>
          
        </main>
    </>
  )
}
export default Home