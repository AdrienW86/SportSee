import React , {useContext }from 'react';
import { UserContext } from '../../Services/user-profil';
import './hello.css';


function Hello() {
  const {firstName} = useContext(UserContext)
  return (
    <section className='welcome-message'>
        <h1> Bonjour  
          <span> 
          {firstName}
           </span></h1>
        <p> Félicitations ! Vous avez explosé vos objectifs hier </p>
    </section>
  )
}
export default Hello