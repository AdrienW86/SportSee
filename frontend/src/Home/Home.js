import Navbar from '../Components/Navbar/Navbar';
import Aside from '../Components/Aside/Aside.js';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {  
  return (
    <>
      <Navbar/>
        <main>
          <Aside/>
            <section className='dataId'>
              <Link to={`user/12`}>
                <button className='button-data'>
                  User 12
                </button> 
              </Link>
              <Link to={`user/18`}>
                <button className='button-data'> 
                  User 18
                </button>
              </Link>
              <Link to={`user-mocked/12`}>
                <button className='button-data'>
                  Mocked user 12
                </button> 
              </Link>
              <Link to={`user-mocked/18`}>
                <button className='button-data'> 
                  Mocked user 18
                </button>
              </Link>                   
            </section>      
        </main>
    </>
  )
}
export default Home