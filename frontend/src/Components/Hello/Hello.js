import React from 'react';
import './hello.css';

function Hello(props) {
  return (
    <section className='welcome-message'>
        <h1> Bonjour  <span> {props.firstName} </span></h1>
        <p> Félicitations ! Vous avez explosé vos objectifs hier </p>
    </section>
  )
}
export default Hello