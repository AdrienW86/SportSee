import React from 'react';
import { UseFetch } from '../../Services/useFetch';
import './hello.css';
import {getUser} from '../../Services/user'

function Hello() {
 
  const user = UseFetch("http://localhost:3000/user/18", getUser)

  return (
    <section className='welcome-message'>
      <h1> Bonjour 
        <span> {user.firstname} </span> 
      </h1>      
      <p> Félicitations ! Vous avez explosé vos objectifs hier  &#128079;  </p>
    </section> 
  )
}
export default Hello