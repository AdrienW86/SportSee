import Navbar from '../Components/Navbar/Navbar';
import Aside from '../Components/Aside/Aside.js';
import Hello from '../Components/Hello/Hello';
import Graphline from '../Components/Graphline/Graphline.js';
import RadarGraph from '../Components/Radar/Radar.js';
import Activity from '../Components/Activity/Activity';
import Circle from '../Components/Circle/Circle';
import Menu from '../Components/MenuCard/Menu';
import './home.css';

function Home() {  
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
}
export default Home