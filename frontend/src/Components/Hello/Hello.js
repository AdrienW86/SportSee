import React from 'react';
import './hello.css';

function Hello(props) {
  return (
    <section className='welcome-message'>
      <h1> Bonjour 
        <span className='title-name'> {props.firstname} </span> 
      </h1>      
      <p> Félicitations ! Vous avez explosé vos objectifs hier  &#128079;  </p>
    </section> 
  )
}
export default Hello