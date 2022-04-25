import React from 'react';
import Yoga from '../../assets/yoga.svg'
import Swim from '../../assets/swimming.svg'
import Ride from '../../assets/riding.svg'
import Dumb from '../../assets/dumbbells.svg'
import './aside.css';

function Aside() {
  return (
    <aside>
        <img className='sport-img' src={Yoga} alt='yoga'/>
        <img className='sport-img' src={Swim} alt='swimming'/>
        <img className='sport-img' src={Ride} alt='riding'/>
        <img className='sport-img' src={Dumb} alt='dumbbells'/>
        Aside
    </aside>
  )
}
export default Aside