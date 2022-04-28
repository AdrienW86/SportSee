import React , {useContext }from 'react';
import { FirstNameContext } from '../../Services/user-profil';
import './hello.css';


function Hello() {
  const {data} = useContext(FirstNameContext)
  return (
    <section className='welcome-message'>
        <h1> Bonjour  
          <span> 
          {data}
           </span></h1>
        <p> Félicitations ! Vous avez explosé vos objectifs hier </p>
    </section>
  )
}
export default Hello