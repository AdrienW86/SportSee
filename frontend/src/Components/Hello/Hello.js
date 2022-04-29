import React , { useEffect }from 'react';
import './hello.css';
import useFetch from '../../Services/useFetch'

function Hello() {
 
 const [{response, error, isLoading}, doFetch] = useFetch("http://localhost:3000/user/18")

  useEffect(()=> {
    
    console.log(response, error, isLoading)
      doFetch()

      if(isLoading === true) {
        alert(error)
      }
  },[doFetch])
  
  
  return (
    <section className='welcome-message'>
        <h1> Bonjour  
          <span> 
            {/* {response.data.userInfos.firstName}  */}
          </span>
        </h1>
        <p> Félicitations ! Vous avez explosé vos objectifs hier  &#128079;  </p>
    </section>
  )
}
export default Hello