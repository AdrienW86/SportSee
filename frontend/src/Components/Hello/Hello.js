import React from 'react';
import { useParams } from 'react-router';
import { UseFetch } from '../../Services/useFetch';
import { getUser } from '../../Services/user'
import { userInfos } from '../../mocked-data';
import { mockedGetUser } from '../../Services/mocked-user'
import './hello.css';

function Hello() {
  let user
  const params = useParams()
  const id = parseInt(params.id)

  user = UseFetch(`http://localhost:3000/user/${id}`, getUser)

  if(user === undefined) {
    user = mockedGetUser(userInfos, id)
  }

  return (
    <section className='welcome-message'>
      <h1> Bonjour 
        <span className='title-name'> {user.firstname} </span> 
      </h1>      
      <p> Félicitations ! Vous avez explosé vos objectifs hier  &#128079;  </p>
    </section> 
  )
}
export default Hello